import React, { useContext, useMemo } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Skeleton,
  Tooltip,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { AiOutlineUsergroupAdd, AiOutlineHome } from 'react-icons/ai';
import Search from '../Search';
import RoomChat from '../RoomChat/RoomChat';
import { ChatContext } from 'context/ChatContext';
import ModalFC from '../ModalFC';
import FormCreateConversation from '../FormCreateConversation';
import { Conversation } from 'types/converation.type';
import { AuthenContext } from 'context/AuthenContext';
import { TypeUser } from 'types/user.type';

const SidebarChat = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const {
    showMessage,
    setShowMessage,
    isMobile,
    selectRoom,
    roomActive,
    conversations,
  } = useContext(ChatContext);
  const { user } = useContext(AuthenContext);

  const isTeacher = useMemo(() => user.typeUser === TypeUser.TEACHER, [user]);

  return (
    <React.Fragment>
      <ModalFC title={'Tạo lớp học'} isOpen={isOpen} onClose={onClose}>
        <FormCreateConversation onCloseModal={onClose} />
      </ModalFC>
      <Box
        h={'calc(100vh - 64px)'}
        borderRight={'1px'}
        borderColor={'gray.200'}
        w={['full', '25%']}
        display={showMessage && 'none'}
        pt={2}
      >
        <HeaderSidebarChat click={() => onOpen()} isTeacher={isTeacher} />
        <Box
          h={'50px'}
          display={'flex'}
          alignItems={'center'}
          borderBottom={'1px'}
          borderColor={'gray'}
          bg={'gray.100'}
        >
          <Text
            bgGradient={'linear(to-r, rgb(1, 84, 50), rgb(5, 206, 152) )'}
            pl={2}
            pr={4}
            fontWeight={'medium'}
            color={'white'}
          >
            Lớp học online
          </Text>
        </Box>
        <Box
          h={'calc(100vh - 176px)'}
          overflowY={conversations?.length > 5 ? 'scroll' : 'hidden'}
          display={conversations?.length === 0 && 'flex'}
          justifyContent={conversations?.length === 0 && 'center'}
          alignItems={conversations?.length === 0 && 'center'}
          bg={'gray.300'}
        >
          {!conversations &&
            [{ id: 1 }, { id: 2 }, { id: 3 }].map((item, _index) => (
              <Skeleton height={'100px'} mb={3} bg={'green'} />
            ))}

          {conversations?.length === 0 && (
            <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
              Không có lớp học online
            </Text>
          )}

          {conversations
            ?.sort(
              (a: Conversation, b: Conversation) =>
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime()
            )
            .map((item: Conversation, _index: number) => (
              <RoomChat
                key={item._id}
                onSelect={() => selectRoom(item._id)}
                showMessage={showMessage}
                setShowMessage={setShowMessage}
                isMobile={isMobile}
                isActive={roomActive === item._id}
                data={item}
              />
            ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

type IHeaderSidebarChatProps = {
  click?: () => void;
  isTeacher?: boolean;
};

const HeaderSidebarChat: React.FC<IHeaderSidebarChatProps> = ({
  click,
  isTeacher,
}) => {
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
      {isTeacher && (
        <Tooltip label={'Tạo nhóm chat'} hasArrow placement="bottom">
          <Box _hover={{ bg: 'gray.200' }} p={1} rounded={'md'} onClick={click}>
            <AiOutlineUsergroupAdd
              size={'25px'}
              cursor={'pointer'}
              color={'gray'}
            />
          </Box>
        </Tooltip>
      )}
    </Flex>
  );
};

export default SidebarChat;
