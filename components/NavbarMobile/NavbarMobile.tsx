import {
  ChevronRightIcon,
  CloseIcon,
  InfoIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import {
  Flex,
  Center,
  Box,
  VStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
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
import { NavbarMobileContext } from 'context/NavbarMobileContext';
import { AuthenContext } from 'context/AuthenContext';

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
    link: '/learning-paths',
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
  title?: any;
};

type ISubMenuSettingsProps = {
  items: SubMenuItem[];
  activeMenu?: string;
};

type IMenuItem = {
  menuItem: MenuItemType;
  activeMenu?: string;
  isOpenSubMenuSettings?: boolean;
  setIsOpenSubMenuSettings?: (v: boolean) => void;
  onLogout?: () => void;
  isAuthenticated?: boolean;
};

const NavbarMobile: React.FC<INavbarMobileProps> = () => {
  const { isOpen, onClose } = useContext(NavbarMobileContext);
  const { isAuthenticated, signOutUser } = useContext(AuthenContext);
  return (
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <Box w={'full'}>
          <Flex h={'100vh'} className={'navbarMobile'}>
            <Center
              bg={'gray.200'}
              position={'absolute'}
              top={3}
              right={2}
              w={8}
              h={8}
              rounded={'full'}
              onClick={onClose}
            >
              <CloseIcon />
            </Center>
            <Menu isAuthenticated={isAuthenticated} signOutUser={signOutUser} />
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

type IMenuProps = {
  isAuthenticated?: boolean;
  signOutUser?: () => void;
};

const Menu: React.FC<IMenuProps> = ({ isAuthenticated, signOutUser }) => {
  const [isOpenSubMenuSettings, setIsOpenSubMenuSettings] =
    useState<boolean>(false);

  const { activeMenu } = useContext(ActiveMenuContext);
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
          {item.id === 9 && isAuthenticated && (
            <>
              <MenuItem
                menuItem={item}
                activeMenu={activeMenu}
                isOpenSubMenuSettings={isOpenSubMenuSettings}
                setIsOpenSubMenuSettings={setIsOpenSubMenuSettings}
              />
              {item.id === 9 && isOpenSubMenuSettings && (
                <SubMenuSettings items={item.subMenu} activeMenu={activeMenu} />
              )}
            </>
          )}
          {item.id !== 9 && item.id !== 6 && (
            <Link href={item.link} key={item.id}>
              <MenuItem menuItem={item} activeMenu={activeMenu} />
            </Link>
          )}
          {item.id === 6 && !isAuthenticated && (
            <Link href={item.link} key={item.id}>
              <MenuItem menuItem={item} activeMenu={activeMenu} />
            </Link>
          )}
          {item.id === 6 && isAuthenticated && (
            <MenuItem
              menuItem={{
                id: 6,
                name: 'Đăng xuất',
                icon: <CgLogIn size={'18px'} color={'#6d6d6d'} />,
              }}
              isAuthenticated={isAuthenticated}
              onLogout={() => signOutUser()}
            />
          )}
        </React.Fragment>
      ))}
    </VStack>
  );
};

const MenuItem: React.FC<IMenuItem> = ({
  menuItem,
  activeMenu,
  isOpenSubMenuSettings,
  setIsOpenSubMenuSettings,
  onLogout,
  isAuthenticated,
}) => {
  const { onClose } = useContext(NavbarMobileContext);
  return (
    <Flex
      justifyContent={'space-between'}
      w={'full'}
      bg={
        menuItem.id !== 6 &&
        (menuItem.link === activeMenu || menuItem.link.includes(activeMenu)) &&
        'gray.200'
      }
      py={2}
      px={3}
      roundedBottomLeft={10}
      roundedTopLeft={10}
      alignItems={'center'}
      onClick={() => {
        menuItem.id === 6 && isAuthenticated && onLogout();
        menuItem.id !== 9 && onClose();
        menuItem.id === 9 && setIsOpenSubMenuSettings(!isOpenSubMenuSettings);
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
            bg={item.link === activeMenu && 'gray.200'}
            py={2}
            pl={2}
            roundedBottomLeft={10}
            roundedTopLeft={10}
          >
            {item.name}
          </Text>
        </Link>
      ))}
    </VStack>
  );
};

export default NavbarMobile;
