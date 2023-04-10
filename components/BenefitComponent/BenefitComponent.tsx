import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Heading,
  Text,
  Flex,
  Avatar,
  Box,
  Input,
  Button,
  ModalFooter,
} from '@chakra-ui/react';
import { AiFillEdit, AiFillWechat, AiOutlineFolderOpen } from 'react-icons/ai';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import Link from 'next/link';

type IBenefitComponentProps = {
  onClose: () => void;
  isOpen: boolean;
};
const BenefitComponent: React.FC<IBenefitComponentProps> = ({
  onClose,
  isOpen,
}) => {
  return (
    <Modal
      isCentered={false}
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="4xl"
    >
      <ModalOverlay />
      <Box borderRadius={8}>
        <ModalContent bg="white" borderRadius="xl">
          <ModalCloseButton />
          <ModalBody>
            <Heading
              as="h5"
              fontSize="24px"
              fontWeight="700"
              marginTop={4}
              textTransform="uppercase"
              textAlign="center"
              py={8}
            >
              Dưới đây là một số đặc quyền khi trở thành teacher
            </Heading>
            <Box overflowY="auto" className="scroll-custom" maxH="60vh">
              <Text textAlign="center" fontStyle="italic" mb={8}>
                (Khi trở thành một teacher tại trang web E8, bạn sẽ có rất nhiều
                đặc quyền. Mời bạn đọc tham khảo các đặc quyền đó dưới này và
                xác nhận nếu bạn một trở thành một teacher tại E8)
              </Text>

              <Box fontSize="20px" fontWeight={600} px={24}>
                <Flex alignItems="center" my={4}>
                  <AiFillEdit />
                  <Text ms={4}>Có quyền tạo khóa học của riêng mình</Text>
                </Flex>
                <Flex alignItems="center" my={4}>
                  <AiOutlineFolderOpen />
                  <Text ms={4}>Mở lớp học trực tuyến</Text>
                </Flex>
                <Flex alignItems="center" my={4}>
                  <MdOutlineManageSearch />
                  <Text ms={4}>Quản lý các khóa học</Text>
                </Flex>
                <Flex alignItems="center" my={4}>
                  <AiFillWechat />
                  <Text ms={4}>Có thể tương tác với học viên</Text>
                </Flex>
                <Flex alignItems="center" my={4}>
                  <FaAward />
                  <Text ms={4}>Chế độ khen thưởng hợp lý</Text>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="gray.700"
              mr={3}
              onClick={onClose}
              color="white"
              _hover={{
                borderWidth: '2px',
                borderColor: 'gray.700',
                bgColor: 'transparent',
                color: 'black',
              }}
            >
              Hủy bỏ
            </Button>
            <Link href="/payment">
              <Button
                colorScheme="whatsapp"
                _hover={{
                  borderWidth: '2px',
                  borderColor: 'green',
                  bgColor: 'transparent',
                  color: 'black',
                }}
              >
                Xác nhận
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Box>
    </Modal>
  );
};

export default BenefitComponent;
