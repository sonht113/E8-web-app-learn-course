import { Box, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import ButtonFC from '../Button/Button';

type ICourseProps = {
  title: string;
  isFree: boolean;
  price?: string | number;
  thumbnail: string;
  totalViews?: string | number;
};

const Course: React.FC<ICourseProps> = ({
  title,
  isFree,
  price,
  thumbnail,
  totalViews,
}) => {
  return (
    <Box position={'relative'} w={['60vw', '30vw', '30vw', 'full']}>
      <Box position={'relative'} cursor={'pointer'} className="thumbnailCourse">
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
          >
            <ButtonFC
              title="Xem khoá học"
              color="cyan"
              radius={'full'}
              size={'sm'}
              cursor={'pointer'}
            />
          </Box>
        </Box>
      </Box>
      {isFree && (
        <Image
          position={'absolute'}
          top={1}
          left={2}
          width={[4, 5]}
          src={'static/images/pro.svg'}
          alt={'course'}
        />
      )}
      <Text
        my={2}
        fontSize={['md', 'lg']}
        fontWeight={'medium'}
        color={'#3e3e3e'}
        whiteSpace={'nowrap'}
        width={'180px'}
        overflow={'hidden'}
        textOverflow={'ellipsis'}
      >
        {title}
      </Text>
      {isFree && (
        <Text fontSize={['sm', 'md']} fontWeight={'medium'} color={'#3f3f3f'}>
          {price}
        </Text>
      )}
      {!isFree && (
        <Box display={['none', 'none', 'block']}>
          <Flex alignItems={'center'} gap={2}>
            <HiUserGroup />
            <Text fontSize={['sm']} fontWeight={'medium'} color={'#3f3f3f'}>
              {totalViews}
            </Text>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Course;
