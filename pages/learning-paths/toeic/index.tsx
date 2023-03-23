import LearningPathDetail from '@/components/LearningPathDetail';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import DefaultLayout from 'layouts/defaultLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types/layout.type';

const LearningPaths: NextPageWithLayout = () => {
  return (
    <Container maxW="100%" paddingX={4}>
      <Box marginBottom={6}>
        <Heading as="h5" size="xl">
          Lộ trình học TOEIC
        </Heading>
        <Text paddingY={4} maxW={{ base: '100%', md: '80%' }}>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với trình độ tiếng anh cao bạn nên tập trung vào lộ
          trình "TOEIC".
        </Text>
      </Box>
      <LearningPathDetail
        titleItem="Research TOEIC"
        description="TOEIC, viết tắt của Test of English for International Communication – Bài kiểm tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc tế về giao tiếp dành cho người đi làm không phải là người sử dụng tiếng Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử dụng tiếng Anh trong môi trường giao tiếp"
        image="https://e4life.vn/wp-content/uploads/2021/05/Tu-hoc-TOEIC-trong-2-thang.png"
      />

      <LearningPathDetail
        titleItem="Research TOEIC"
        description="TOEIC, viết tắt của Test of English for International Communication – Bài kiểm tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc tế về giao tiếp dành cho người đi làm không phải là người sử dụng tiếng Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử dụng tiếng Anh trong môi trường giao tiếp"
        image="https://e4life.vn/wp-content/uploads/2021/05/Tu-hoc-TOEIC-trong-2-thang.png"
      />

      <LearningPathDetail
        titleItem="Research TOEIC"
        description="TOEIC, viết tắt của Test of English for International Communication – Bài kiểm tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc tế về giao tiếp dành cho người đi làm không phải là người sử dụng tiếng Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử dụng tiếng Anh trong môi trường giao tiếp"
        image="https://e4life.vn/wp-content/uploads/2021/05/Tu-hoc-TOEIC-trong-2-thang.png"
      />
    </Container>
  );
};

LearningPaths.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default LearningPaths;
