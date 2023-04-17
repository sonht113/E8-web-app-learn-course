import React, { useContext } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import SidebarChat from '@/components/SidebarChat';
import { ChatContext, ChatContextProvider } from 'context/ChatContext';
import { useRouter } from 'next/router';

const DefaultLayout = ({ children }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <ChatContextProvider>
        <Navbar />
        <NavbarMobile />
        <Flex w={'full'} pt={'64px'}>
          <SidebarChat />
          {!router.query.room && <EmptyRoom />}
          {router.query.room && children}
        </Flex>
      </ChatContextProvider>
    </React.Fragment>
  );
};

const EmptyRoom = () => {
  const { isMobile } = useContext(ChatContext);
  return (
    <Box
      display={!isMobile ? 'flex' : 'none'}
      justifyContent={'center'}
      alignItems={'center'}
      w={'full'}
      className={'chat'}
    >
      <Center>
        <Text fontSize={'md'} fontWeight={'md'} color={'gray.400'}>
          Please choose class room
        </Text>
      </Center>
    </Box>
  );
};

export default DefaultLayout;
