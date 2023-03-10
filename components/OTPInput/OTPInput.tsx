import { Box, Input, Button } from '@chakra-ui/react';
import React from 'react';

const OTPInput = () => {
  return (
    <Box position={'relative'}>
      <Input
        _placeholder={{ fontSize: 'sm' }}
        placeholder="Nhập mã xác nhận"
        rounded={'full'}
        bg={'gray.100'}
        disabled
      />
      <Button
        fontSize={'sm'}
        position={'absolute'}
        top={0}
        right={0}
        rounded={'full'}
        color={'white'}
        bg={'#00b0a7'}
        zIndex={4}
        isDisabled={true}
        _hover={{ color: 'black', bg: 'gray.300' }}
      >
        Gửi mã
      </Button>
    </Box>
  );
};

export default OTPInput;
