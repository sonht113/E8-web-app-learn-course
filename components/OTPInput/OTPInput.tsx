/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { Box, Input, Button, Text } from '@chakra-ui/react';
import React from 'react';
import validator from 'validator';

type IOTPInputProps = {
  enableSendOTP: boolean;
  addressSendOTP: string;
  isSwitch?: boolean;
  setErrorValidateOTP?: (_v: string) => void;
  sendOTP: () => void;
  otp?: string;
  setOtp: (_v: string) => void;
  verifyOTP?: () => void;
  isVerifySuccessfully?: { success: boolean; error: string };
};

const OTPInput: React.FC<IOTPInputProps> = ({
  enableSendOTP,
  addressSendOTP,
  isSwitch,
  setErrorValidateOTP,
  sendOTP,
  otp,
  setOtp,
  verifyOTP,
  isVerifySuccessfully,
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
    <Box h={'70px'}>
      <Box position={'relative'}>
        <Input
          _placeholder={{ fontSize: 'sm' }}
          placeholder="Nhập mã xác nhận"
          rounded={'full'}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          bg={'gray.100'}
          disabled={!enableSendOTP}
        />
        <Button
          onClick={otp ? verifyOTP : onSubmit}
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
          {otp ? 'Verify' : 'Nhận mã'}
        </Button>
      </Box>
      {otp && (
        <Text
          fontSize={'xs'}
          pl={3}
          color={isVerifySuccessfully.success ? 'green' : 'red'}
        >
          {' '}
          {isVerifySuccessfully.success
            ? 'Mã OTP hợp lệ'
            : isVerifySuccessfully.error}
        </Text>
      )}
    </Box>
  );
};

export default OTPInput;
