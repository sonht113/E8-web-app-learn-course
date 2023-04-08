import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text, Grid, Flex } from '@chakra-ui/react';
import React from 'react';
import { CourseViewHome } from 'types/course.type';
import Course from '../Course';

type IListCourseProps = {
  courses: CourseViewHome[];
  title: string;
  isPro: boolean;
};

const ListCourse: React.FC<IListCourseProps> = ({ courses, title, isPro }) => {
  return (
    <Box mt={10} w={['100%', '95%']} mx={'auto'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={4}
      >
        <Flex gap={1} alignItems={'center'}>
          <Box>
            <Text fontSize={'xl'} fontWeight={'bold'}>
              {title}
            </Text>
          </Box>
          {!isPro && (
            <Box
              h={5}
              w={5}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={1}
              bg={'rgba(129, 129, 129, 0.5)'}
              rounded={'full'}
            >
              <ArrowForwardIcon fontSize={'sm'} />
            </Box>
          )}
        </Flex>
        {!isPro && (
          <Flex
            className="linkLearningPath"
            alignItems={'center'}
            cursor={'pointer'}
          >
            <Box>
              <Text
                className="textLearningPath"
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'#09b166'}
              >
                Xem lộ trình
              </Text>
            </Box>
            <ChevronRightIcon className="iconLearningPath" color={'#09b166'} />
          </Flex>
        )}
      </Box>
      <Grid
        templateColumns={[
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={5}
        pb={5}
        overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
      >
        {courses?.map((course: CourseViewHome, index: number) => (
          <Course
            key={index}
            id={course._id}
            title={course.title}
            price={course.price}
            isFree={course.isPrivate}
            thumbnail={course.thumbnail}
            totalViews={course.totalViews}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListCourse;
