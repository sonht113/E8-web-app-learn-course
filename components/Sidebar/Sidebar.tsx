import React, { ReactElement, useContext, useState } from 'react';
import { Flex, Text, Center, Container, Box } from '@chakra-ui/react';
import { AddIcon, ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { AiFillHome } from 'react-icons/ai';
import {
  FaRoad,
  FaLightbulb,
  FaUserGraduate,
  FaBloggerB,
} from 'react-icons/fa';

import SubMenu from '../SubMenu';
import Link from 'next/link';
import { ActiveMenuContext } from 'context/ActiveMenuContext';
import { AuthenContext } from 'context/AuthenContext';

export const sidebarItems = [
  {
    icon: <AiFillHome size={'23px'} />,
    name: 'Home',
    id: 1,
    link: '/',
  },
  {
    icon: <FaRoad size={'23px'} />,
    name: 'Lộ trình',
    id: 2,
    link: '/learning-paths',
  },
  {
    icon: <FaLightbulb size={'23px'} />,
    name: 'Học',
    id: 3,
    link: '/course',
  },
  {
    icon: <FaUserGraduate size={'23px'} />,
    name: 'Teacher',
    id: 4,
    link: '/teacher',
  },
  {
    icon: <FaBloggerB size={'23px'} />,
    name: 'Blog',
    id: 5,
    link: '/blog',
  },
  {
    icon: <ChatIcon fontSize={'23px'} />,
    name: 'Chat',
    id: 10,
    link: '/chat',
  },
];

const buttonHover = {
  transform: 'scale(1.4)',
  transition: 'all 0.3s',
};

type ISidebarItemProps = {
  icon: ReactElement;
  name: string;
  itemActive?: boolean;
  click?: () => void;
};

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  const { activeMenu } = useContext(ActiveMenuContext);
  const { isAuthenticated } = useContext(AuthenContext);

  return (
    <Box
      width={'10%'}
      display={['none', 'none', 'none', 'block']}
      position={'sticky'}
      top={0}
      left={0}
      zIndex={2}
    >
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Center
          mb={5}
          bg={'green.500'}
          h={10}
          w={10}
          cursor={'pointer'}
          rounded={'full'}
          position={'relative'}
        >
          {!openSubMenu ? (
            <AddIcon
              _hover={buttonHover}
              color={'white'}
              fontSize={'sm'}
              onClick={() => setOpenSubMenu(!openSubMenu)}
            />
          ) : (
            <CloseIcon
              _hover={buttonHover}
              color={'white'}
              fontSize={'sm'}
              onClick={() => setOpenSubMenu(!openSubMenu)}
            />
          )}
          {openSubMenu && <SubMenu />}
        </Center>

        <Container>
          {sidebarItems.map((item) => (
            <>
              {item.id !== 10 && (
                <Link href={item.link} key={item.id}>
                  <SidebarItem
                    icon={item.icon}
                    name={item.name}
                    itemActive={
                      activeMenu === item.link ||
                      activeMenu.includes(`${item.link}/`)
                    }
                  />
                </Link>
              )}
              {item.id === 10 && isAuthenticated && (
                <Link href={item.link} key={item.id}>
                  <SidebarItem
                    icon={item.icon}
                    name={item.name}
                    itemActive={
                      activeMenu === item.link ||
                      activeMenu.includes(`${item.link}/`)
                    }
                  />
                </Link>
              )}
            </>
          ))}
        </Container>
      </Flex>
    </Box>
  );
};

const SidebarItem: React.FC<ISidebarItemProps> = ({
  icon,
  name,
  itemActive,
  click,
}) => {
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      py={4}
      px={4}
      _hover={{
        bg: 'gray.100',
        transition: 'all',
        transitionDuration: '0.7s',
      }}
      bg={itemActive && 'gray.300'}
      rounded={15}
      cursor={'pointer'}
      mb={2}
      onClick={click}
    >
      {icon}
      <Text fontSize={12} mt={1} fontWeight={'medium'}>
        {name}
      </Text>
    </Flex>
  );
};

export default Sidebar;
