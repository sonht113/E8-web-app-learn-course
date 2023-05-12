import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import ButtonFC from '../Button';

type IClassRoomProps = {
  id?: string;
  thumbnail?: string;
  title: string;
  price: string | number;
  desc?: string;
  teacher?: string;
  totalViews?: number;
  startTime?: string;
  isJoined?: boolean;
  isAuthenticated?: boolean;
};

const ClassRoom: React.FC<IClassRoomProps> = ({
  id,
  thumbnail,
  title,
  price,
  desc,
  teacher,
  totalViews,
  startTime,
  isJoined,
  isAuthenticated,
}) => {
  const router = useRouter();

  const isProfile = useMemo(() => router.pathname.includes('/profile'), []);
  return (
    <Link
      href={
        isJoined
          ? '/chat'
          : !isAuthenticated
          ? '/login'
          : `/payment?type=JOINS_CLASS&&idClass=${id}`
      }
    >
      <Box
        mt={5}
        position={'relative'}
        w={!isProfile && ['60vw', '30vw', '30vw', 'full']}
      >
        <Box
          position={'relative'}
          cursor={'pointer'}
          className="thumbnailClass"
        >
          <Image
            maxW={'full'}
            src={thumbnail}
            alt={'class'}
            objectFit={'cover'}
            rounded={'xl'}
          />
          <Box
            className="detailClass"
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
                title={isJoined ? 'Vào lớp học' : 'Đăng ký'}
                onClick={() =>
                  router.push(
                    isJoined
                      ? '/chat'
                      : !isAuthenticated
                      ? '/login'
                      : `/payment?type=JOINS_CLASS&&idClass=${id}`
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
          <Text fontSize={['sm', 'sm']} fontWeight={'medium'} color={'#3f3f3f'}>
            Giảng viên: {teacher}
          </Text>
          <Text fontSize={['sm', 'sm']} fontWeight={'medium'} color={'#3f3f3f'}>
            Ngày bắt đầu: {startTime}
          </Text>
          <Text fontSize={['sm', 'sm']} fontWeight={'medium'} color={'#3f3f3f'}>
            Giá: {price} vnđ
          </Text>
          <Box>
            <Flex alignItems={'center'} gap={2}>
              <HiUserGroup />
              <Text fontSize={['sm']} fontWeight={'medium'} color={'#3f3f3f'}>
                {totalViews}
              </Text>
            </Flex>
          </Box>
          <Text fontSize={'sm'}>{desc}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ClassRoom;
