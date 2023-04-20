import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
import ListImage from '../ListImage/ListImage';
import { DataModal } from 'pages/chat';
import { FileType, Message, MessageSocket } from 'types/message.type';
import { AuthenContext } from 'context/AuthenContext';
import { DownloadIcon } from '@chakra-ui/icons';
import Link from 'next/link';

type IMessageChatProps = {
  handleOpenModalPreview?: () => void;
  setDataModal?: Dispatch<SetStateAction<DataModal>>;
  message: MessageSocket;
};

const MessageChat: React.FC<IMessageChatProps> = ({
  handleOpenModalPreview,
  setDataModal,
  message,
}) => {
  const { user } = useContext(AuthenContext);
  const ref = useRef<any>();

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [message]);

  return (
    <React.Fragment>
      <Flex
        ref={ref}
        mt={5}
        gap={3}
        justifyContent={message.sender.id === user._id && 'flex-start'}
        flexDirection={message.sender.id === user._id ? 'row-reverse' : 'row'}
      >
        <Avatar
          name={
            message.sender.id === user._id &&
            user?.fullName
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'D')
          }
          src={message.sender.id === user._id && user.avatar}
        />
        <Box>
          {message.fileType === FileType.TEXT && (
            <Box
              bg={message.sender.id === user._id ? 'green.300' : 'white'}
              px={5}
              py={2}
              rounded={'lg'}
              maxW={['200px', '300px', '300px', '400px']}
            >
              {message.sender.id !== user._id && (
                <Text fontSize={'sm'} fontWeight={'medium'} color={'gray'}>
                  {message.sender.fullName}
                </Text>
              )}
              <Text whiteSpace={'normal'}>{message.content}</Text>
            </Box>
          )}
          {message.fileType === FileType.IMAGE && (
            <ListImage
              click={(url: string) => {
                handleOpenModalPreview();
                setDataModal({ typePreview: 0, url: url });
              }}
              sender={message.sender.id === user._id}
              image={message.content}
            />
          )}
          {message.fileType === FileType.FILE && (
            <Flex
              alignItems={'center'}
              gap={2}
              flexDirection={
                message.sender.id === user._id ? 'row-reverse' : 'row'
              }
            >
              <iframe src={message.content} height="200" width="250"></iframe>
              <Link href={message.content} target={'_blank'}>
                <DownloadIcon
                  cursor={'pointer'}
                  color={'green.500'}
                  fontSize={'lg'}
                />
              </Link>
            </Flex>
          )}
          {message.sender.id === user._id && (
            <Text fontSize={'sm'} color={'gray.600'} float={'right'} pr={3}>
              Đã xem...
            </Text>
          )}
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default MessageChat;
