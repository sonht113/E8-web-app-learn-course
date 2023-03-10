import React from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PhoneIcon } from '@chakra-ui/icons';

import InputField from '../InputField';
import InputFieldSwitch from '../InputFieldSwitch';
import OTPInput from '../OTPInput';
import ButtonFC from '../Button';

const FormLoginRegisterDetail = () => {
  const router = useRouter();
  const pathName = router.pathname;

  const defaultInput = {
    label: 'Số điện thoại',
    labelAction:
      pathName === '/register' ? 'Đăng ký với SĐT' : 'Đăng nhập với SĐT',
    icon: <PhoneIcon color="gray.300" />,
    placeholder: 'Số điện thoại',
    type: 'tel',
  };

  const switchInput = {
    label: 'Email',
    labelAction:
      pathName === '/register' ? 'Đăng ký với email' : 'Đăng nhập với email',
    placeholder: 'Địa chỉ email',
    type: 'text',
  };

  return (
    <Box w={['90%', '70%', '70%']} mx={'auto'} mt={10}>
      {router.pathname === '/register' && (
        <InputField
          placeholder="Họ và tên của bạn"
          label="Tên của bạn?"
          type="text"
        />
      )}
      <InputFieldSwitch defaultInput={defaultInput} switchInput={switchInput} />
      <OTPInput />
      <Box mt={5} w={['100%']} mx={'auto'}>
        <ButtonFC
          bgGradient="linear(to-r, green.200, pink.500)"
          title="Đăng ký"
          radius={'full'}
          isDisabled={true}
        />
      </Box>
    </Box>
  );
};

export default FormLoginRegisterDetail;
