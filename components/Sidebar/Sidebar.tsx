import React, { ReactElement, useContext, useState } from 'react';
import { Flex, Text, Center, Container, Box } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
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
    link: '/learning-path',
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
];

const buttonHover = {
  transform: 'scale(1.4)',
  transition: 'all 0.3s',
};

type ISidebarItemProps = {
  icon: ReactElement;
  name: string;
  itemActive: boolean;
  click: () => void;
};

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  const { activeMenu, setActiveMenu } = useContext(ActiveMenuContext);

  return (
    <Box display={['none', 'block']} position={'sticky'} top={0} left={0}>
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
            <Link href={item.link}>
              <SidebarItem
                key={item.id}
                icon={item.icon}
                name={item.name}
                itemActive={activeMenu === item.id}
                click={() => {
                  setActiveMenu(item.id);
                  localStorage.setItem('active_menu', JSON.stringify(item.id));
                }}
              />
            </Link>
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
      bg={itemActive && 'gray.100'}
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
