import React from 'react';
import { Flex } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import SidebarChat from '@/components/SidebarChat';
import { ChatContextProvider } from 'context/ChatContext';

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <ChatContextProvider>
        <Navbar />
        <NavbarMobile />
        <Flex w={'full'} pt={'64px'}>
          <SidebarChat />
          {children}
        </Flex>
      </ChatContextProvider>
    </React.Fragment>
  );
};

export default DefaultLayout;
