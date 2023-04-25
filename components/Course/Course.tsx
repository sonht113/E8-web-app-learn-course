import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { AuthenContext } from 'context/AuthenContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import ButtonFC from '../Button/Button';

type ICourseProps = {
  id: string;
  title: string;
  isFree?: boolean;
  price?: string | number;
  desc?: string | number;
  thumbnail: string;
  totalViews?: string | number;
  isJoined?: boolean;
};

const Course: React.FC<ICourseProps> = ({
  id,
  title,
  isFree,
  desc,
  price,
  thumbnail,
  totalViews,
  isJoined,
}) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthenContext);

  const isProfile = useMemo(() => router.pathname.includes('/profile'), []);
  const isMyCourse = useMemo(() => router.pathname.includes('/my-courses'), []);

  return (
    <Link
      href={
        isFree
          ? `/course/${id}`
          : !isAuthenticated
          ? '/login'
          : isJoined || isProfile || isMyCourse
          ? `/learning/${id}`
          : `/payment?type=COURSE_PAYMENT&idCourse=${id}`
      }
    >
      <Box
        position={'relative'}
        className={isProfile && 'Course'}
        w={!isProfile && ['60vw', '30vw', '30vw', 'full']}
      >
        <Box
          position={'relative'}
          cursor={'pointer'}
          className="thumbnailCourse"
        >
          <Image
            src={thumbnail}
            alt={'course'}
            objectFit={'cover'}
            rounded={'xl'}
          />
          <Box
            className="detailCourse"
            width={'100%'}
            height={'100%'}
            position={'absolute'}
            top={0}
            left={0}
            bg={'rgba(75, 75, 75, 0.5)'}
            zIndex={4}
            rounded={'xl'}
          >
            <Box
              height={'100%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              mx={'auto'}
              width={['70%', '70%', '70%', '50%']}
            >
              <ButtonFC
                title={
                  isFree
                    ? 'Tham gia khoá học'
                    : !isAuthenticated
                    ? 'Mua khoá học'
                    : isJoined || isProfile || isMyCourse
                    ? 'Tiếp tục học'
                    : 'Mua khoá học'
                }
                onClick={() =>
                  router.push(
                    isFree
                      ? `/course/${id}`
                      : !isAuthenticated
                      ? '/login'
                      : isJoined || isProfile || isMyCourse
                      ? `/learning/${id}`
                      : `/payment?type=COURSE_PAYMENT&idCourse=${id}`
                  )
                }
                color="cyan"
                radius={'full'}
                size={'xs'}
                cursor={'pointer'}
              />
            </Box>
          </Box>
        </Box>
        {!isFree && (
          <Image
            position={'absolute'}
            top={1}
            left={2}
            width={[4, 5]}
            src={'/static/images/pro.svg'}
            alt={'course'}
          />
        )}
        <Box className={isProfile && 'contentCourse'}>
          <Text
            my={2}
            fontSize={['md', 'md', 'md']}
            fontWeight={'medium'}
            color={'#3e3e3e'}
            whiteSpace={'nowrap'}
            width={'180px'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
          >
            {title}
          </Text>
          {!isFree && (
            <Text
              fontSize={['sm', 'sm']}
              fontWeight={'medium'}
              color={'#3f3f3f'}
            >
              {price} vnđ
            </Text>
          )}
          {isFree && (
            <Box>
              <Flex alignItems={'center'} gap={2}>
                <HiUserGroup />
                <Text fontSize={['sm']} fontWeight={'medium'} color={'#3f3f3f'}>
                  {totalViews}
                </Text>
              </Flex>
            </Box>
          )}
          {isProfile && <Text fontSize={'sm'}>{desc}</Text>}
        </Box>
      </Box>
    </Link>
  );
};

export default Course;
