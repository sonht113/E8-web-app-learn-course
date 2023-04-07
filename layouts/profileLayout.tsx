import { Box } from '@chakra-ui/react';
import React from 'react';

import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import Footer from '@/components/Footer';

const ProfileLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <Box w={['full', '80%', '80%']} mx={'auto'} pt={'64px'} mb={'100px'}>
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default ProfileLayout;
