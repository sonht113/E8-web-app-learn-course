import React from 'react';
import { Box, Text, Flex, Avatar, Center } from '@chakra-ui/react';
import { Conversation } from 'types/converation.type';
import { CheckIcon } from '@chakra-ui/icons';

type IRoomChatProps = {
  showMessage?: boolean;
  setShowMessage?: (v: boolean) => void;
  isMobile?: boolean;
  onSelect?: () => void;
  isActive?: boolean;
  data?: Conversation;
};

const RoomChat: React.FC<IRoomChatProps> = ({
  setShowMessage,
  isMobile,
  onSelect,
  isActive,
  data,
}) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={2}
      mb={3}
      py={3}
      boxShadow={'lg'}
      cursor={'pointer'}
      bg={isActive ? '#152f37' : 'white'}
      _hover={!isActive && { bg: 'gray.100' }}
      onClick={() => {
        onSelect();
        if (isMobile) {
          setShowMessage(true);
        } else {
          return;
        }
      }}
    >
      <Flex alignItems={'center'} gap={3}>
        <Box border={'2px'} borderColor={'green.500'} rounded={'full'}>
          <Avatar
            name={data?.chatName}
            size={['md', 'md', 'md', 'lg']}
            src={data?.avatar}
          />
        </Box>
        <Box>
          <Text
            w={['220px', '100px', '100px', '100px', '180px']}
            fontWeight={'bold'}
            fontSize={['15px', '15px', '16px', 'md']}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
            color={isActive ? 'white' : 'gray.600'}
          >
            {data?.chatName}
          </Text>
          {data?.lastestMessage && (
            <Text
              w={['220px', '100px', '100px', '100px', '200px']}
              fontSize={['sm', 'sm', 'sm', 'md']}
              overflow={'hidden'}
              whiteSpace={'nowrap'}
              color={isActive ? 'gray.500' : 'gray.400'}
            >
              {data?.lastestMessage.text}
            </Text>
          )}
        </Box>
      </Flex>
      <Flex alignItems={'center'} gap={1}>
        <Text fontSize={'xs'} fontWeight={'medium'} color={'gray.400'}>
          11:45 PM
        </Text>
        <CheckIcon
          color={isActive ? 'green.300' : 'green.400'}
          fontSize={'sm'}
        />
      </Flex>
    </Box>
  );
};

export default RoomChat;
