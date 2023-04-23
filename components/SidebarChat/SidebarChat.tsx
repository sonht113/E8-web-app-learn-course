import React, { useContext, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Tooltip,
  useDisclosure,
  Text,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { AiOutlineUsergroupAdd, AiOutlineHome } from 'react-icons/ai';
import { useQueryClient } from '@tanstack/react-query';
import SearchFC from '../Search';
import RoomChat from '../RoomChat/RoomChat';
import { ChatContext } from 'context/ChatContext';
import ModalFC from '../ModalFC';
import FormCreateConversation from '../FormCreateConversation';
import { Conversation } from 'types/converation.type';
import { AuthenContext } from 'context/AuthenContext';
import { TypeUser } from 'types/user.type';
import useDebounce from 'hook/useDebounce';
import { searchConversationApi } from 'api/chat.api';

const SidebarChat = () => {
  const [valueSearchConversation, setValueSearchConversation] =
    useState<string>('');

  const { onOpen, onClose, isOpen } = useDisclosure();
  const queryClient = useQueryClient();
  const {
    showMessage,
    setShowMessage,
    isMobile,
    selectRoom,
    roomActive,
    conversations,
    setConversations,
  } = useContext(ChatContext);
  const valueSearchConversationDebounce = useDebounce(
    valueSearchConversation,
    1000
  );

  const { user } = useContext(AuthenContext);

  const isTeacher = useMemo(() => user.typeUser === TypeUser.TEACHER, [user]);

  const searchConversationQuery = (value: string) => {
    return queryClient.prefetchQuery(['searchConversation', value], {
      queryFn: () =>
        searchConversationApi(value)
          .then((res) => {
            setConversations(res.data.results);
            return res;
          })
          .catch((err) => console.log(err)),
    });
  };

  useEffect(() => {
    searchConversationQuery(valueSearchConversationDebounce);
  }, [valueSearchConversationDebounce]);

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
        <HeaderSidebarChat
          valueSearchConversation={valueSearchConversation}
          setValueSearchConversation={setValueSearchConversation}
          click={() => onOpen()}
          isTeacher={isTeacher}
        />
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
          {!conversations && (
            <Center mt={5}>
              <Spinner />
            </Center>
          )}

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
  setValueSearchConversation: React.Dispatch<React.SetStateAction<string>>;
  valueSearchConversation: string;
};

const HeaderSidebarChat: React.FC<IHeaderSidebarChatProps> = ({
  click,
  isTeacher,
  setValueSearchConversation,
  valueSearchConversation,
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
      <SearchFC
        sizeInput={'sm'}
        sizeIcon={'sm'}
        radius={'lg'}
        placeholder={'Tìm kiếm'}
        value={valueSearchConversation}
        setValue={setValueSearchConversation}
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
