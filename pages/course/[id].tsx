import CourseContent from '@/components/CourseContent';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import DefaultLayout from 'layouts/defaultLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types/layout.type';
import { SiOpslevel } from 'react-icons/si';
import { FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsBatteryFull } from 'react-icons/bs';

const CourseDetail: NextPageWithLayout = () => {
  return (
    <>
      <Container maxW="100%" paddingY={4}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={6}
          width={{ base: '100%', md: '100%' }}
          margin="0 auto"
          paddingX={10}
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Text fontSize="32px" fontWeight="bold" as="h1">
              Lập trình C++ cơ bản, nâng cao
            </Text>
            <Text fontSize="14px">
              Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới
              bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các
              khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc
              để chinh phục con đường trở thành một lập trình viên.
            </Text>

            <Box paddingY={4} fontSize="14px">
              <Text fontSize="xl" fontWeight="bold" paddingBottom={2}>
                Nội dung khóa học
              </Text>
              <Flex>
                <Text>11 chương • 56 bài học • Thời lượng 10 giờ 19 phút</Text>
                <Spacer />
                <Text color={'#f05123'} fontWeight={600} cursor="pointer">
                  Mở rộng tất cả
                </Text>
              </Flex>
            </Box>

            <CourseContent />
            <CourseContent />
            <CourseContent />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <Box marginY={4} borderRadius={8} width={'100%'} height={'250px'}>
              <AspectRatio
                width="100%"
                height="100%"
                ratio={1}
                borderRadius={8}
              >
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                  style={{ borderRadius: 'inherit' }}
                />
              </AspectRatio>
            </Box>
            <VStack>
              <Center>
                <Text fontSize={'32px'} color={'#f05123'}>
                  Miễn phí
                </Text>
              </Center>
              <Center>
                <Button colorScheme="orange" borderRadius={40} paddingX={12}>
                  ĐĂNG KÝ HỌC
                </Button>
              </Center>
              <Box paddingTop={2}>
                <Flex alignItems={'center'} marginY={2}>
                  <SiOpslevel size={'14px'} />
                  <Text paddingLeft={2}>Trình độ cơ bản</Text>
                </Flex>
                <Flex alignItems={'center'} marginY={2}>
                  <FaPhotoVideo size={'14px'} />
                  <Text paddingLeft={2}>Tổng số 56 bài học</Text>
                </Flex>
                <Flex alignItems={'center'} marginY={2}>
                  <MdOutlineWatchLater size={'14px'} />
                  <Text paddingLeft={2}>Thời lượng 10 giờ 19 phút</Text>
                </Flex>
                <Flex alignItems={'center'} marginY={2}>
                  <BsBatteryFull size={'14px'} />
                  <Text paddingLeft={2}>Học mọi lúc, mọi nơi</Text>
                </Flex>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

CourseDetail.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CourseDetail;
