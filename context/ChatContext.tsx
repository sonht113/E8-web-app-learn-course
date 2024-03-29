import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createConversationApi,
  createMessagesApi,
  getConversationDetail,
  getConversations,
  getMessages,
  updateConversationApi,
} from 'api/chat.api';
import { io } from 'socket.io-client';
import { confirmUploadAPI, uploadFilesAPI } from 'api/upload.api';
import useToastify from 'hook/useToastify';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Conversation,
  ConversationCreate,
  ConversationUpdate,
} from 'types/converation.type';
import { AuthenContext } from './AuthenContext';
import { FileType, Message, MessageCreateType } from 'types/message.type';

type DataMessage = {
  value: string | any;
  type: FileType.TEXT | FileType.IMAGE | FileType.FILE | FileType.AUDIO;
};

type IChatContext = {
  showMessage: boolean;
  isMobile: boolean;
  roomActive: string;
  setShowMessage: (v: boolean) => void;
  setRoomActive: (v: string) => void;
  selectRoom: (idRoom: string) => void;
  conversations: Conversation[] | any;
  avatarClassRoom: any;
  setAvatarClassRoom: (v: any) => void;
  conversationDetail: Conversation | null;
  setConversationDetail: React.Dispatch<React.SetStateAction<Conversation>>;
  messages: Message[];
  createConversation: (nameChat: string, callback: () => void) => void;
  sendMessage: (v: DataMessage) => void;
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
};

export const ChatContext = React.createContext<IChatContext>({
  showMessage: false,
  roomActive: '',
  isMobile: false,
  setShowMessage: (_v: boolean) => {},
  setRoomActive: (_v: string) => {},
  selectRoom: (_idRoom: string) => {},
  conversations: [],
  avatarClassRoom: null,
  setAvatarClassRoom: (_v: any) => {},
  conversationDetail: null,
  setConversationDetail: (v: Conversation | null) => {},
  messages: [],
  createConversation: (v: string, callback) => {},
  sendMessage: (v: DataMessage) => {},
  setConversations: () => {},
});

const DURATION_TOAST = 3000;

export const ChatContextProvider = ({ children }) => {
  const { user } = useContext(AuthenContext);

  const [showMessage, setShowMessage] = useState(false);
  const [conversations, setConversations] = useState<Conversation[] | null>(
    null
  );
  const [avatarClassRoom, setAvatarClassRoom] = useState<any>(null);
  const [roomActive, setRoomActive] = useState<string>('');
  const [conversationDetail, setConversationDetail] =
    useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [fileUploaded, setFileUploaded] = useState<string>('');

  const formData = new FormData();
  const router = useRouter();
  const queryClient = useQueryClient();
  const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
    autoConnect: true,
  });
  const toast = useToastify();

  socket.on('received_message', (message) => {
    let arr: Message[] = messages;
    if (message) {
      arr = [...arr, { ...message }];
    }
    setMessages([...arr]);
    setFileUploaded('');
  });

  const selectRoom = (roomId: string) => {
    setRoomActive(roomId);
    router.push(`/chat?room=${roomId}`);
    conversationDetailQuery(roomId);
    setMessages([]);
    messagesQuery(roomId);
  };

  const conversationsQuery = () => {
    queryClient.prefetchQuery(['conversations'], {
      queryFn: () =>
        getConversations()
          .then((res) => {
            setConversations(
              res?.data.filter((item: Conversation) =>
                item.users.find((id) => id === user._id)
              )
            );
            return res;
          })
          .catch((err) => {
            console.log(err);
          }),
    });
  };

  const conversationDetailQuery = (id: string) => {
    return queryClient.prefetchQuery(['conversation', id], {
      queryFn: () =>
        getConversationDetail(id)
          .then((res) => {
            setConversationDetail(res?.data);
            return res;
          })
          .catch((err) => console.log(err)),
    });
  };

  const messagesQuery = (id: string) => {
    queryClient.prefetchQuery(['meesages', id], {
      queryFn: () =>
        getMessages(id, 'sender')
          .then((res) => {
            const arr: Message[] = [];
            const results = res.data.results.sort(
              (a: Message, b: Message) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            );
            for (const message of results) {
              arr.push({
                content: message.content,
                fileType: message.fileType,
                idConversation: message.idConversation,
                readers: message.readers,
                sender: {
                  _id: message.sender._id,
                  avatar: message.sender.avatar,
                  fullName: message.sender.fullName,
                },
              });
            }
            setMessages(arr);
            return res;
          })
          .catch((err) => console.log(err)),
    });
  };

  const createMessageMutate = useMutation({
    mutationFn: (body: MessageCreateType) => createMessagesApi(body),
  });

  const updateConversationMutate = useMutation({
    mutationFn: (body: { id: string; data: ConversationUpdate }) =>
      updateConversationApi(body),
  });

  const uploadMutate = useMutation({
    mutationFn: (body: any) => uploadFilesAPI(body),
  });

  const confirmUploadMutate = useMutation({
    mutationFn: (body: { files: string[] }) => confirmUploadAPI(body),
  });

  const createConversationMutate = useMutation({
    mutationFn: (body: ConversationCreate) => createConversationApi(body),
  });

  const confirmFiles = (body: { files: string[]; action?: string }) => {
    confirmUploadMutate.mutate(body, {
      onSuccess: (res) => {
        if (body.action === 'sendMessage') {
          setFileUploaded(res?.data[0][0]);
        } else {
          setAvatarClassRoom(res?.data[0][0]);
        }
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  const uploadFiles = (body: any, action?: string) => {
    uploadMutate.mutate(body, {
      onSuccess: (res) => {
        action
          ? confirmFiles({ files: res.data.files, action: action })
          : confirmFiles({ files: res.data.files });
      },
      onError: (error: any) => {
        console.log(error);
        setAvatarClassRoom(null);
      },
    });
  };

  const createConversation = (nameChat: string, callback: () => void) => {
    const body = {
      users: [user._id],
      chatName: nameChat,
      isGroup: true,
      avatar: avatarClassRoom,
    };
    createConversationMutate.mutate(body, {
      onSuccess: () => {
        toast.handleOpenToastify(
          'success',
          'Tạo lớp học thành công',
          DURATION_TOAST
        );
        setAvatarClassRoom(null);
        callback();
        conversationsQuery();
      },
      onError: (error: any) => {
        toast.handleOpenToastify(
          'error',
          'Tạo lớp học không thành công',
          DURATION_TOAST
        );
        console.log(error);
      },
    });
  };

  const updateConversation = (body: {
    id: string;
    data: ConversationUpdate;
  }) => {
    updateConversationMutate.mutate(body, {
      onSuccess: () => {
        conversationsQuery();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const createMessage = (body: MessageCreateType) => {
    createMessageMutate.mutate(body, {
      onSuccess: (res) => {
        return res;
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const sendMessage = (message: DataMessage) => {
    let body: Message = {
      idConversation: roomActive,
      sender: {
        _id: user._id,
        fullName: user.fullName,
        avatar: user.avatar,
      },
      readers: [user._id],
      content: '',
      fileType: FileType.TEXT,
    };

    if (message.type === FileType.TEXT) {
      body = { ...body, content: message.value };
      updateConversation({
        id: roomActive,
        data: {
          users: conversationDetail?.users,
          chatName: conversationDetail?.chatName,
          isGroup: conversationDetail?.isGroup,
          avatar: conversationDetail?.avatar,
          latestMessage: {
            user: { idUser: user._id },
            text: message.value,
          },
        },
      });
      socket.emit('send_message', body);
      createMessage({ ...body, sender: user._id });
    } else {
      formData.append('files', message.value);
      uploadFiles(formData, 'sendMessage');
    }
  };

  useEffect(() => {
    if (fileUploaded !== '') {
      const mess: Message = {
        idConversation: roomActive,
        sender: { _id: user._id, fullName: user.fullName, avatar: user.avatar },
        readers: [user._id],
        content: fileUploaded,
        fileType: fileUploaded.includes('/image')
          ? FileType.IMAGE
          : FileType.FILE,
      };
      socket.emit('send_message', mess);
      createMessage({ ...mess, sender: user._id });
      updateConversation({
        id: roomActive,
        data: {
          users: conversationDetail.users,
          chatName: conversationDetail.chatName,
          isGroup: conversationDetail.isGroup,
          avatar: conversationDetail.avatar,
          latestMessage: {
            user: {
              idUser: user._id,
            },
            text: fileUploaded.includes('/image')
              ? `${user.fullName} đã gửi một ảnh.`
              : `${user.fullName} đã gửi một file.`,
          },
        },
      });
    }
  }, [fileUploaded]);

  useEffect(() => {
    if (avatarClassRoom && typeof avatarClassRoom !== 'string') {
      for (const avatar of avatarClassRoom) {
        formData.append('files', avatar);
      }
      uploadFiles(formData);
    }
  }, [avatarClassRoom]);

  useEffect(() => {
    conversationsQuery();
    const width = window.innerWidth;
    if (width <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (router.query.room) {
      selectRoom(String(router.query.room));
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        conversations: conversations,
        conversationDetail,
        setConversationDetail,
        showMessage,
        setShowMessage,
        roomActive,
        setRoomActive,
        isMobile,
        selectRoom,
        avatarClassRoom,
        setAvatarClassRoom,
        messages,
        createConversation,
        sendMessage,
        setConversations,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
