import { Box } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUser, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import FormAuthen from '@/components/FormAuthen';

const dataForm = {
  logo: '/static/images/icon.png',
  title: 'Đăng ký vào E8',
  action: 'Đăng nhập',
  question: 'Bạn đã có tài khoản?',
  link: '/login',
  buttons: [
    {
      id: 1,
      icon: <AiOutlineUser size={'20px'} />,
      name: 'Sử dụng email/số điện thoại',
    },
    {
      id: 2,
      icon: <FcGoogle size={'20px'} />,
      name: 'Tiếp tục với Google',
    },
    {
      id: 3,
      icon: <AiFillFacebook size={'20px'} color={'#0159b6'} />,
      name: 'Tiếp tục với Facebook',
    },
    {
      id: 4,
      icon: <AiFillGithub size={'20px'} />,
      name: 'Tiếp tục với Github',
    },
  ],
};
const Register = () => {
  return (
    <Box
      bg={'#002a42'}
      w={'full'}
      h={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <FormAuthen dataForm={dataForm} />
    </Box>
  );
};

export default Register;
