import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Flex, Tooltip, useDisclosure } from '@chakra-ui/react';
import { AiOutlineUsergroupAdd, AiOutlineHome } from 'react-icons/ai';
import Search from '../Search';
import RoomChat from '../RoomChat/RoomChat';
import { ChatContext } from 'context/ChatContext';
import ModalFC from '../ModalFC';
import FormCreateConversation from '../FormCreateConversation';

const SidebarChat = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { showMessage, setShowMessage, isMobile, selectRoom, roomActive } =
    useContext(ChatContext);

  const arr = [1, 2, 3];

  return (
    <React.Fragment>
      <ModalFC title={'Tạo lớp học'} isOpen={isOpen} onClose={onClose}>
        <FormCreateConversation />
      </ModalFC>
      <Box
        h={'calc(100vh - 64px)'}
        borderRight={'1px'}
        borderColor={'gray.200'}
        w={['full', '25%']}
        display={showMessage && 'none'}
        pt={2}
      >
        <HeaderSidebarChat click={() => onOpen()} />
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
              isActive={roomActive === item.id}
            />
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

type IHeaderSidebarChatProps = {
  click?: () => void;
};

const HeaderSidebarChat: React.FC<IHeaderSidebarChatProps> = ({ click }) => {
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
        <Box _hover={{ bg: 'gray.200' }} p={1} rounded={'md'} onClick={click}>
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
