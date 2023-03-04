import React from 'react';
import { Flex } from '@chakra-ui/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import NavbarMobile from '@/components/NavbarMobile';

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <Flex pt={'84px'} px={1}>
        <Sidebar />
        {children}
      </Flex>
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
