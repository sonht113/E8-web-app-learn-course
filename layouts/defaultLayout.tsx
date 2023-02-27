import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Flex } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Flex pt={'84px'} px={6}>
        <Sidebar />
        {children}
      </Flex>

      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
