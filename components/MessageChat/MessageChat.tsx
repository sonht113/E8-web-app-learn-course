import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

const MessageChat = () => {
  return (
    <React.Fragment>
      <Flex gap={3}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box
          bg={'gray.300'}
          px={5}
          py={2}
          rounded={'lg'}
          maxW={['200px', '300px', '300px', '500px']}
        >
          <Text whiteSpace={'normal'}>
            What are you doing? sdf ds fdsakfdjsk fdksl jfkldsjf klsdjalkf
            jdlksjf ldsj f
          </Text>
        </Box>
      </Flex>
      <Flex gap={3} justifyContent={'flex-start'} flexDirection={'row-reverse'}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box
          bg={'gray.300'}
          px={5}
          py={2}
          rounded={'lg'}
          maxW={['200px', '300px', '300px', '500px']}
        >
          <Text whiteSpace={'normal'}>What are you doing?</Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default MessageChat;
