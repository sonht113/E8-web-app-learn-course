import { BellIcon } from '@chakra-ui/icons';
import { Avatar, Text, Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const popupAvatarItems = [
  {
    title: 'Trang cá nhân',
    link: '/profile',
    border: true,
  },
  {
    title: 'Viết blog',
    link: '/blog/create-blog',
    border: false,
  },
  {
    title: 'Bài viết của tôi',
    link: '/me/blog',
    border: true,
  },
  {
    title: 'Bài viết đã lưu',
    link: '/me/blog-saved',
    border: true,
  },
  {
    title: 'Cài đặt',
    link: '/settings/personal',
    border: false,
  },
  {
    title: 'Đăng xuất',
    link: '/login',
    border: false,
  },
];

const UserAvatar = () => {
  return (
    <Avatar
      display={['none', 'none', 'block']}
      size={['sm']}
      name="Dan Abrahmov"
      src="https://bit.ly/dan-abramov"
      cursor={'pointer'}
    />
  );
};

const MyCourse = () => {
  return (
    <Text
      display={['none', 'none', 'block']}
      fontWeight={'medium'}
      cursor={'pointer'}
    >
      Khoá học của tôi
    </Text>
  );
};

const Notification = () => {
  return (
    <BellIcon
      fontSize={'2xl'}
      cursor={'pointer'}
      color={['gray.600', 'gray.400']}
      _hover={{ color: 'gray', transition: 'linear 0.2s' }}
    />
  );
};

const PopupAvatar = () => {
  return (
    <Box>
      <Flex
        justifyContent={'cennter'}
        gap={3}
        pb={4}
        alignItems={'center'}
        borderBottom={'1px'}
        borderBottomColor={'gray.100'}
      >
        <Avatar
          size={['md']}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Box>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Dan Abrahmov
          </Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            @DanAbrahmov
          </Text>
        </Box>
      </Flex>
      <Box>
        {popupAvatarItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <Text
              fontSize={'15px'}
              color={'gray.500'}
              cursor={'pointer'}
              borderBottom={item.border && '1px'}
              borderBottomColor={'gray.100'}
              pb={item.border && 4}
              pt={4}
              _hover={{ color: 'black', transition: 'linear 0.2s' }}
            >
              {item.title}
            </Text>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const PopupMyCourse = () => {
  return (
    <Box pb={5}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text fontWeight={'bold'}>Khoá học của tôi</Text>
        <Link href={'/my-course'}>
          <Text
            fontSize={'sm'}
            color={'gray.500'}
            _hover={{ color: 'white', bg: 'gray', transition: 'linear 0.2s' }}
            p={2}
            rounded={'md'}
          >
            Xem tất cả
          </Text>
        </Link>
      </Flex>
      <Box mt={5}>
        <Text fontSize={'sm'}>Bạn chưa đăng ký khóa học nào</Text>
      </Box>
    </Box>
  );
};

const PopupNotification = () => {
  return (
    <Box pb={5}>
      <Heading fontSize={'lg'}>Thông báo</Heading>
      <Box>
        <Text mt={5} fontSize={'sm'}>
          Chưa có thông báo nào
        </Text>
      </Box>
    </Box>
  );
};

export {
  UserAvatar,
  MyCourse,
  Notification,
  PopupAvatar,
  PopupMyCourse,
  PopupNotification,
};
