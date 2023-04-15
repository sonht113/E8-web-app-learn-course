import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  AiFillEdit,
  AiFillQuestionCircle,
  AiFillWechat,
  AiOutlineCheckCircle,
  AiOutlineFolderOpen,
} from 'react-icons/ai';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { GiInfinity } from 'react-icons/gi';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

const Transaction = () => {
  return (
    <Box
      px={{ base: 4, md: 10 }}
      py={6}
      bgColor="blackAlpha.900"
      width="100%"
      height={{ base: '100%', md: '100vh' }}
    >
      <Flex gap={4}>
        <Box>
          <Link href="/">
            <Image
              rounded={'md'}
              boxSize={'45px'}
              objectFit="cover"
              src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              alt="E8 logo"
            />
          </Link>
        </Box>
        <Box>
          <Text
            fontWeight={500}
            maxW={130}
            fontSize="16px"
            textTransform="uppercase"
            color="white"
          >
            Học tiếng anh để đi làm
          </Text>
        </Box>
      </Flex>
      <Container maxW={{ base: '100%', md: '90%', lg: '80%' }}>
        <Text
          textAlign="center"
          fontWeight={500}
          fontSize="48px"
          color="white"
          my={8}
        >
          Vui lòng xác nhận
        </Text>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
          width={{ base: '100%', md: '100%' }}
          margin="0 auto"
          paddingX={0}
          color="white"
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Box fontSize="16px" fontWeight={400}>
              <Text>Chúc mừng bạn đã thanh toán thành công</Text>
              <Text my={4}>
                Giờ đây bạn có thể khám phá và sử dụng trang web E8 để phục vụ
                cho việc học tập và giảng dạy tiếng anh
              </Text>
              <Text>
                Chúc bạn có một trải nghiệm tuyệt vời khi sử dụng dịch vụ của E8
              </Text>
            </Box>
            <Box my={8} bgColor="gray.800" p={4} borderRadius={8}>
              <Flex
                pb={4}
                borderBottomWidth="1px"
                borderColor="gray.500"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight={400} color="green">
                  Click vào nút xác nhận bên dưới để chuyển về trang Home của E8
                </Text>
              </Flex>
              <Flex pt={4}>
                <Text fontSize="14px" fontWeight={400} color="gray">
                  Contact: e8.education@gmail.com
                </Text>
              </Flex>
            </Box>
            <Button colorScheme="green" width="100%" borderRadius={12}>
              <Link href="/">Xác nhận</Link>
            </Button>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <Box
              borderWidth="1px"
              borderRadius={4}
              borderColor="green"
              p="16px"
              height="100%"
            >
              <Text py={4} textAlign="center" fontSize="24px" fontWeight={700}>
                Bạn sẽ nhận được gì?
              </Text>
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
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Transaction;
