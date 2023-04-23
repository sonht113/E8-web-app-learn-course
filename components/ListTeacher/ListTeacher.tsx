import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Grid, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { TeacherViewHome } from 'types/teacher.type';
import { User } from 'types/user.type';
import Teacher from '../Teacher';

type IListTeacherProps = {
  title?: string;
  isSeemore?: boolean;
  teachers: TeacherViewHome[];
};

const ListTeacher: React.FC<IListTeacherProps> = ({
  teachers,
  title,
  isSeemore,
}) => {
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
        </Flex>
        {isSeemore && (
          <Flex
            className="linkSeeMoreBlog"
            alignItems={'center'}
            cursor={'pointer'}
          >
            <Box>
              <Text
                className="textSeeMoreBlog"
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'#09b166'}
              >
                Xem chi tiết
              </Text>
            </Box>
            <ChevronRightIcon className="iconSeeMoreBlog" color={'#09b166'} />
          </Flex>
        )}
      </Box>

      {teachers?.length === 0 && (
        <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
          Không có giảng viên nào
        </Text>
      )}
      <Grid
        overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
        templateColumns={[
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(4, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={[5]}
        pb={5}
      >
        {!teachers &&
          [1, 2, 3, 4, 5].map((_item, index) => (
            <Skeleton
              key={index}
              w={['60vw', '30vw', '30vw', 'full']}
              h={'150px'}
              rounded={'xl'}
            />
          ))}
        {teachers?.map((teacher: User) => (
          <Teacher
            key={teacher._id}
            idUserDetail={teacher._id}
            profilePicture={teacher.avatar}
            fullName={teacher.fullName}
            phone={teacher.phone}
            email={teacher.email}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListTeacher;
