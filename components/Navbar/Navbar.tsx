import React, { useState, useContext } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Container,
  Popover,
  PopoverTrigger,
  Center,
  Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowBackIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import ButtonFC from '../Button/Button';
import logo from 'public/static/images/icon.png';
import SearchFC from '../Search';
import { NavbarMobileContext } from 'context/NavbarMobileContext';
import Popup from '../Popup';
import {
  UserAvatar,
  MyCourse,
  Notification,
  PopupAvatar,
  PopupMyCourse,
  PopupNotification,
  Chat,
} from './components/NavbarItem';
import { AuthenContext } from 'context/AuthenContext';
import PopupSearch from '../PopupSearch';
import useDebounce from 'hook/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { searchCourse } from 'api/course.api';
import { CourseType } from 'types/course.type';
import Course from '../Course';

interface INavbarProps {
  onOpen?: () => void;
}

const navbarItems = [
  {
    trigger: <MyCourse />,
    content: <PopupMyCourse />,
  },
  {
    trigger: <Notification />,
    content: <PopupNotification />,
  },
  {
    trigger: <Chat />,
    content: null,
  },
  {
    trigger: <UserAvatar />,
    content: <PopupAvatar />,
  },
];

const Navbar: React.FC<INavbarProps> = () => {
  const [keywordSearch, setKeyWordSearch] = useState<string>('');
  const [openPopupSearch, setOpenPopupSearch] = useState<boolean>(false);
  const { onOpen } = useContext(NavbarMobileContext);
  const { isAuthenticated, user } = useContext(AuthenContext);

  const debounceValue = useDebounce(keywordSearch, 1000);

  const { data, isLoading } = useQuery({
    queryKey: ['search', debounceValue],
    queryFn: () => searchCourse(debounceValue),
  });

  return (
    <Grid
      position={'fixed'}
      zIndex={99}
      templateColumns="repeat(3, 1fr)"
      borderBottom={'solid'}
      borderBottomColor={'#e8e8e8'}
      alignItems="center"
      gap={[2, 6]}
      px={2}
      h={'64px'}
      w={'full'}
      bg={'white'}
    >
      <GridItem>
        <Flex alignItems={'center'} gap={1}>
          <Logo />
          <HamburgerIcon
            display={['block', 'block', 'block', 'none']}
            fontSize={25}
            cursor="pointer"
            onClick={onOpen}
          />
          <Back />
        </Flex>
      </GridItem>
      <GridItem position={'relative'}>
        <SearchFC
          display={['none', 'block']}
          radius={'full'}
          width={['full']}
          placeholder="Tìm kiếm khoá học, bài viết, video, ..."
          value={keywordSearch}
          setValue={setKeyWordSearch}
          focus={() => setOpenPopupSearch(true)}
        />
        {openPopupSearch && (
          <PopupSearch
            close={() => {
              setOpenPopupSearch(false);
              setKeyWordSearch('');
            }}
          >
            {isLoading && (
              <Center>
                <Spinner />
              </Center>
            )}
            {!isLoading && data?.data.results.length === 0 && (
              <Center>
                <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
                  Không có kết quả
                </Text>
              </Center>
            )}
            {!isLoading && data?.data.results.length !== 0 && (
              <>
                {!keywordSearch ? (
                  <Text
                    mb={3}
                    fontSize={'lg'}
                    fontWeight={'medium'}
                    textTransform={'uppercase'}
                  >
                    Tất cả khoá học:
                  </Text>
                ) : (
                  <Text
                    mb={3}
                    fontSize={'lg'}
                    fontWeight={'medium'}
                    textTransform={'uppercase'}
                  >
                    Kết quả:
                  </Text>
                )}
                <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
                  {data?.data.results.map((course: CourseType) => (
                    <Course
                      isFree={!course?.isPrivate}
                      thumbnail={course?.thumbnail}
                      title={course?.title}
                      price={course?.price}
                      id={course?._id}
                      totalViews={course?.totalViews}
                      isJoined={course?.userJoined?.includes(user._id)}
                    />
                  ))}
                </Flex>
              </>
            )}
          </PopupSearch>
        )}

        <Link href={'/search'}>
          <SearchIcon
            float={'right'}
            display={['block', 'none']}
            fontSize={'xl'}
          />
        </Link>
      </GridItem>
      <GridItem w={['90%', 'full']} ml={'auto'}>
        {!isAuthenticated ? (
          <Box w={['80%', '70%', '50%', '30%']} ml={'auto'}>
            <Link href={'/login'}>
              <ButtonFC
                float={'right'}
                title="Đăng nhập"
                color="teal"
                radius="full"
                size={'sm'}
              />
            </Link>
          </Box>
        ) : (
          <Flex alignItems={'center'} justifyContent={'flex-end'} gap={5}>
            {navbarItems.map((item: any, index: number) => (
              <Popover key={index} closeOnBlur={true}>
                <PopoverTrigger>
                  <Box>{item.trigger}</Box>
                </PopoverTrigger>
                <Popup width={250}>{item.content}</Popup>
              </Popover>
            ))}
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
};

const Logo = () => {
  return (
    <Container display={['none', 'none', 'none', 'block']}>
      <Flex alignItems={'center'} gap={4}>
        <Link href={'/'}>
          <Box>
            <Image
              src={logo}
              alt="E8 logo"
              width={40}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Link>
        <Box>
          <Text fontWeight={'bold'}>Học tiếng anh để đi làm</Text>
        </Box>
      </Flex>
    </Container>
  );
};

const Back = () => {
  return (
    <Link href={'/'}>
      <Box display={['block', 'block', 'none']} bg={'gray.100'} rounded={'sm'}>
        <Flex
          alignItems={'center'}
          _hover={{ bg: 'gray.100', transition: 'linear 0.2s' }}
          px={2}
          py={1}
        >
          <ArrowBackIcon color={'gray.400'} />
          <Text
            fontSize={'8px'}
            casing={'uppercase'}
            fontWeight={'bold'}
            color={'gray.400'}
          >
            quay lại
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default Navbar;
