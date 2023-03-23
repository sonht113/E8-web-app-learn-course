import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';
import React from 'react';

type ILearningPathsBoxProps = {
  title: string;
  description: string;
  href: string;
};

const LearningPathsBox: React.FC<ILearningPathsBoxProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <Box
      padding={5}
      border="2px"
      borderColor="gray.200"
      borderRadius="12px"
      marginY={2}
    >
      <Heading as="h5" size="md">
        {title}
      </Heading>
      <Text paddingY={3}>{description}</Text>
      <Link href={href} _hover={{ textDecoration: 'none' }}>
        <Button
          colorScheme="whatsapp"
          width={{ base: '100%', md: '40%' }}
          borderRadius="24px"
        >
          Xem chi tiết
        </Button>
      </Link>
    </Box>
  );
};

export default LearningPathsBox;
