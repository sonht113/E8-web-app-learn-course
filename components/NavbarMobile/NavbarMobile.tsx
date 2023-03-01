/* eslint-disable no-unused-vars */
import {
  ChevronRightIcon,
  CloseIcon,
  InfoIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { Container, Flex, Center, Box, VStack, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CgLogIn } from 'react-icons/cg';
import { HiUserGroup } from 'react-icons/hi';
import { AiTwotoneSetting, AiFillHome } from 'react-icons/ai';
import {
  FaRoad,
  FaLightbulb,
  FaUserGraduate,
  FaBloggerB,
} from 'react-icons/fa';
import Link from 'next/link';
import { ActiveMenuContext } from 'context/ActiveMenuContext';
import { MenuItemType, SubMenuItem } from 'types/menuItem.type';

const menuNavbarMobileItems = [
  {
    id: 6,
    name: 'Đăng nhập',
    link: '/login',
    icon: <CgLogIn size={'18px'} color={'#6d6d6d'} />,
  },
  {
    icon: <AiFillHome size={'18px'} color={'#6d6d6d'} />,
    name: 'Home',
    id: 1,
    link: '/',
  },
  {
    icon: <FaRoad size={'18px'} color={'#6d6d6d'} />,
    name: 'Lộ trình',
    id: 2,
    link: '/learning-path',
  },
  {
    icon: <FaLightbulb size={'18px'} color={'#6d6d6d'} />,
    name: 'Học',
    id: 3,
    link: '/course',
  },
  {
    icon: <FaUserGraduate size={'18px'} color={'#6d6d6d'} />,
    name: 'Teacher',
    id: 4,
    link: '/teacher',
  },
  {
    icon: <FaBloggerB size={'18px'} color={'#6d6d6d'} />,
    name: 'Blog',
    id: 5,
    link: '/blog',
  },
  {
    id: 7,
    name: 'Giới thiệu',
    link: '/about-us',
    icon: <InfoIcon color={'#6d6d6d'} />,
  },
  {
    id: 8,
    name: 'Cơ hội việc làm',
    link: '/carrers',
    icon: <HiUserGroup size={'18px'} color={'#6d6d6d'} />,
  },
  {
    id: 9,
    name: 'Cài đặt',
    link: '',
    icon: <AiTwotoneSetting size={'18px'} color={'#6d6d6d'} />,
    subMenu: [
      {
        id: 91,
        name: 'Cài đặt tài khoản',
        link: '/settings/personal',
      },
      {
        id: 92,
        name: 'Bảo mật và đăng nhập',
        link: '/settings/security',
      },
    ],
  },
];

type INavbarMobileProps = {
  setOpenNavbarMobile: (v: boolean) => void;
  className: string;
};

type ISubMenuSettingsProps = {
  items: SubMenuItem[];
  activeMenu: number;
  setActiveMenu: (v: number) => void;
};

const NavbarMobile: React.FC<INavbarMobileProps> = ({
  setOpenNavbarMobile,
  className,
}) => {
  return (
    <Box className={className} zIndex={9999} w={'full'}>
      <Container
        w={'full'}
        h={'100vh'}
        bg={'gray.100'}
        opacity={0.5}
        onClick={() => setOpenNavbarMobile(false)}
      ></Container>
      <Flex
        position={'absolute'}
        top={0}
        left={0}
        w={'80%'}
        h={'100vh'}
        bg={'white'}
        zIndex={99999}
        overflow={'scroll'}
      >
        <Center
          bg={'gray.200'}
          position={'absolute'}
          top={3}
          right={2}
          w={8}
          h={8}
          rounded={'full'}
          onClick={() => setOpenNavbarMobile(false)}
        >
          <CloseIcon />
        </Center>
        <Menu />
      </Flex>
    </Box>
  );
};

const Menu: React.FC = () => {
  const [isOpenSubMenuSettings, setIsOpenSubMenuSettings] =
    useState<boolean>(false);

  const { activeMenu, setActiveMenu } = useContext(ActiveMenuContext);
  return (
    <VStack
      w={'full'}
      spacing={4}
      align="stretch"
      mt={15}
      pl={5}
      overflowY={'scroll'}
    >
      {menuNavbarMobileItems.map((item) => (
        <React.Fragment key={item.id}>
          {item.id === 9 && (
            <>
              <MenuItem
                menuItem={item}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                isOpenSubMenuSettings={isOpenSubMenuSettings}
                setIsOpenSubMenuSettings={setIsOpenSubMenuSettings}
              />
              {item.id === 9 && isOpenSubMenuSettings && (
                <SubMenuSettings
                  items={item.subMenu}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              )}
            </>
          )}
          {item.id !== 9 && (
            <Link href={item.link} key={item.id}>
              <MenuItem
                menuItem={item}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                isOpenSubMenuSettings={isOpenSubMenuSettings}
                setIsOpenSubMenuSettings={setIsOpenSubMenuSettings}
              />
              {item.id === 9 && isOpenSubMenuSettings && (
                <SubMenuSettings
                  items={item.subMenu}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              )}
            </Link>
          )}
        </React.Fragment>
      ))}
    </VStack>
  );
};

interface IMenuItem {
  menuItem: MenuItemType;
  activeMenu: number;
  isOpenSubMenuSettings: boolean;
  setIsOpenSubMenuSettings: (v: boolean) => void;
  setActiveMenu: (v: number) => void;
}

const MenuItem: React.FC<IMenuItem> = ({
  menuItem,
  activeMenu,
  isOpenSubMenuSettings,
  setActiveMenu,
  setIsOpenSubMenuSettings,
}) => {
  return (
    <Flex
      justifyContent={'space-between'}
      w={'full'}
      bg={menuItem.id !== 6 && menuItem.id === activeMenu && 'gray.200'}
      py={2}
      px={3}
      roundedBottomLeft={10}
      roundedTopLeft={10}
      borderBottom={'inset'}
      borderBottomColor={'red.200'}
      alignItems={'center'}
      onClick={() => {
        menuItem.id === 9 && setIsOpenSubMenuSettings(!isOpenSubMenuSettings);
        setActiveMenu(menuItem.id);
        localStorage.setItem('active_menu', JSON.stringify(menuItem.id));
      }}
    >
      <Flex alignItems={'center'} gap={3}>
        {menuItem.icon}
        <Text color={'#4c4c4c'}>{menuItem.name}</Text>
      </Flex>
      {menuItem.id === 9 && !isOpenSubMenuSettings && (
        <ChevronRightIcon fontSize={'18px'} />
      )}
      {menuItem.id === 9 && isOpenSubMenuSettings && (
        <ChevronDownIcon fontSize={'18px'} />
      )}
    </Flex>
  );
};

const SubMenuSettings: React.FC<ISubMenuSettingsProps> = ({
  items,
  activeMenu,
  setActiveMenu,
}) => {
  return (
    <VStack
      w={'90%'}
      spacing={4}
      align="stretch"
      mt={6}
      style={{ marginLeft: 'auto' }}
    >
      {items.map((item) => (
        <Link key={item.id} href={item.link}>
          <Text
            color={'#4c4c4c'}
            bg={item.id === activeMenu && 'gray.200'}
            py={2}
            pl={2}
            roundedBottomLeft={10}
            roundedTopLeft={10}
            borderBottom={'inset'}
            borderBottomColor={'red.200'}
            onClick={() => {
              setActiveMenu(item.id);
              localStorage.setItem('active_menu', JSON.stringify(item.id));
            }}
          >
            {item.name}
          </Text>
        </Link>
      ))}
    </VStack>
  );
};

export default NavbarMobile;
