import { Box, Text, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { ChapterType } from 'types/chapter.type';
import { CourseType } from 'types/course.type';
import CourseContent from '../CourseContent';

type ICourseInfoProps = {
  title: string;
  description: string;
  chapters: ChapterType[];
  courseData: CourseType;
};

const CourseInfo: React.FC<ICourseInfoProps> = ({
  title,
  description,
  chapters,
  courseData,
}) => {
  return (
    <Box>
      <Text fontSize={{ base: '24px' }} fontWeight="bold" as="h1">
        {title}
      </Text>
      <Text fontSize="14px">{description}</Text>

      <Box paddingY={4} fontSize="14px">
        <Text fontSize="xl" fontWeight="bold" paddingBottom={2}>
          Nội dung khóa học
        </Text>
        <Flex>
          <Text>
            {courseData?.totalChapter} chương • {courseData?.totalLectures} bài
            học • Thời lượng {courseData?.totalTime}
          </Text>
          <Spacer />
          <Text color={'#f05123'} fontWeight={600} cursor="pointer">
            Mở rộng tất cả
          </Text>
        </Flex>
      </Box>

      {chapters?.sort()?.map((chapter) => {
        return <CourseContent chapter={chapter} />;
      })}
    </Box>
  );
};

export default CourseInfo;
