import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

import ListImage from '../ListImage/ListImage';
import { DataModal } from 'pages/chat';
import { FileType, Message } from 'types/message.type';
import { AuthenContext } from 'context/AuthenContext';
import Link from 'next/link';

type IMessageChatProps = {
  handleOpenModalPreview?: () => void;
  setDataModal?: Dispatch<SetStateAction<DataModal>>;
  message: Message;
};

const MessageChat: React.FC<IMessageChatProps> = ({
  handleOpenModalPreview,
  setDataModal,
  message,
}) => {
  const { user } = useContext(AuthenContext);
  const ref = useRef<any>();

  const isSender = useMemo(
    () => message.sender._id === user._id,
    [message, user]
  );

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
        justifyContent={isSender && 'flex-start'}
        flexDirection={isSender ? 'row-reverse' : 'row'}
      >
        <Avatar
          name={
            isSender
              ? user?.fullName
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D')
              : message.sender?.fullName
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D')
          }
          src={isSender && user.avatar}
        />
        <Box>
          {message.fileType === FileType.TEXT && (
            <Box
              bg={isSender ? 'green.300' : 'white'}
              px={5}
              py={2}
              rounded={'lg'}
              maxW={['200px', '300px', '300px', '400px']}
            >
              {!isSender && (
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
              sender={isSender}
              image={message.content}
            />
          )}
          {message.fileType === FileType.FILE && (
            <Flex
              alignItems={'center'}
              gap={2}
              flexDirection={isSender ? 'row-reverse' : 'row'}
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
          {isSender && (
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
