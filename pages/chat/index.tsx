import ChatLayout from 'layouts/chatLayout';
import React, { ReactElement, useContext, useState } from 'react';
import { Box, Image, Flex, useDisclosure } from '@chakra-ui/react';
import { NextPageWithLayout } from 'types/layout.type';
import { ChatContext } from 'context/ChatContext';
import HeaderChat from '@/components/HeaderChat';
import InputChat from '@/components/InputChat';
import MessageChat from '@/components/MessageChat';
import ModalFC from '@/components/ModalFC';
import FormAddStudentJoinClass from '@/components/FormAddStudentJoinClass';
import useDebounce from 'hook/useDebounce';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  searchUserWantAddJoinClassRoom,
  updateConversation,
} from 'api/chat.api';
import { ConversationUpdate } from 'types/converation.type';
import useToastify from 'hook/useToastify';
import { FileType, Message } from 'types/message.type';
import MessageSkeleton from '@/components/MessageSkeleton';

enum TypePreview {
  'IMAGE',
  'FILE',
  'AUDIO',
}

export type DataMessage = {
  value: string | any;
  type: FileType.TEXT | FileType.IMAGE | FileType.FILE | FileType.AUDIO;
};

export type DataModal = {
  typePreview: TypePreview.IMAGE | TypePreview.FILE;
  url: string;
};

const Chat: NextPageWithLayout = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [dataModal, setDataModal] = useState<DataModal>({
    typePreview: 0,
    url: '',
  });
  const [typeShowModal, setTypeShowModal] = useState<string>('');
  const [valueSearchUser, setValueSearchUser] = useState<string>('');
  const [message, setMessage] = useState<DataMessage>({
    value: '',
    type: FileType.TEXT,
  });

  const {
    showMessage,
    setShowMessage,
    isMobile,
    conversationDetail,
    setConversationDetail,
    messages,
    sendMessage,
  } = useContext(ChatContext);
  const toast = useToastify();
  const DURATION_TOAST = 1000;

  const debounceValue = useDebounce(valueSearchUser, 1000);

  const { data, isLoading } = useQuery({
    queryKey: ['search', debounceValue],
    queryFn: () => {
      return searchUserWantAddJoinClassRoom(debounceValue);
    },
  });

  const updateConversationMutate = useMutation({
    mutationFn: (body: { id: string; data: ConversationUpdate }) =>
      updateConversation(body),
  });

  const handleUpdateConversation = (body: {
    id: string;
    data: ConversationUpdate;
  }) => {
    updateConversationMutate.mutate(body, {
      onSuccess: (res) => {
        toast.handleOpenToastify('success', 'Thêm thành công', DURATION_TOAST);
        setConversationDetail(res?.data);
      },
      onError: (error) => {
        toast.handleOpenToastify(
          'error',
          'Thêm không thành công',
          DURATION_TOAST
        );
      },
    });
  };

  const handleSendMessage = () => {
    if (!message.value) return;
    sendMessage(message);
    setMessage({ value: '', type: FileType.TEXT });
  };

  const handleSendFiles = (fileMessage: DataMessage) => {
    if (!fileMessage.type) return;
    sendMessage(fileMessage);
    setMessage({ value: '', type: FileType.TEXT });
  };

  return (
    <React.Fragment>
      <ModalFC
        title={typeShowModal === 'add-student' && 'Add student'}
        onClose={() => {
          onClose();
          typeShowModal === 'add-student' && setValueSearchUser('');
        }}
        isOpen={isOpen}
      >
        {typeShowModal === 'show-file' && dataModal.typePreview === 0 && (
          <Flex w={'full'} justifyContent={'center'} pb={8}>
            <Image cursor={'pointer'} objectFit="cover" src={dataModal.url} />
          </Flex>
        )}
        {typeShowModal === 'add-student' && (
          <FormAddStudentJoinClass
            setValue={setValueSearchUser}
            value={valueSearchUser}
            data={data?.data}
            isLoading={isLoading}
            handleAddStudent={handleUpdateConversation}
            conversation={conversationDetail}
          />
        )}
      </ModalFC>
      <Box
        position={'relative'}
        className={`chat ${showMessage && 'show'}`}
        display={['none', 'block']}
      >
        <HeaderChat
          showMessage={showMessage}
          isMobile={isMobile}
          setShowMessage={setShowMessage}
          handleOpenModalAddStudent={() => {
            setTypeShowModal('add-student');
            onOpen();
          }}
        />
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={7}
          className="message-chat-area"
          p={2}
          pb={'80px'}
          w={'full'}
          h={'calc(100vh - 61px - 64px)'}
          overflowY={'scroll'}
          mt={'61px'}
          bg={'gray.300'}
        >
          {!messages &&
            [1, 2, 3].map((_item, index) => <MessageSkeleton key={index} />)}
          {messages &&
            messages?.map((item: Message, index) => (
              <MessageChat
                key={index}
                handleOpenModalPreview={() => {
                  setTypeShowModal('show-file');
                  onOpen();
                }}
                setDataModal={setDataModal}
                message={item}
              />
            ))}
        </Box>
        <InputChat
          isMobile={isMobile}
          setMessage={setMessage}
          message={message}
          onSendMessage={handleSendMessage}
          onSendFiles={handleSendFiles}
        />
      </Box>
    </React.Fragment>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};

export default Chat;
