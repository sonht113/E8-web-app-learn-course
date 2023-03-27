/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { Box, Input, Button } from '@chakra-ui/react';
import React from 'react';
import validator from 'validator';

type IOTPInputProps = {
  enableSendOTP: boolean;
  addressSendOTP: string;
  isSwitch?: boolean;
  setErrorValidateOTP?: (_v: string) => void;
  sendOTP: () => void;
  otp?: string;
};

const OTPInput: React.FC<IOTPInputProps> = ({
  enableSendOTP,
  addressSendOTP,
  isSwitch,
  setErrorValidateOTP,
  sendOTP,
  otp,
}) => {
  const onSubmit = () => {
    if (!isSwitch) {
      if (!validator.isEmail(addressSendOTP)) {
        setErrorValidateOTP('Email không hợp lệ');
      } else {
        sendOTP();
        setErrorValidateOTP('');
      }
    } else {
      if (addressSendOTP.toString().trim().length !== 10) {
        setErrorValidateOTP('Số điện thoại không hợp lệ');
      } else {
        setErrorValidateOTP('');
        sendOTP();
      }
    }
  };

  return (
    <Box position={'relative'}>
      <Input
        _placeholder={{ fontSize: 'sm' }}
        placeholder="Nhập mã xác nhận"
        rounded={'full'}
        value={otp}
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
        {otp ? 'Verify' : 'Gửi mã'}
      </Button>
    </Box>
  );
};

export default OTPInput;
