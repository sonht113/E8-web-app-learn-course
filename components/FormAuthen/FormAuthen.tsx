import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { DataLoginRegister } from 'types/auth.type';
import ButtonOutline from '../ButtonOutline';
import FormLoginRegisterDetail from '../FormLoginRegisterDetail';
import { auth, provider } from '../../firebase';

export type IFormAuthen = {
  dataForm: {
    logo: string;
    title: string;
    buttons: { id: string | number; icon: ReactElement; name: string }[];
    action: string;
    question: string;
    link: string;
  };
  loginUser?: (body: DataLoginRegister) => void;
  signUpUser?: (body: DataLoginRegister) => void;
};

const FormAuthen: React.FC<IFormAuthen> = ({
  dataForm,
  loginUser,
  signUpUser,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleLoginGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  return (
    <Box
      w={['90%', '90%', '50%', '40%']}
      bg={'white'}
      rounded={'lg'}
      py={10}
      position={'relative'}
    >
      {open && (
        <ChevronLeftIcon
          fontSize={'3xl'}
          cursor={'pointer'}
          position={'absolute'}
          top={5}
          left={5}
          onClick={() => setOpen(false)}
        />
      )}

      <Center display={'flex'} flexDirection={'column'} gap={5}>
        <Image src={dataForm.logo} w={'50px'} rounded={'lg'} />
        <Text fontSize={'2xl'} fontWeight={'bold'}>
          {dataForm.title}
        </Text>
      </Center>
      {open ? (
        <FormLoginRegisterDetail
          loginUser={loginUser}
          signUpUser={signUpUser}
        />
      ) : (
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={10}
          gap={5}
        >
          {dataForm.buttons.map(
            (
              button: { id: string | number; icon: ReactElement; name: string },
              index: number
            ) => (
              <ButtonOutline
                click={() => {
                  button.id === 1 && setOpen(true);
                  button.id === 2 && handleLoginGoogle();
                }}
                key={index}
                icon={button.icon}
                name={button.name}
              />
            )
          )}
        </Flex>
      )}

      <Flex justifyContent={'center'} gap={2} mt={10}>
        <Text fontSize={'sm'}>{dataForm.question}</Text>
        <Link href={dataForm.link}>
          <Text fontSize={'sm'} color={'#04a47c'} fontWeight={'bold'}>
            {dataForm.action}
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default FormAuthen;
