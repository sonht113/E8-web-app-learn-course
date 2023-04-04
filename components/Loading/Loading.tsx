import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      zIndex={999999999}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      w={'full'}
      h={'100vh'}
      bg={'gray.300/0.3'}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.400"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
