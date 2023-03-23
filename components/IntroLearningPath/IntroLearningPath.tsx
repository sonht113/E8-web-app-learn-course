import { Box, Center, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type IIntroLearningPath = {
  data: {
    title: string;
    description: string;
    thumbnail: string;
  };
};

const IntroLearningPath: React.FC<IIntroLearningPath> = ({ data }) => {
  return (
    <Box
      w={'95%'}
      mx={'auto'}
      my={10}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={5}
    >
      <Flex flexDirection={'column'} justifyContent={'flex-start'} gap={8}>
        <Text fontSize={'2xl'} fontWeight={'bold'}>
          {data.title}
        </Text>
        <Text fontSize={'sm'} fontWeight={'medium'}>
          {data.description}
        </Text>
        <Link href={'/learning-paths'}>
          <Center
            border={'2px'}
            borderColor={'black'}
            rounded={'full'}
            py={2}
            fontWeight={'medium'}
            fontSize={['sm', 'sm', 'sm', 'md']}
            cursor={'pointer'}
            w={['full', '200px']}
            _hover={{ bg: 'black', color: 'white', transition: 'linear 0.2s' }}
          >
            Xem lộ trình
          </Center>
        </Link>
      </Flex>
      <Box w={'40%'} display={['none', 'none', 'block']}>
        <Image src={data.thumbnail} objectFit={'cover'} />
      </Box>
    </Box>
  );
};

export default IntroLearningPath;
