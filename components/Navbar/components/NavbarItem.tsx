import BenefitComponent from '@/components/BenefitComponent';
import { BellIcon, ChatIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Text,
  Box,
  Flex,
  Heading,
  useDisclosure,
  Image,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getUser } from 'api/user.api';
import { AuthenContext } from 'context/AuthenContext';
import Link from 'next/link';
import React, { useContext, useMemo } from 'react';
import { GiUpgrade } from 'react-icons/gi';
import { CoursePaginate } from 'types/paignate.type';
import { MyLearningCourses, TypeUser } from 'types/user.type';

const UserAvatar = () => {
  const { user } = useContext(AuthenContext);
  return (
    <Avatar
      size={['sm']}
      name={user.fullName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')}
      src={user.avatar}
      cursor={'pointer'}
    />
  );
};

const MyCourse = () => {
  return (
    <Text
      display={['none', 'none', 'block']}
      fontWeight={'medium'}
      fontSize={['sm', 'sm', 'sm', 'md']}
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

const Chat = () => {
  return (
    <Link href={'/chat'}>
      <ChatIcon
        display={['block', 'block', 'block']}
        fontSize={'xl'}
        cursor={'pointer'}
        color={['gray.600', 'gray.400']}
      />
    </Link>
  );
};

const PopupAvatar = () => {
  const { signOutUser, user } = useContext(AuthenContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const popupAvatarItems = useMemo(
    () => [
      {
        title: 'Trang cá nhân',
        link: `/profile/${user._id}`,
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
        icon: <GiUpgrade fontSize="24px" color="green" />,
        title: 'Upgrade to teacher',
        border: true,
      },
      {
        title: 'Cài đặt',
        link: '/settings/personal',
        border: false,
      },
      {
        title: 'Đăng xuất',
        border: false,
      },
    ],
    []
  );

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
          name={user.fullName
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')}
          src={user.avatar}
        />
        <Box>
          <Text fontSize={'md'} fontWeight={'bold'}>
            {user.fullName}
          </Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            @
            {user.fullName
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'D')
              .replace(' ', '')
              .replace(' ', '')}
          </Text>
        </Box>
      </Flex>
      <Box>
        {popupAvatarItems.map((item, index) => (
          <>
            {item.link && (
              <Link key={item.link} href={item.link}>
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
            )}
            {!item.link && !item.icon && (
              <Text
                key={index}
                onClick={() => signOutUser()}
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
            )}
            {item.icon && user.typeUser === TypeUser.STUDENT && (
              <Flex
                borderBottom={item.border && '1px'}
                borderBottomColor={'gray.100'}
                alignItems="center"
              >
                {item.icon}
                <Text
                  key={index}
                  onClick={onOpen}
                  fontSize={'15px'}
                  color={'gray.500'}
                  cursor={'pointer'}
                  pb={item.border && 4}
                  pt={4}
                  ms={4}
                  _hover={{ color: 'black', transition: 'linear 0.2s' }}
                >
                  {item.title}
                </Text>
                <BenefitComponent isOpen={isOpen} onClose={onClose} />
              </Flex>
            )}
          </>
        ))}
      </Box>
    </Box>
  );
};

const PopupMyCourse = () => {
  const { user } = useContext(AuthenContext);

  const learningCourseQuery = useQuery({
    queryKey: ['my-learning-courses', user._id, 'myLearningCourses.idCourse'],
    queryFn: () => getUser(user._id, 'myLearningCourses.idCourse'),
  });

  const myLearningCourses = learningCourseQuery.data?.data?.myLearningCourses;

  return (
    <Box pb={5}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text fontWeight={'bold'}>Khoá học của tôi</Text>
        <Link href={'/my-courses'}>
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
        {!myLearningCourses && (
          <Center>
            <Spinner />
          </Center>
        )}
        {myLearningCourses?.length === 0 && (
          <Text fontSize={'sm'}>Bạn chưa đăng ký khóa học nào</Text>
        )}
        {myLearningCourses?.length !== 0 &&
          myLearningCourses?.map((item: MyLearningCourses) => (
            <Link href={`/learning/${item?.idCourse?._id}`}>
              <Flex
                key={item?._id}
                alignItems={'center'}
                gap={2}
                border={'1px'}
                borderColor={'gray.500'}
                mt={3}
                p={2}
                rounded={'md'}
              >
                <Image
                  w={'70px'}
                  objectFit={'cover'}
                  src={item?.idCourse.thumbnail}
                />
                <Box>
                  <Text
                    whiteSpace={'nowrap'}
                    width={'130px'}
                    overflow={'hidden'}
                    textOverflow={'ellipsis'}
                    fontSize={'sm'}
                    fontWeight={'bold'}
                    color={'gray.600'}
                  >
                    {item?.idCourse.title}
                  </Text>
                  <Text
                    whiteSpace={'nowrap'}
                    width={'130px'}
                    overflow={'hidden'}
                    textOverflow={'ellipsis'}
                    fontSize={'sm'}
                    color={'gray.400'}
                  >
                    {item?.idCourse.desc}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))}
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
  Chat,
  PopupAvatar,
  PopupMyCourse,
  PopupNotification,
};
