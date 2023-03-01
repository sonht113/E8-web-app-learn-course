/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

interface NabarMobileContextProp {
  openNavbarMobile: boolean;
  setOpenNavbarMobile: (v: boolean) => void;
}
export const NavbarMobileContext = React.createContext<NabarMobileContextProp>({
  openNavbarMobile: false,
  setOpenNavbarMobile: (v: boolean) => {},
});

export const NavbarMobileContextProvider = ({ children }) => {
  const [openNavbarMobile, setOpenNavbarMobile] = useState<boolean>(false);

  return (
    <NavbarMobileContext.Provider
      value={{ openNavbarMobile, setOpenNavbarMobile }}
    >
      {children}
    </NavbarMobileContext.Provider>
  );
};
