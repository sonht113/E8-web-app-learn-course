import ChatLayout from 'layouts/chatLayout';
import React, { ReactElement, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { NextPageWithLayout } from 'types/layout.type';
import { ChatContext } from 'context/ChatContext';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Chat: NextPageWithLayout = () => {
  const { showMessage, setShowMessage } = useContext(ChatContext);
  console.log(showMessage);

  return (
    <Box
      className={`chat ${showMessage && 'show'}`}
      display={['none', 'block']}
    >
      <ArrowBackIcon onClick={() => setShowMessage(!showMessage)} />
      Chat message
    </Box>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};

export default Chat;
