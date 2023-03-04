/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Container,
  Popover,
  PopoverTrigger,
} from '@chakra-ui/react';
import Link from 'next/link';

import { ArrowBackIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
// import ButtonFC from '../Button/Button';
import Search from '../Search';
import { NavbarMobileContext } from 'context/NavbarMobileContext';
import Popup from '../Popup';
import {
  UserAvatar,
  MyCourse,
  Notification,
  PopupAvatar,
  PopupMyCourse,
  PopupNotification,
} from './components/NavbarItem';
import { ActiveMenuContext } from 'context/ActiveMenuContext';

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
    trigger: <UserAvatar />,
    content: <PopupAvatar />,
  },
];

const Navbar: React.FC<INavbarProps> = () => {
  const [keywordSearch, setKeyWordSearch] = useState<string>('');
  const { onOpen } = useContext(NavbarMobileContext);
  const { setActiveMenu } = useContext(ActiveMenuContext);

  return (
    <Grid
      position={'fixed'}
      zIndex={99}
      templateColumns="repeat(3, 1fr)"
      borderBottom={'solid'}
      borderBottomColor={'#e8e8e8'}
      alignItems="center"
      gap={6}
      px={4}
      h={'64px'}
      w={'full'}
      bg={'white'}
    >
      <GridItem>
        <Flex alignItems={'center'} gap={2}>
          <Logo />
          <HamburgerIcon
            display={['block', 'block', 'none']}
            fontSize={25}
            cursor="pointer"
            onClick={onOpen}
          />
          <Back setActiveMenu={setActiveMenu} />
        </Flex>
      </GridItem>
      <GridItem>
        <Search
          display={['none', 'block']}
          radius={'full'}
          width={['full']}
          placeholder="Tìm kiếm khoá học, bài viết, video, ..."
          value={keywordSearch}
          setValue={setKeyWordSearch}
        />
        <Link href={'/search'}>
          <SearchIcon
            float={'right'}
            display={['block', 'none']}
            fontSize={'xl'}
          />
        </Link>
      </GridItem>
      <GridItem float={'left'}>
        {/* <Link href={'/login'}>
          <ButtonFC
            float={'right'}
            title="Đăng nhập"
            color="teal"
            radius="full"
            size={['sm', 'md']}
          />
        </Link> */}
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
      </GridItem>
    </Grid>
  );
};

const Logo = () => {
  return (
    <Container display={['none', 'none', 'block']}>
      <Flex alignItems={'center'} gap={4}>
        <Box>
          <Image
            rounded={'md'}
            boxSize={'45px'}
            objectFit="cover"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt="E8 logo"
          />
        </Box>
        <Box display={['none', 'none', 'block']}>
          <Text fontWeight={'bold'}>Học tiếng anh để đi làm</Text>
        </Box>
      </Flex>
    </Container>
  );
};

interface IBackProps {
  setActiveMenu: (_v: number) => void;
}

const Back: React.FC<IBackProps> = ({ setActiveMenu }) => {
  return (
    <Link href={'/'}>
      <Box
        display={['black', 'block', 'none']}
        onClick={() => {
          const DEFAULT_ACTIVE = 1;
          setActiveMenu(DEFAULT_ACTIVE);
          localStorage.setItem('active_menu', JSON.stringify(DEFAULT_ACTIVE));
        }}
      >
        <Flex
          alignItems={'center'}
          _hover={{ bg: 'gray.100', transition: 'linear 0.2s' }}
          px={2}
          py={1}
        >
          <ArrowBackIcon color={'gray.400'} />
          <Text
            fontSize={'xs'}
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
