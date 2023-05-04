import { Box, Center } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

type IButtonOutlineProps = {
  icon?: ReactElement;
  name: string;
  click?: () => void;
};

const ButtonOutline: React.FC<IButtonOutlineProps> = ({
  icon,
  name,
  click,
}) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      py={2}
      border={'2px'}
      borderColor={'#c9c9c9'}
      cursor={'pointer'}
      _hover={{ bg: '#c9c9c9', transition: 'linear 0.2s' }}
      w={['90%', '60%', '80%']}
      rounded={'full'}
      onClick={click}
    >
      {icon && <Box ml={3}>{icon}</Box>}
      {/* <ArrowBackIcon fontSize={'lg'} ml={3} /> */}
      <Center
        fontSize={'md'}
        fontWeight={'medium'}
        color={'#313131'}
        mx={'auto'}
      >
        {name}
      </Center>
    </Box>
  );
};

export default ButtonOutline;
