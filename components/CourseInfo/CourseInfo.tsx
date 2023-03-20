import { Box, Text, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import CourseContent from '../CourseContent';

type ICourseInfoProps = {
  title: string;
};

const CourseInfo: React.FC<ICourseInfoProps> = ({ title }) => {
  return (
    <Box>
      <Text fontSize={{ base: '24px' }} fontWeight="bold" as="h1">
        {title}
      </Text>
      <Text fontSize="14px">
        Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt
        đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm
        căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục
        con đường trở thành một lập trình viên.
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
    </Box>
  );
};

export default CourseInfo;
