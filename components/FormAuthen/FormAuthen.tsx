/* eslint-disable no-unused-vars */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { DataLoginRegister } from 'types/auth.type';
import ButtonOutline from '../ButtonOutline';
import FormLoginRegisterDetail from '../FormLoginRegisterDetail';

export type IFormAuthen = {
  dataForm: {
    logo: string;
    title: string;
    buttons: { id: string | number; icon: ReactElement; name: string }[];
    action: string;
    question: string;
    link: string;
  };
  onSubmit?: (body: DataLoginRegister) => void;
};

const FormAuthen: React.FC<IFormAuthen> = ({ dataForm, onSubmit }) => {
  const [open, setOpen] = useState<boolean>(false);
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
        <FormLoginRegisterDetail onSubmit={onSubmit} />
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
                click={() => button.id === 1 && setOpen(true)}
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
