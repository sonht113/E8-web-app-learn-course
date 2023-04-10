import { Box, Input, Button, Text } from '@chakra-ui/react';
import React from 'react';
import validator from 'validator';

type IOTPInputProps = {
  enableSendOTP: boolean;
  addressSendOTP: string;
  isSwitch?: boolean;
  setErrorValidateOTP?: (_v: string) => void;
  sendOTP: () => void;
  otp?: { value: string; loading: boolean };
  setOtp: (_v: { value: string; loading: boolean }) => void;
};

const OTPInput: React.FC<IOTPInputProps> = ({
  enableSendOTP,
  addressSendOTP,
  isSwitch,
  setErrorValidateOTP,
  sendOTP,
  otp,
  setOtp,
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
          value={otp.value}
          onChange={(e) => setOtp({ ...otp, value: e.target.value })}
          bg={'gray.100'}
          disabled={enableSendOTP}
        />
        <Button
          onClick={onSubmit}
          isLoading={otp.loading}
          fontSize={'sm'}
          position={'absolute'}
          top={0}
          right={0}
          rounded={'full'}
          color={'white'}
          bg={'#00b0a7'}
          zIndex={4}
          isDisabled={enableSendOTP}
          _hover={{ color: 'black', bg: 'gray.300' }}
        >
          {otp.value ? 'Nhận lại mã' : 'Nhận mã'}
        </Button>
      </Box>
    </Box>
  );
};

export default OTPInput;
