import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import NavbarMobile from '@/components/NavbarMobile';

const SearchLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <Box w={'full'} pt={'84px'} px={1}>
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default SearchLayout;
