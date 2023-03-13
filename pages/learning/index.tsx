import CourseItem from '@/components/CourseItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  AiFillQuestionCircle,
  AiOutlineArrowRight,
  AiOutlineMenu,
} from 'react-icons/ai';
import { MdStickyNote2 } from 'react-icons/md';
import { NextPageWithLayout } from 'types/layout.type';

const LearnedCourse: NextPageWithLayout = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Flex
        as="header"
        alignItems="center"
        bg="#29303b"
        px={8}
        py={3}
        height={'50px'}
        position="fixed"
        left="0"
        top="0"
        w="100%"
        zIndex={999}
      >
        <Flex alignItems="center">
          <ChevronLeftIcon boxSize={10} color="#fff" />
          <Image
            rounded={'md'}
            boxSize={'30px'}
            objectFit="cover"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt="E8 logo"
            marginX={4}
          />
          <Text fontWeight={700} color="#fff">
            HTML CSS từ Zero đến Hero
          </Text>
        </Flex>
        <Flex ml="auto" color="#fff" alignItems="center">
          <Flex alignItems="center" paddingEnd={10}>
            <MdStickyNote2 />
            <Text paddingStart={2}>Ghi chú</Text>
          </Flex>

          <Flex alignItems="center">
            <AiFillQuestionCircle />
            <Text paddingStart={2}>Hướng dẫn</Text>
          </Flex>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        width={{ base: '100%', md: '100%' }}
        marginY="50px"
        position="relative"
      >
        <GridItem colSpan={!toggle ? { base: 1, md: 3 } : { base: 1, md: 4 }}>
          <Box overflowY="scroll" height="100vh" className="scroll-custom">
            <Box bg="black" height="70%" paddingX={20}>
              <AspectRatio maxW="100%" height="99%" ratio={1}>
                <iframe
                  title="course"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            <Box paddingX={20}>
              <Box marginY="48px">
                <Heading
                  as="h2"
                  fontSize="28px"
                  fontWeight={600}
                  marginBottom="8px"
                >
                  CSS form đăng nhập
                </Heading>
                <Text fontSize="14px">Cập nhật tháng 2 năm 2022</Text>
              </Box>
              <Box>
                <Text fontSize="16px" marginY="16px" color="#292929">
                  Tham gia nhóm Học trực tuyến tại E8 trên Facebook để cùng nhau
                  trao đổi trong quá trình học tập ❤️
                </Text>
                <Text fontSize="16px" marginY="16px" color="#292929">
                  Các bạn subscribe kênh Youtube E8 Official để nhận thông báo
                  khi có các bài học mới nhé ❤️
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
        {!toggle && (
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <Box height="100vh" width="100%" position="fixed" paddingBottom={8}>
              <Text
                fontSize="16px"
                fontWeight={600}
                paddingX="16px"
                paddingY="12px"
              >
                Nội dung khóa học
              </Text>
              <Box height="100%" overflowY="scroll" className="scroll-custom">
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
              </Box>
            </Box>
          </GridItem>
        )}
      </Grid>

      <Flex
        as="footer"
        alignItems="center"
        bg="#f0f0f0"
        px={8}
        py={3}
        height={'50px'}
        position="fixed"
        left="0"
        bottom="0"
        w="100%"
        zIndex={999}
      >
        <Flex width="100%" alignItems="center">
          <Center width="100%">
            <Flex alignItems="center" cursor="pointer">
              <ChevronLeftIcon boxSize={6} />
              <Text paddingEnd={8}>BÀI TRƯỚC</Text>
            </Flex>
            <Flex alignItems="center" cursor="pointer">
              <Text paddingStart={8}>BÀI TIẾP THEO</Text>
              <ChevronRightIcon boxSize={6} />
            </Flex>
          </Center>
          <Button
            borderRadius="full"
            bg="#fff"
            paddingY="14px"
            paddingX="4px"
            onClick={handleToggle}
          >
            {!toggle ? (
              <AiOutlineArrowRight fontSize="20px" />
            ) : (
              <AiOutlineMenu fontSize="20px" />
            )}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LearnedCourse;
