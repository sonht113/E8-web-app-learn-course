import { Box, Input, Button } from '@chakra-ui/react';
import React from 'react';
import validator from 'validator';

type IOTPInputProps = {
  enableSendOTP: boolean;
  addressSendOTP: string;
  isSwitch?: boolean;
};

const OTPInput: React.FC<IOTPInputProps> = ({
  enableSendOTP,
  addressSendOTP,
  isSwitch,
}) => {
  const onSubmit = () => {
    if (!isSwitch) {
      !validator.isEmail(addressSendOTP)
        ? console.log('Email không hợp lệ')
        : true;
    } else {
      addressSendOTP.toString().trim().length !== 10
        ? console.log('Số điện thoại không hợp lệ')
        : true;
    }
  };

  return (
    <Box position={'relative'}>
      <Input
        _placeholder={{ fontSize: 'sm' }}
        placeholder="Nhập mã xác nhận"
        rounded={'full'}
        bg={'gray.100'}
        disabled={!enableSendOTP}
      />
      <Button
        onClick={onSubmit}
        fontSize={'sm'}
        position={'absolute'}
        top={0}
        right={0}
        rounded={'full'}
        color={'white'}
        bg={'#00b0a7'}
        zIndex={4}
        isDisabled={!enableSendOTP}
        _hover={{ color: 'black', bg: 'gray.300' }}
      >
        Gửi mã
      </Button>
    </Box>
  );
};

export default OTPInput;
