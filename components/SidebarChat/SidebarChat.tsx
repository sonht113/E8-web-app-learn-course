import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Flex, Tooltip } from '@chakra-ui/react';
import { AiOutlineUsergroupAdd, AiOutlineHome } from 'react-icons/ai';
import Search from '../Search';
import RoomChat from '../RoomChat/RoomChat';
import { ChatContext } from 'context/ChatContext';

const SidebarChat = () => {
  const { showMessage, setShowMessage, isMobile, selectRoom } =
    useContext(ChatContext);

  const arr = [1, 2, 3];

  return (
    <Box
      h={'calc(100vh - 64px)'}
      borderRight={'1px'}
      borderColor={'gray.200'}
      w={['full', '25%']}
      display={showMessage && 'none'}
      pt={2}
    >
      <HeaderSidebarChat />
      <Box
        h={'calc(100vh - 126px)'}
        overflowY={arr.length > 5 ? 'scroll' : 'hidden'}
      >
        {[{ id: 1 }, { id: 2 }, { id: 3 }].map((item: any, index: number) => (
          <RoomChat
            key={index}
            onSelect={() => selectRoom(item.id)}
            showMessage={showMessage}
            setShowMessage={setShowMessage}
            isMobile={isMobile}
          />
        ))}
      </Box>
    </Box>
  );
};

const HeaderSidebarChat = () => {
  return (
    <Flex
      borderBottom={'1px'}
      h={'54px'}
      borderColor={'gray.200'}
      gap={3}
      px={1}
      alignItems={'center'}
      boxShadow={'lg'}
    >
      <Tooltip label={'Quay về trang chủ'} hasArrow placement="bottom">
        <Box _hover={{ bg: 'gray.200' }} p={1} rounded={'md'}>
          <Link href={'/'}>
            <AiOutlineHome size={'25px'} cursor={'pointer'} color={'gray'} />
          </Link>
        </Box>
      </Tooltip>
      <Search
        sizeInput={'sm'}
        sizeIcon={'sm'}
        radius={'lg'}
        placeholder={'Tìm kiếm'}
      />
      <Tooltip label={'Tạo nhóm chat'} hasArrow placement="bottom">
        <Box _hover={{ bg: 'gray.200' }} p={1} rounded={'md'}>
          <AiOutlineUsergroupAdd
            size={'25px'}
            cursor={'pointer'}
            color={'gray'}
          />
        </Box>
      </Tooltip>
    </Flex>
  );
};

export default SidebarChat;
