import ChatLayout from 'layouts/chatLayout';
import React, { ReactElement, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { NextPageWithLayout } from 'types/layout.type';
import { ChatContext } from 'context/ChatContext';
import HeaderChat from '@/components/HeaderChat';
import InputChat from '@/components/InputChat';

const Chat: NextPageWithLayout = () => {
  const { showMessage, setShowMessage, isMobile } = useContext(ChatContext);

  return (
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
      <InputChat isMobile={isMobile} />
    </Box>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};

export default Chat;
