/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Text, Flex, Avatar, Center } from '@chakra-ui/react';

type IRoomChatProps = {
  showMessage?: boolean;
  setShowMessage?: (v: boolean) => void;
  isMobile?: boolean;
  onSelect?: () => void;
  isActive?: boolean;
};

const RoomChat: React.FC<IRoomChatProps> = ({
  setShowMessage,
  isMobile,
  onSelect,
  isActive,
}) => {
  return (
    <Box
      position={'relative'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={2}
      mb={3}
      py={3}
      boxShadow={'lg'}
      cursor={'pointer'}
      bg={isActive && 'gray.300'}
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
        <Box>
          <Avatar
            name="Dan Abrahmov"
            size={['md', 'md', 'md', 'lg']}
            src="https://bit.ly/dan-abramov"
          />
        </Box>
        <Box>
          <Text
            w={['220px', '100px', '100px', '100px', '200px']}
            fontWeight={'bold'}
            fontSize={['15px', '15px', '16px', 'md']}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
          >
            Name room
          </Text>
          <Text
            w={['220px', '100px', '100px', '100px', '200px']}
            fontSize={['sm', 'sm', 'sm', 'md']}
            overflow={'hidden'}
            whiteSpace={'nowrap'}
            color={isActive ? 'gray.500' : 'gray.400'}
          >
            What are you doing?
          </Text>
        </Box>
      </Flex>
      <Center
        className="unseen-message"
        fontSize={['xs', '10px', '10px', 'xs']}
        w={[7, 5, 5, 7]}
        h={[7, 5, 5, 7]}
        rounded={'full'}
        bg={'red.400'}
        color={'white'}
      >
        5+
      </Center>
    </Box>
  );
};

export default RoomChat;
