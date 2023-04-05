import React, { Dispatch, SetStateAction } from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
import ListImage from '../ListImage/ListImage';
import { DataModal } from 'pages/chat';

type IMessageChatProps = {
  handleOpenModalPreview?: () => void;
  setDataModal?: Dispatch<SetStateAction<DataModal>>;
};

const MessageChat: React.FC<IMessageChatProps> = ({
  handleOpenModalPreview,
  setDataModal,
}) => {
  return (
    <React.Fragment>
      <Flex gap={3}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box>
          <Box
            bg={'gray.300'}
            px={5}
            py={2}
            rounded={'lg'}
            maxW={['200px', '300px', '300px', '400px']}
          >
            <Text fontSize={'sm'} fontWeight={'medium'} color={'gray'}>
              User name
            </Text>
            <Text whiteSpace={'normal'}>
              What are you doing? sdf ds fdsakfdjsk fdksl jfkldsjf klsdjalkf
              jdlksjf ldsj f
            </Text>
          </Box>
          <ListImage
            click={(url: string) => {
              handleOpenModalPreview();
              setDataModal({ typePreview: 0, url: url });
            }}
          />
        </Box>
      </Flex>
      <Flex gap={3} justifyContent={'flex-start'} flexDirection={'row-reverse'}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box>
          <Box
            bg={'gray.300'}
            px={5}
            py={2}
            rounded={'lg'}
            maxW={['200px', '300px', '300px', '400px']}
          >
            <Text whiteSpace={'normal'}>What are you doing?</Text>
          </Box>
          <Text fontSize={'sm'} color={'gray.400'}>
            Đã xem...
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default MessageChat;
