import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type IPopupSearch = {
  close?: () => void;
  children: ReactNode;
};

const PopupSearch: React.FC<IPopupSearch> = ({ children, close }) => {
  return (
    <Box
      position={'fixed'}
      top={15}
      left={0}
      bg={'rgba(0, 0, 0, 0.7)'}
      w={'full'}
      h={'100vh'}
      zIndex={10000}
      onClick={close}
    >
      <Box
        display={['none', 'block']}
        width={['400px', '400px', '400px', '500px']}
        height={'500px'}
        bg={'gray.300'}
        position={'absolute'}
        top={2}
        left={'50%'}
        style={{ transform: 'translate(-50%)' }}
        zIndex={9999}
        rounded={'xl'}
        className={'popupSearch'}
        overflowY={'scroll'}
        p={20}
        pt={5}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PopupSearch;
