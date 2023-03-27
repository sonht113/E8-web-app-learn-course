import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { PhoneIcon } from '@chakra-ui/icons';

import InputField from '../InputField';
import InputFieldSwitch from '../InputFieldSwitch';
import OTPInput from '../OTPInput';
import ButtonFC from '../Button';
import { IFormAuthen } from '../FormAuthen';
import { AuthenContext } from 'context/AuthenContext';

export type FormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  otp?: string;
};

type IFormLoginRegisterDetail = Pick<IFormAuthen, 'onSubmit'>;

const FormLoginRegisterDetail: React.FC<IFormLoginRegisterDetail> = ({
  onSubmit,
}) => {
  const [enableSendOTP, setEnableSendOTP] = useState<boolean>(false);
  const [addressSendOTP, setAddressSendOTP] = useState<string>('');
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [errorValidateOTP, setErrorValidateOTP] = useState<string>('');
  const router = useRouter();
  const pathName = router.pathname;
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { isAuthenticated, sendOTPEmail, sendOTPPhone, otp } =
    useContext(AuthenContext);

  const defaultInput = useMemo(() => {
    return {
      label: 'Số điện thoại',
      name: 'phone',
      labelAction:
        pathName === '/register' ? 'Đăng ký với SĐT' : 'Đăng nhập với SĐT',
      icon: <PhoneIcon color="gray.300" />,
      placeholder: 'Số điện thoại',
      type: 'tel',
    };
  }, []);

  const switchInput = useMemo(() => {
    return {
      label: 'Email',
      name: 'email',
      labelAction:
        pathName === '/register' ? 'Đăng ký với email' : 'Đăng nhập với email',
      placeholder: 'Địa chỉ email',
      type: 'text',
    };
  }, []);

  const submit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  const sendOTP = () => {
    isSwitch ? sendOTPPhone(addressSendOTP) : sendOTPEmail(addressSendOTP);
  };

  useEffect(() => {
    isAuthenticated && router.push('/');
  }, [isAuthenticated]);

  useEffect(() => {
    if (watch('email') || watch('phone')) {
      setEnableSendOTP(true);
      watch('email')
        ? setAddressSendOTP(watch('email'))
        : setAddressSendOTP(watch('phone'));
    } else {
      setEnableSendOTP(false);
      setErrorValidateOTP('');
    }
  }, [watch('email'), watch('phone')]);

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
          errorValidateOTP={errorValidateOTP}
          validate={register}
          defaultInput={defaultInput}
          errors={errors}
          switchInput={switchInput}
          reset={reset}
          isSwitch={isSwitch}
          setIsSwitch={setIsSwitch}
        />
        {router.pathname === '/register' && (
          <OTPInput
            setErrorValidateOTP={setErrorValidateOTP}
            isSwitch={isSwitch}
            addressSendOTP={addressSendOTP}
            sendOTP={sendOTP}
            enableSendOTP={enableSendOTP}
            otp={otp}
          />
        )}
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
