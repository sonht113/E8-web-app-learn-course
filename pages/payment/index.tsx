import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Spacer,
  Center,
  Spinner,
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
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourse } from 'api/course.api';
import { FaAward } from 'react-icons/fa';
import logo from 'public/static/images/icon.png';
import React, { ReactElement, useContext, useMemo } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { CourseType } from 'types/course.type';
import useToastify from 'hook/useToastify';
import { Transaction, TransactionStatusEnum } from 'types/transaction.type';
import {
  buyCourseAPI,
  registerForClassOnlineAPI,
  upgradeToTeacherAPI,
} from 'api/transaction.api';
import { AuthenContext } from 'context/AuthenContext';

const optionsCoursePro: { icon: ReactElement; text: string }[] = [
  {
    icon: <AiOutlineCheckCircle />,
    text: 'Truy cập toàn bộ khóa HTML CSS Pro',
  },
  {
    icon: <AiFillQuestionCircle />,
    text: 'Kênh hỏi đáp riêng tư',
  },
  {
    icon: <RiQuestionAnswerLine />,
    text: 'Đáp án cho mọi thử thách',
  },
  {
    icon: <GiInfinity />,
    text: 'Mua một lần, học mãi mãi',
  },
];

const optionsUpgradeTeacher: { icon: ReactElement; text: string }[] = [
  {
    icon: <AiFillEdit />,
    text: 'Có quyền tạo khóa học của riêng mình',
  },
  {
    icon: <AiOutlineFolderOpen />,
    text: 'Mở lớp học trực tuyến',
  },
  {
    icon: <AiFillWechat />,
    text: 'Có thể tương tác với học viên',
  },
  {
    icon: <FaAward />,
    text: 'Chế độ khen thưởng hợp lý',
  },
];

enum TypePayment {
  UPGRADE_TO_TEACHER = 'UPGRADE_TO_TEACHER',
  COURSE_PAYMENT = 'COURSE_PAYMENT',
  JOINS_CLASS = 'JOINS_CLASS',
}

const Payment = () => {
  const CURRENT_PRICE_UPGRADE_TEACHER = '500000';
  const router = useRouter();
  const toast = useToastify();

  const { user } = useContext(AuthenContext);

  const isBuyCourse = useMemo(() => {
    return router.query.type === TypePayment.COURSE_PAYMENT;
  }, [router.query]);

  const isUpgradeTeacher = useMemo(
    () => router.query.type === TypePayment.UPGRADE_TO_TEACHER,
    [router.query]
  );

  const isJoinClassOnline = useMemo(() => {
    return router.query.type === TypePayment.JOINS_CLASS;
  }, [router.query]);

  const { idCourse } = router.query;
  const { idClass } = router.query;

  let courseData: CourseType;
  if (idCourse) {
    const queryCourse = useQuery({
      queryKey: ['course', idCourse],
      queryFn: () => getCourse(String(idCourse)),
      keepPreviousData: true,
    });
    courseData = queryCourse.data?.data;
  }

  const buyCourseMutate = useMutation({
    mutationFn: (body: Transaction) => buyCourseAPI(body),
  });

  const upgradeTeacherMutate = useMutation({
    mutationFn: (body: Transaction) => upgradeToTeacherAPI(body),
  });

  const joinClassOnlineMutate = useMutation({
    mutationFn: (body: Transaction) => registerForClassOnlineAPI(body),
  });

  const buyCourse = (body: Transaction) => {
    buyCourseMutate.mutate(body, {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const upgradeToTeacher = (body: Transaction) => {
    upgradeTeacherMutate.mutate(body, {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const joinClassOnline = (body: Transaction) => {
    joinClassOnlineMutate.mutate(body, {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const handleTransaction = (body: Transaction) => {
    if (isBuyCourse) {
      return buyCourse(body);
    } else if (isUpgradeTeacher) {
      return upgradeToTeacher(body);
    } else {
      return joinClassOnline(body);
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
      }}
    >
      <Box px={{ base: 4, md: 10 }} py={6} width="100%">
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
              color="black"
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
            color="black"
            my={8}
          >
            {isBuyCourse && 'Mở khóa toàn bộ khóa học'}
            {isUpgradeTeacher && 'Mở toàn bộ đặc quyền của teacher'}
            {isJoinClassOnline && 'Tham gia khoá học online'}
          </Text>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={8}
            width={{ base: '100%', md: '100%' }}
            margin="0 auto"
            paddingX={0}
            color="black"
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
                  {courseData?.price && (
                    <>
                      <Text
                        fontSize="16px"
                        fontWeight={400}
                        color="white"
                        ms={{ base: 12, md: 48 }}
                      >
                        Giá bán:{' '}
                      </Text>
                      <Spacer />
                      <Text fontSize="20px" fontWeight={500} color="green">
                        {courseData?.price}đ
                      </Text>
                    </>
                  )}
                </Flex>
                <Flex pt={4}>
                  <Text
                    fontSize="18px"
                    fontWeight={700}
                    ms={{ base: 12, md: 48 }}
                    color={'white'}
                  >
                    Tổng tiền:{' '}
                  </Text>
                  <Spacer />
                  <Text fontSize="20px" fontWeight={500} color="green">
                    {isUpgradeTeacher && CURRENT_PRICE_UPGRADE_TEACHER + 'đ'}
                    {!isUpgradeTeacher &&
                      courseData?.price &&
                      `${courseData?.price}đ`}
                  </Text>
                </Flex>
              </Box>
              {!courseData && !isUpgradeTeacher && (
                <Center>
                  <Spinner />
                </Center>
              )}
              {(courseData || isUpgradeTeacher) && (
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: isUpgradeTeacher
                              ? String(
                                  Number(CURRENT_PRICE_UPGRADE_TEACHER) / 25000
                                )
                              : String(Number(courseData.price) / 25000),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      //const name = details.payer.name.given_name;
                      toast.handleOpenToastify(
                        'success',
                        'Thanh toán thành công',
                        3000
                      );
                      handleTransaction({
                        idUser: user._id,
                        idCourse: idCourse && String(idCourse),
                        idClassRoom: idClass && String(idClass),
                        status: TransactionStatusEnum.SUCCESS,
                        email: user.email,
                        phone: user.phone,
                      });
                    });
                  }}
                  onError={(err) => {
                    console.log(err);
                    toast.handleOpenToastify(
                      'error',
                      'Thanh toán thất bại',
                      3000
                    );
                  }}
                />
              )}
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Box
                borderWidth="1px"
                borderRadius={4}
                borderColor="green"
                p="16px"
              >
                <Text
                  py={4}
                  textAlign="center"
                  fontSize="24px"
                  fontWeight={700}
                >
                  Bạn sẽ nhận được gì?
                </Text>
                {courseData?.title
                  ? optionsCoursePro.map(
                      (item: { icon: ReactElement; text: string }) => (
                        <Flex key={item.text} alignItems="center" py={2}>
                          {item.icon}
                          <Text ps={2}>{item.text}</Text>
                        </Flex>
                      )
                    )
                  : optionsUpgradeTeacher.map(
                      (item: { icon: ReactElement; text: string }) => (
                        <Flex key={item.text} alignItems="center" my={4}>
                          {item.icon}
                          <Text ms={4}>{item.text}</Text>
                        </Flex>
                      )
                    )}
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </PayPalScriptProvider>
  );
};
export default Payment;
