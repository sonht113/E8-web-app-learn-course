import { useMutation, useQuery } from '@tanstack/react-query';
import { getConversations } from 'api/chat.api';
import { uploadFilesAPI } from 'api/upload.api';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Conversation } from 'types/converation.type';

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
});

export const ChatContextProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [avatarClassRoom, setAvatarClassRoom] = useState<any>(null);
  const [roomActive, setRoomActive] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  const selectRoom = (roomId: string) => {
    setRoomActive(roomId);
    router.push(`/chat?room=${roomId}`);
  };

  const conversationsQuery = useQuery({
    queryKey: ['conversations'],
    queryFn: () => getConversations(),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const uploadMutate = useMutation({
    mutationFn: (body: any) => uploadFilesAPI(body),
  });

  const uploadFiles = (body: any) => {
    uploadMutate.mutate(body, {
      onSuccess: (res) => {
        console.log(res);
        setAvatarClassRoom(null);
      },
      onError: (error: any) => {
        console.log(error);
        setAvatarClassRoom(null);
      },
    });
  };

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        conversations: conversationsQuery.data?.data,
        showMessage,
        setShowMessage,
        roomActive,
        setRoomActive,
        isMobile,
        selectRoom,
        avatarClassRoom,
        setAvatarClassRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
