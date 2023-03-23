import LearningPathsBox from '@/components/LearningPathsBox';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Link,
  Text,
  Image,
} from '@chakra-ui/react';
import DefaultLayout from 'layouts/defaultLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types/layout.type';

const LearningPaths: NextPageWithLayout = () => {
  return (
    <Container paddingX={2} maxW="100%">
      <Box marginBottom={4}>
        <Heading as="h5" size="xl">
          Lộ trình học
        </Heading>
        <Text paddingY={4}>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với trình độ tiếng anh cao bạn nên tập trung vào lộ
          trình "TOEIC" và "IELTS".
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={4}
        width={{ base: '100%', lg: '90%' }}
      >
        <LearningPathsBox
          title="Lộ trình học TOEIC"
          description='Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình
            học. Ví dụ: Để đi làm với trình độ tiếng anh cao bạn nên tập trung
            vào lộ trình "TOEIC" và "IELTS".'
          href="/learning-paths/toeic"
        />
        <LearningPathsBox
          title="Lộ trình học IELTS"
          description='Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình
            học. Ví dụ: Để đi làm với trình độ tiếng anh cao bạn nên tập trung
            vào lộ trình "TOEIC" và "IELTS".'
          href="/learning-paths/ielts"
        />
      </Grid>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={4}
        width={{ base: '100%' }}
      >
        <Box marginY={{ base: 4, md: 48 }}>
          <Heading as="h5" size="md">
            Tham gia cộng đồng học viên E8 trên Facebook
          </Heading>
          <Text paddingY={3}>
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia
            hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
          </Text>
          <Button
            bg="transparent"
            border="2px"
            borderColor="gray.200"
            borderRadius="12px"
            width={{ base: '100%', md: 'auto' }}
          >
            <Link href="#">Tham gia nhóm</Link>
          </Button>
        </Box>
        <Image
          display={{ base: 'none', md: 'block' }}
          objectFit="cover"
          src="/static/images/social.png"
          alt="social"
          marginY={{ base: 4, md: 12 }}
        />
      </Grid>
    </Container>
  );
};

LearningPaths.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default LearningPaths;
