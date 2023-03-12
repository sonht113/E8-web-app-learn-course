import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type ITitlePageProps = {
  title: string;
  description?: string;
};

const TitlePage: React.FC<ITitlePageProps> = ({ title, description }) => {
  return (
    <Box w={['full', 'full', '95%']} mx={'auto'}>
      <Text fontSize={'3xl'} fontWeight={'bold'} mb={3}>
        {title}
      </Text>
      <Text fontWeight={'medium'} fontSize={'sm'}>
        {description}
      </Text>
    </Box>
  );
};

export default TitlePage;
