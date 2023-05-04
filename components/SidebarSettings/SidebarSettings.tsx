import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';

type SidebarSettingItemType = {
  id: string | number;
  icon: ReactElement;
  title: string;
  link: string;
};

const SidebarSettingItems: SidebarSettingItemType[] = [
  {
    id: 1,
    icon: <HiOutlineUser size={'25px'} color={'#02914e'} />,
    title: 'Cài đặt tài khoản',
    link: '/settings/personal',
  },
  {
    id: 2,
    icon: <MdSecurity size={'25px'} color={'#02914e'} />,
    title: 'Bảo mật và đăng nhập',
    link: '/settings/security',
  },
];

const SidebarSettings = () => {
  const router = useRouter();
  return (
    <Box w={'30%'} display={['none', 'block']}>
      {SidebarSettingItems.map((item: SidebarSettingItemType) => (
        <Link href={item.link} key={item.id}>
          <Flex
            _hover={
              router.pathname !== item.link && {
                bg: 'gray.200',
                transition: '0.3s linear',
              }
            }
            gap={2}
            justifyContent={'flex-start'}
            alignItems={'center'}
            mb={5}
            px={2}
            py={4}
            cursor={'pointer'}
            rounded={'lg'}
            bg={router.pathname === item.link && 'gray.200'}
          >
            {item.icon}
            <Text fontWeight={'medium'}>{item.title}</Text>
          </Flex>
        </Link>
      ))}
    </Box>
  );
};

export default SidebarSettings;
