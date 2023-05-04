import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import SidebarSettings from '@/components/SidebarSettings';

const SettingsLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <Box w={'full'} pt={'84px'} px={[1, '50px', '50px', '100px']}>
        <Text fontSize={'3xl'} fontWeight={'medium'} mb={5}>
          Cài đặt
        </Text>
        <Flex w={'full'} px={5}>
          <SidebarSettings />
          {children}
        </Flex>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default SettingsLayout;
