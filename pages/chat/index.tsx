import ChatLayout from 'layouts/chatLayout';
import React, { ReactElement, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { NextPageWithLayout } from 'types/layout.type';
import { ChatContext } from 'context/ChatContext';
import HeaderChat from '@/components/HeaderChat';
import InputChat from '@/components/InputChat';
import MessageChat from '@/components/MessageChat';

const messages = [1, 3, 4, 4, 4, 4, 4];

const Chat: NextPageWithLayout = () => {
  const { showMessage, setShowMessage, isMobile } = useContext(ChatContext);

  return (
    <React.Fragment>
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
            <MessageChat key={index} />
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
