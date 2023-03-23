import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import TruncatedText from '../TruncatedText';

type ILearningPathDetailProps = {
  titleItem: string;
  description: string;
  image: string;
};

const LearningPathDetail: React.FC<ILearningPathDetailProps> = ({
  titleItem,
  description,
  image,
}) => {
  return (
    <Container maxW="100%">
      <Box maxW={{ base: '100%', md: '80%' }} marginY={8}>
        <Heading as="h4" size="md">
          1. {titleItem}
        </Heading>
        <Text marginY={4}>{description}</Text>
        <Box
          padding={6}
          border="2px"
          borderColor="gray.200"
          borderRadius="12px"
        >
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
            gap={6}
            width={{ base: '100%', md: '100%' }}
            margin="0 auto"
          >
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Box
                width={{ base: '100%', md: '230px' }}
                height={{ base: '100%', md: '150px' }}
              >
                <Image
                  src={image}
                  alt="Image"
                  width="100%"
                  height="100%"
                  borderRadius="12px"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Box>
                <Text fontWeight="bold" fontSize="20px">
                  {titleItem}
                </Text>
                <TruncatedText text={description} maxLength={120} />
              </Box>
              <Button
                marginTop={2}
                colorScheme="whatsapp"
                width={{ base: '100%', md: '125px' }}
                borderRadius="24px"
              >
                Xem khoa hoc
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LearningPathDetail;
