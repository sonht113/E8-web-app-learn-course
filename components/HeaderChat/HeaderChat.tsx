import React, { useContext, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  useDisclosure,
  Avatar,
  Box,
  Flex,
  Text,
  Tooltip,
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { ArrowBackIcon, DragHandleIcon } from '@chakra-ui/icons';
import { AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import Link from 'next/link';
import { ChatContext } from 'context/ChatContext';
import { AuthenContext } from 'context/AuthenContext';
import { TypeUser } from 'types/user.type';

type IHeaderChatProps = {
  showMessage?: boolean;
  setShowMessage?: (v: boolean) => void;
  isMobile?: boolean;
  handleOpenModalAddStudent?: () => void;
};

const HeaderChat: React.FC<IHeaderChatProps> = ({
  setShowMessage,
  showMessage,
  isMobile,
  handleOpenModalAddStudent,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { conversationDetail } = useContext(ChatContext);
  const { user } = useContext(AuthenContext);
  const btnRef = React.useRef();

  const router = useRouter();

  const isTeacher = useMemo(() => user.typeUser === TypeUser.TEACHER, [user]);

  return (
    <Flex
      position={isMobile ? 'fixed' : 'absolute'}
      top={isMobile ? '64px' : 0}
      left={0}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={3}
      h={'61px'}
      w={'full'}
      boxShadow={'lg'}
      bg={'white'}
      zIndex={12}
    >
      <Box display={'flex'} alignItems={'center'}>
        <ArrowBackIcon
          className="back-icon-chat"
          fontSize={'2xl'}
          cursor={'pointer'}
          onClick={() => setShowMessage(!showMessage)}
        />

        <Box display={'flex'} ml={3} gap={2} alignItems={'center'}>
          <Box border={'2px'} borderColor={'green.500'} rounded={'full'}>
            <Avatar
              className="avatar-group-chat"
              src={conversationDetail?.avatar}
            />
          </Box>
          <Box>
            <Text fontSize={'md'} color={'gray.500'} fontWeight={'bold'}>
              {conversationDetail?.chatName}
            </Text>
            <Flex gap={1}>
              <AiOutlineUser color="gray" />
              <Text fontSize={'sm'} color={'gray.400'}>
                {conversationDetail?.users.length} thanh vien
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Flex gap={4}>
        {isTeacher && (
          <Tooltip label={'Thêm thành viên'} hasArrow placement="bottom-start">
            <Box
              onClick={() => {
                handleOpenModalAddStudent();
              }}
            >
              <AiOutlineUserAdd fontSize={'30px'} cursor={'pointer'} />
            </Box>
          </Tooltip>
        )}
        <Tooltip label={'Cuộc gọi video'} hasArrow placement="bottom-start">
          <Link target={'_blank'} href={`/video-call/${router.query.room}`}>
            <Box>
              <BsCameraVideo fontSize={'30px'} cursor={'pointer'} />
            </Box>
          </Link>
        </Tooltip>
        <Tooltip label={'Tuỳ chọn'} hasArrow placement="bottom-start">
          <Box display={'none'}>
            <DragHandleIcon
              ref={btnRef}
              onClick={onOpen}
              fontSize={'20px'}
              cursor={'pointer'}
            />
          </Box>
        </Tooltip>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default HeaderChat;
