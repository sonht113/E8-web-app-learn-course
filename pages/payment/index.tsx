import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
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
import PaymentModal from '@/components/PaymentModal';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from 'api/course.api';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import logo from 'public/static/images/icon.png';

const PaymentContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const { idCourse } = router.query;

  let courseData;
  if (idCourse) {
    const queryCourse = useQuery({
      queryKey: ['course'],
      queryFn: () => getCourse(idCourse),
      keepPreviousData: true,
    });
    courseData = queryCourse.data?.data;
  }

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
              src={logo}
              alt="E8 logo"
              width={50}
              style={{ objectFit: 'cover' }}
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
          {courseData?.title
            ? 'Mở khóa toàn bộ khóa học'
            : 'Mở toàn bộ đặc quyền của teacher'}
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
              <Text>
                {courseData?.title
                  ? `Sở hữu khóa học ${courseData?.title} đầy đủ và chi tiết nhất bạn
                có thể tìm thấy trên Internet.`
                  : 'Có cơ hội đăng và dạy các khóa học thuộc thế mạnh của bản thân, tiếp cận với số lượng học viên lớn.'}
              </Text>
              <Text my={4}>
                {courseData?.title
                  ? `${courseData?.desc}`
                  : 'Quản lý các khóa học một cách hiệu quả và dễ dàng.'}
              </Text>
              <Text>
                {courseData?.title
                  ? ' Khóa học chưa hoàn thành 100%, dự kiến hoàn thành trong 3 tháng tới. Bài học mới được cập nhật mỗi ngày.'
                  : 'Tương các với các học viên thông qua các nhóm chat và trong giờ học online'}
              </Text>
            </Box>
            <Box my={8} bgColor="gray.800" p={4} borderRadius={8}>
              <Flex
                pb={4}
                borderBottomWidth="1px"
                borderColor="gray.500"
                alignItems="center"
              >
                {courseData?.price ? (
                  <>
                    <Text fontSize="16px" fontWeight={400} color="gray" ms={48}>
                      Giá bán:{' '}
                    </Text>
                    <Spacer />
                    <Text fontSize="20px" fontWeight={500} color="green">
                      {courseData?.price}đ
                    </Text>
                  </>
                ) : (
                  <>
                    <Text fontSize="16px" fontWeight={400} color="gray" ms={48}>
                      Giá:{' '}
                    </Text>
                    <Spacer />
                    <Text fontSize="20px" fontWeight={500} color="green">
                      499000đ
                    </Text>
                  </>
                )}
              </Flex>
              <Flex pt={4}>
                <Text fontSize="18px" fontWeight={700} ms={48}>
                  Tổng tiền:{' '}
                </Text>
                <Spacer />
                <Text fontSize="20px" fontWeight={500} color="green">
                  {courseData?.price ? `${courseData?.price}đ` : '499000đ'}
                </Text>
              </Flex>
            </Box>
            <Button
              colorScheme="green"
              width="100%"
              borderRadius={12}
              onClick={onOpen}
            >
              LẤY THÔNG TIN THANH TOÁN
            </Button>
            <PaymentModal
              isOpen={isOpen}
              onClose={onClose}
              title={courseData?.title}
              price={courseData?.price}
            />
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
              {courseData?.title ? (
                <>
                  <Flex alignItems="center" py={2}>
                    <AiOutlineCheckCircle />
                    <Text ps={2}>Truy cập toàn bộ khóa HTML CSS Pro</Text>
                  </Flex>
                  <Flex alignItems="center" py={2}>
                    <AiFillQuestionCircle />
                    <Text ps={2}>Kênh hỏi đáp riêng tư</Text>
                  </Flex>
                  <Flex alignItems="center" py={2}>
                    <RiQuestionAnswerLine />
                    <Text ps={2}>Đáp án cho mọi thử thách</Text>
                  </Flex>
                  <Flex alignItems="center" py={2}>
                    <GiInfinity />
                    <Text ps={2}>Mua một lần, học mãi mãi</Text>
                  </Flex>
                </>
              ) : (
                <>
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
                </>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

const Payment = () => {
  return <PaymentContent />;
};

export default Payment;
