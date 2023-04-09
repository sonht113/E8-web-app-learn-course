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
import { AiFillQuestionCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { GiInfinity } from 'react-icons/gi';
import PaymentModal from '@/components/PaymentModal';
const Logo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          Mở khóa toàn bộ khóa học
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
                Sở hữu khóa học HTML CSS đầy đủ và chi tiết nhất bạn có thể tìm
                thấy trên Internet.
              </Text>
              <Text my={4}>
                Có tới hàng trăm bài tập thực hành sau mỗi bài học và bạn sẽ
                được làm 8 dự án thực tế trong khóa học này.
              </Text>
              <Text>
                Khóa học chưa hoàn thành 100%, dự kiến hoàn thành trong 3 tháng
                tới. Bài học mới được cập nhật mỗi ngày.
              </Text>
            </Box>
            <Box my={8} bgColor="gray.800" p={4} borderRadius={8}>
              <Flex
                pb={4}
                borderBottomWidth="1px"
                borderColor="gray.500"
                alignItems="center"
              >
                <Text fontSize="16px" fontWeight={400} color="gray" ms={48}>
                  Giá bán:{' '}
                </Text>
                <Spacer />
                <Text fontSize="20px" fontWeight={500} color="green">
                  150,000đ
                </Text>
              </Flex>
              <Flex pt={4}>
                <Text fontSize="18px" fontWeight={700} ms={48}>
                  Tổng tiền:{' '}
                </Text>
                <Spacer />
                <Text fontSize="20px" fontWeight={500} color="green">
                  150,000đ
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
            <PaymentModal isOpen={isOpen} onClose={onClose} />
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
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

const Payment = () => {
  return <Logo />;
};

export default Payment;
