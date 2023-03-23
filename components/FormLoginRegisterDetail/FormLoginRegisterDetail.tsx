import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { PhoneIcon } from '@chakra-ui/icons';

import InputField from '../InputField';
import InputFieldSwitch from '../InputFieldSwitch';
import OTPInput from '../OTPInput';
import ButtonFC from '../Button';

export type FormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  otp?: string;
};

const FormLoginRegisterDetail = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const defaultInput = {
    label: 'Số điện thoại',
    name: 'phone',
    labelAction:
      pathName === '/register' ? 'Đăng ký với SĐT' : 'Đăng nhập với SĐT',
    icon: <PhoneIcon color="gray.300" />,
    placeholder: 'Số điện thoại',
    type: 'tel',
  };

  const switchInput = {
    label: 'Email',
    name: 'email',
    labelAction:
      pathName === '/register' ? 'Đăng ký với email' : 'Đăng nhập với email',
    placeholder: 'Địa chỉ email',
    type: 'text',
  };

  const submit = (data: FormData) => {
    console.log('errors', errors, data);
    reset();
  };

  console.log('errrors', errors);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box w={['90%', '70%', '70%']} mx={'auto'} mt={10}>
        {router.pathname === '/register' && (
          <Box h={'70px'}>
            <InputField
              placeholder="Họ và tên của bạn"
              label="Tên của bạn?"
              type="text"
              name={'fullName'}
              validate={{
                ...register('fullName', {
                  required: 'Vui lòng nhập họ tên của bạn',
                }),
              }}
            />
            {errors.fullName && (
              <Text fontSize="xs" px={2} color={'red'}>
                {errors.fullName.message}
              </Text>
            )}
          </Box>
        )}
        <InputFieldSwitch
          validate={register}
          defaultInput={defaultInput}
          errors={errors}
          switchInput={switchInput}
          reset={reset}
        />
        {router.pathname === '/register' && <OTPInput />}
        <Box mt={5} w={['100%']} mx={'auto'}>
          <ButtonFC
            type="submit"
            bgGradient="linear(to-r, green.200, pink.500)"
            title={router.pathname === '/register' ? 'Đăng ký' : 'Đăng nhập'}
            radius={'full'}
            //isDisabled={true}
          />
        </Box>
      </Box>
    </form>
  );
};

export default FormLoginRegisterDetail;
