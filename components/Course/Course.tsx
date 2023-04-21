import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { AuthenContext } from 'context/AuthenContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
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
};

const Course: React.FC<ICourseProps> = ({
  id,
  title,
  isFree,
  desc,
  price,
  thumbnail,
  totalViews,
}) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthenContext);

  return (
    <Link
      href={
        !isFree
          ? isAuthenticated
            ? `/payment?type=COURSE_PAYMENT&idCourse=${id}`
            : '/login'
          : `/course/${id}`
      }
    >
      <Box
        position={'relative'}
        className={router.pathname.includes('/profile') && 'Course'}
        w={
          !router.pathname.includes('/profile') && [
            '60vw',
            '30vw',
            '30vw',
            'full',
          ]
        }
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
                  !isFree
                    ? router.pathname.includes('/profile')
                      ? 'Tiếp tục học'
                      : 'Mua khóa học'
                    : router.pathname.includes('/profile')
                    ? 'Tiếp tục học'
                    : 'Xem khoá học'
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
        <Box
          className={router.pathname.includes('/profile') && 'contentCourse'}
        >
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
            <Box display={['none', 'none', 'block']}>
              <Flex alignItems={'center'} gap={2}>
                <HiUserGroup />
                <Text fontSize={['sm']} fontWeight={'medium'} color={'#3f3f3f'}>
                  {totalViews}
                </Text>
              </Flex>
            </Box>
          )}
          {router.pathname.includes('/profile') && (
            <Text fontSize={'sm'}>{desc}</Text>
          )}
        </Box>
      </Box>
    </Link>
  );
};

export default Course;
