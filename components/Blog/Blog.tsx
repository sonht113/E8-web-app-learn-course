import { Box, Image, Flex, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import ButtonFC from '../Button';

type IBlogProps = {
  id: string;
  title: string;
  name: string;
  avatar?: string;
  thumbnail: string;
};

const Blog: React.FC<IBlogProps> = ({ id, title, name, avatar, thumbnail }) => {
  return (
    <Link href={`/blog/${id}`}>
      <Box position={'relative'} w={['60vw', '30vw', '30vw', 'full']}>
        <Box
          position={'relative'}
          cursor={'pointer'}
          className="thumbnailCourse"
        >
          <Image
            src={thumbnail}
            alt={'blog'}
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
                title="Xem bài viết"
                color="cyan"
                radius={'full'}
                size={'sm'}
                cursor={'pointer'}
              />
            </Box>
          </Box>
        </Box>
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
        <Box display={['none', 'none', 'block']}>
          <Flex alignItems={'center'} gap={2}>
            <Avatar size={'xs'} name="trong son" src={avatar} />
            <Text fontSize={['sm']} fontWeight={'medium'} color={'#3f3f3f'}>
              {name}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Blog;
