import { Box } from '@chakra-ui/react';
import React from 'react';

import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import Footer from '@/components/Footer';
import { ProfileContextProvider } from 'context/ProfileContext';

const ProfileLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <ProfileContextProvider>
        <Box w={['full', '80%', '80%']} mx={'auto'} pt={'64px'} mb={'100px'}>
          {children}
        </Box>
      </ProfileContextProvider>

      <Footer />
    </React.Fragment>
  );
};

export default ProfileLayout;
