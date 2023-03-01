import React, { useContext } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Flex } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import NavbarMobile from '@/components/NavbarMobile';
import { NavbarMobileContext } from 'context/NavbarMobileContext';

const DefaultLayout = ({ children }) => {
  const { openNavbarMobile, setOpenNavbarMobile } =
    useContext(NavbarMobileContext);

  return (
    <React.Fragment>
      <Navbar />
      {openNavbarMobile && (
        <NavbarMobile
          setOpenNavbarMobile={setOpenNavbarMobile}
          className={`navbarMobileOpen ${
            !openNavbarMobile && 'navbarMobileClose'
          }`}
        />
      )}
      <Flex pt={'84px'} px={6}>
        <Sidebar />
        {children}
      </Flex>

      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
