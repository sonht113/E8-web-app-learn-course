import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Spacer,
  // Image,
} from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';

// import QRCode from '../../public/static/images/qr-code.jpg';

type IBankInforProps = {
  title: string;
  price: number;
};

const BankInfor = ({ title, price }: IBankInforProps) => {
  return (
    <Box>
      <Text textAlign="center" mb={8} color="green">
        Sau khi chuyển khoản, vui lòng chuyển sang mục{' '}
        <Text as="span" fontWeight={700} color="yellow">
          Nhập thông tin của bạn
        </Text>{' '}
        để thực hiện các yêu cầu tiếp theo{' '}
      </Text>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={8}
        width={{ base: '100%', md: '100%' }}
        margin="0 auto"
        paddingX={0}
        color="white"
      >
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box borderWidth="1px" borderRadius={4} borderColor="green" p="16px">
            <Text py={4} textAlign="center" fontSize="24px" fontWeight={700}>
              Thông tin thanh toán
            </Text>
            <Flex
              alignItems="center"
              fontSize="18px"
              borderBottomWidth="1px"
              borderColor="blue.300"
              justifyContent={!title && 'center'}
            >
              {title ? (
                <>
                  <Text fontSize={16}>Tên khóa học:</Text>
                  <Spacer />
                  <Text fontSize={16} fontWeight={700}>
                    {title}
                  </Text>
                </>
              ) : (
                <Text fontSize={16} fontWeight={700}>
                  UPGRADE TO TEACHER
                </Text>
              )}
            </Flex>
            <Text fontSize="18px" pt={8}>
              Chi tiết thanh toán:
            </Text>
            <Box my={8} bgColor="gray.700" p={4} borderRadius={8}>
              <Flex
                pb={4}
                borderBottomWidth="1px"
                borderColor="gray.500"
                alignItems="center"
              >
                {price ? (
                  <>
                    <Text fontSize="16px" fontWeight={400} color="gray">
                      Giá bán:{' '}
                    </Text>
                    <Spacer />
                    <Text fontSize="20px" fontWeight={500} color="green">
                      {price}đ
                    </Text>
                  </>
                ) : (
                  <>
                    <Text fontSize="16px" fontWeight={400} color="gray">
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
                <Text fontSize="18px" fontWeight={700}>
                  Tổng tiền:{' '}
                </Text>
                <Spacer />
                <Text fontSize="20px" fontWeight={500} color="green">
                  {price ? `${price}đ` : '499000đ'}
                </Text>
              </Flex>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          overflowY="scroll"
          className="scroll-custom"
          width="100%"
          height="90vh"
          pe={2}
          paddingBottom={{ base: '500px', md: 24 }}
        >
          <Text fontSize="24px" fontWeight={700}>
            Chuyển khoản bằng QR
          </Text>

          <Box py={8}>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={4}
              width={{ base: '100%', md: '100%' }}
              margin="0 auto"
              paddingX={0}
            >
              <GridItem colSpan={{ base: 1, md: 1 }}>
                <Box boxSize="200px" borderRadius={8}>
                  {/* <Image
                    borderRadius={8}
                    src={QRCode.src}
                    width="100%"
                    height="100%"
                    alt="QR Code"
                  /> */}
                  <Text textAlign="center" fontSize={20} color="gray">
                    Coming soon...
                  </Text>
                </Box>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Text fontSize="16px" fontWeight={400}>
                  Bước 1: Mở app ngân hàng hoặc Momo và quét mã QR.
                </Text>
                <Text fontSize="16px" fontWeight={400} py={4}>
                  Bước 2: Đảm bảo nội dung chuyển khoản theo format là{' '}
                  <Text color="green" fontWeight={700}>
                    E8 - Tên người chuyển khoản
                  </Text>
                </Text>
                <Text fontSize="16px" fontWeight={400}>
                  Bước 3: Thực hiện thanh toán.
                </Text>
              </GridItem>
            </Grid>
          </Box>
          <Text fontSize="24px" fontWeight={700} my={8}>
            Chuyển khoản thủ công
          </Text>
          <Box>
            <Grid
              h="100%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
            >
              <GridItem
                colSpan={{ base: 4, md: 2 }}
                bgColor="gray.700"
                px={4}
                py={2}
                borderRadius={8}
              >
                <Text fontSize="14px" color="whiteAlpha.700">
                  Số tài khoản
                </Text>
                <Text fontSize="18px" color="white" fontWeight={600}>
                  26260333
                </Text>
              </GridItem>
              <GridItem
                colSpan={{ base: 4, md: 2 }}
                bgColor="gray.700"
                px={4}
                py={2}
                borderRadius={8}
              >
                <Text fontSize="14px" color="whiteAlpha.700">
                  Tên tài khoản
                </Text>
                <Text fontSize="18px" color="white" fontWeight={600}>
                  NGUYỄN XUÂN TÙNG
                </Text>
              </GridItem>
              <GridItem
                colSpan={{ base: 4, md: 2 }}
                bgColor="gray.700"
                px={4}
                py={2}
                borderRadius={8}
              >
                <Text fontSize="14px" color="whiteAlpha.700">
                  Nội dung
                </Text>
                <Text fontSize="18px" color="white">
                  E8 - Tên người chuyển khoản
                </Text>
              </GridItem>
              <GridItem
                colSpan={{ base: 4, md: 2 }}
                bgColor="gray.700"
                px={4}
                py={2}
                borderRadius={8}
              >
                <Text fontSize="14px" color="whiteAlpha.700">
                  Chi nhánh
                </Text>
                <Text fontSize="18px" color="white">
                  Kienlongbank Sông Cầu, Phú Yên
                </Text>
              </GridItem>
            </Grid>
          </Box>
          <Text fontSize="24px" fontWeight={700} mt={8} mb={4}>
            Lưu ý
          </Text>
          <Text fontSize="16px">
            Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống không phản
            hồi vui lòng liên hệ ngay bộ phận hỗ trợ của F8.
          </Text>
          <Flex alignItems="center">
            <BsFillTelephoneFill />
            <Text fontSize="16px" ms={4} mt={4}>
              0335375374
            </Text>
          </Flex>
          <Flex alignItems="center">
            <AiOutlineMail />
            <Text fontSize="16px" ms={4} my={4}>
              e8.education@gmail.com
            </Text>
          </Flex>
          <Flex alignItems="center">
            <FaMapMarkedAlt />
            <Text fontSize="16px" ms={4}>
              Hòa Cường Nam, Hải Châu, Đà Nẵng
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default BankInfor;
