import Course from '@/components/Course';
import SearchFC from '@/components/Search';
import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { searchCourse } from 'api/course.api';
import { AuthenContext } from 'context/AuthenContext';
import useDebounce from 'hook/useDebounce';
import React, { useContext, useState } from 'react';
import { CourseType } from 'types/course.type';

const Search = () => {
  const [valueSearch, setValueSearch] = useState<string>('');

  const { user } = useContext(AuthenContext);
  const debounceValue = useDebounce(valueSearch, 1000);

  const { data, isLoading } = useQuery({
    queryKey: ['search', debounceValue],
    queryFn: () => searchCourse(debounceValue),
  });

  return (
    <Box pt={'84px'} px={5}>
      <SearchFC
        radius={'full'}
        width={['full']}
        placeholder="Tìm kiếm khoá học"
        value={valueSearch}
        setValue={setValueSearch}
      />
      <Box
        className="search"
        mt={5}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        gap={10}
        pb={10}
      >
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {!isLoading && data?.data?.totalResults === 0 && (
          <Center>
            <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
              Không tìm thấy kết quả
            </Text>
          </Center>
        )}
        {!isLoading && data?.data?.totalResults !== 0 && (
          <>
            {!valueSearch ? (
              <Text
                fontSize={'lg'}
                fontWeight={'medium'}
                textTransform={'uppercase'}
              >
                Tất cả khoá học:
              </Text>
            ) : (
              <Text
                fontSize={'lg'}
                fontWeight={'medium'}
                textTransform={'uppercase'}
              >
                Kết quả:
              </Text>
            )}
            {data?.data?.results.map((course: CourseType) => (
              <Course
                id={course?._id}
                title={course?.title}
                isFree={!course?.isPrivate}
                thumbnail={course?.thumbnail}
                totalViews={course?.totalViews}
                price={course?.price}
                isJoined={course?.usersJoined?.includes(user?._id)}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Search;
