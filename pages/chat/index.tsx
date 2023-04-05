import ChatLayout from 'layouts/chatLayout';
import React, { ReactElement, useContext, useState } from 'react';
import { Box, Image, Flex, useDisclosure } from '@chakra-ui/react';
import { NextPageWithLayout } from 'types/layout.type';
import { ChatContext } from 'context/ChatContext';
import HeaderChat from '@/components/HeaderChat';
import InputChat from '@/components/InputChat';
import MessageChat from '@/components/MessageChat';
import ModalFC from '@/components/ModalFC';

const messages = [1, 3, 4, 4, 4, 4, 4];

enum TypePreview {
  'IMAGE',
  'FILE',
}

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
  const { showMessage, setShowMessage, isMobile } = useContext(ChatContext);

  return (
    <React.Fragment>
      <ModalFC onClose={onClose} isOpen={isOpen}>
        {dataModal.typePreview === 0 && (
          <Flex w={'full'} justifyContent={'center'} pb={8}>
            <Image
              cursor={'pointer'}
              objectFit="cover"
              src={dataModal.url}
              alt="Dan Abramov"
            />
          </Flex>
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
        />
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={7}
          className="message-chat-area"
          p={2}
          w={'full'}
          h={'calc(100vh - 61px - 64px)'}
          overflowY={'scroll'}
          mt={'61px'}
        >
          {messages.map((_item, index) => (
            <MessageChat
              key={index}
              handleOpenModalPreview={() => onOpen()}
              setDataModal={setDataModal}
            />
          ))}
        </Box>
        <InputChat isMobile={isMobile} />
      </Box>
    </React.Fragment>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};

export default Chat;
