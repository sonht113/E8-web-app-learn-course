import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

interface NabarMobileContextProp {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const NavbarMobileContext = React.createContext<NabarMobileContextProp>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const NavbarMobileContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavbarMobileContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </NavbarMobileContext.Provider>
  );
};
