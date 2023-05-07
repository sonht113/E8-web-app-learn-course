import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text, Grid, Flex, Skeleton, Center } from '@chakra-ui/react';
import React from 'react';
import { CourseType, CourseViewHome } from 'types/course.type';
import { User } from 'types/user.type';
import Course from '../Course';

type IListCourseProps = {
  courses: CourseViewHome[];
  title?: string;
  isPro: boolean;
  user?: User;
};

const ListCourse: React.FC<IListCourseProps> = ({
  courses,
  title,
  isPro,
  user,
}) => {
  console.log(courses);
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
          {!isPro && title && (
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
        {!isPro && title && (
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
        templateColumns={
          courses?.length === 0
            ? '1fr'
            : [
                'repeat(5, 1fr)',
                'repeat(5, 1fr)',
                'repeat(5, 1fr)',
                'repeat(4, 1fr)',
              ]
        }
        gap={5}
        pb={5}
        overflowX={
          courses?.length !== 0 && ['scroll', 'scroll', 'scroll', 'hidden']
        }
      >
        {!courses &&
          [1, 2, 3, 4, 5].map((_item, index) => (
            <Skeleton
              key={index}
              w={['60vw', '30vw', '30vw', 'full']}
              h={'180px'}
              rounded={'xl'}
            />
          ))}
        {courses?.length === 0 && (
          <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
            Không có khoá học nào
          </Text>
        )}
        {courses?.map((course: CourseType, _index: number) => (
          <Course
            key={course._id}
            id={course._id}
            title={course.title}
            price={course.price}
            isFree={!course.isPrivate}
            thumbnail={course.thumbnail}
            totalViews={course.usersJoined?.length}
            isJoined={course.usersJoined?.includes(user?._id)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListCourse;
