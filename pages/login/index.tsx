import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineUser, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import FormAuthen from '@/components/FormAuthen';
import { AuthenContext } from 'context/AuthenContext';

const dataForm = {
  logo: '/static/images/icon.png',
  title: 'Đăng nhập vào E8',
  action: 'Đăng ký',
  question: 'Bạn chưa có tài khoản?',
  link: '/register',
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
  ],
};

const Login: React.FC = () => {
  const { loginUser, loginFacebook, loginGoogle } = useContext(AuthenContext);

  return (
    <Box
      bg={'#002a42'}
      w={'full'}
      h={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <FormAuthen
        dataForm={dataForm}
        loginUser={loginUser}
        onLoginFacebook={loginFacebook}
        onLoginGoogle={loginGoogle}
      />
    </Box>
  );
};

export default Login;
