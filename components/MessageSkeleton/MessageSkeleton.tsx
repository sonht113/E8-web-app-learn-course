import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import React from 'react';

const MessageSkeleton = () => {
  return (
    <React.Fragment>
      <Flex
        mt={5}
        gap={3}
        justifyContent={'flex-start'}
        flexDirection={'row-reverse'}
        alignItems={'center'}
      >
        <SkeletonCircle size="50" />
        <Skeleton height="40px" width={['150px', '250px']} />
      </Flex>
      <Flex
        mt={5}
        gap={3}
        justifyContent={'flex-start'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <SkeletonCircle size="50" />
        <Skeleton height="40px" width={['150px', '250px']} />
      </Flex>
    </React.Fragment>
  );
};

export default MessageSkeleton;
