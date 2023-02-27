import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaPen, FaPhotoVideo } from 'react-icons/fa';

const subMenuItem = [
  {
    icon: <FaPen />,
    title: 'Viết blog',
    link: '/blog/write-blog',
  },
  {
    icon: <FaPhotoVideo />,
    title: 'Đăng khoá học',
    link: '/course/post-course',
  },
];

const SubMenu = () => {
  return (
    <Box
      position={'absolute'}
      zIndex={'999999'}
      top={12}
      left={0}
      bg={'gray.100'}
      w={250}
      h={150}
      rounded={'md'}
      p={2}
    >
      <Flex flexDirection={'column'} gap={5} mt={3} alignItems={'start'} ml={3}>
        {subMenuItem.map((item) => (
          <Link href={item.link}>
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={3}
              _hover={{ bg: 'gray.200', transition: 'linear 0.3s' }}
              w={200}
              p={2}
              rounded={'md'}
            >
              {item.icon}
              <Text>{item.title}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SubMenu;
