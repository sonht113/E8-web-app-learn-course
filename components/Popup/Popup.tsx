import React, { ReactElement } from 'react';
import { PopoverArrow, PopoverBody, PopoverContent } from '@chakra-ui/react';

type IPopupProps = {
  children: ReactElement;
  width?: number | string;
};

const Popup: React.FC<IPopupProps> = ({ children, width }) => {
  return (
    <PopoverContent
      borderColor={'gray'}
      borderWidth={2}
      shadow={'lg'}
      width={width}
      mr={2}
    >
      <PopoverArrow
        borderTopColor={'gray'}
        borderLeftColor={'gray'}
        borderTopWidth={2}
        borderLeftWidth={2}
        ml={1}
      />
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  );
};

export default Popup;
