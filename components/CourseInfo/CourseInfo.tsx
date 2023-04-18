import {
  Box,
  Text,
  Flex,
  Spacer,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
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
      {title ? (
        <Text fontSize={{ base: '24px' }} fontWeight="bold" as="h1">
          {title}
        </Text>
      ) : (
        <Skeleton height="30px" width="50%" rounded={'xl'} />
      )}

      {description ? (
        <Text fontSize="14px">{description}</Text>
      ) : (
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      )}

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
      {chapters ? (
        chapters?.sort()?.map((chapter) => {
          return <CourseContent chapter={chapter} />;
        })
      ) : (
        <Skeleton height="50px" rounded={'md'} />
      )}
    </Box>
  );
};

export default CourseInfo;
