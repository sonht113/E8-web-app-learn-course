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
          Lộ trình học IELTS
        </Heading>
        <Text paddingY={4}>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với trình độ tiếng anh cao bạn nên tập trung vào lộ
          trình "IELTS".
        </Text>
      </Box>
      <LearningPathDetail
        titleItem="Research IELTS"
        description="IELTS là một hệ thống bài kiểm tra về khả năng sử dụng thành thạo tiếng Anh trải dài qua cả bốn kĩ năng Nghe, Nói, Đọc, Viết. Bài thi được đồng điều hành bởi ba tổ chức ESOL của Đại học Cambridge, Hội đồng Anh và tổ chức giáo dục IDP của Úc và được triển khai từ năm 1989."
        image="https://res.edu.vn/wp-content/uploads/2021/02/ielts-la-gi.jpg"
      />

      <LearningPathDetail
        titleItem="Research IELTS"
        description="IELTS là một hệ thống bài kiểm tra về khả năng sử dụng thành thạo tiếng Anh trải dài qua cả bốn kĩ năng Nghe, Nói, Đọc, Viết. Bài thi được đồng điều hành bởi ba tổ chức ESOL của Đại học Cambridge, Hội đồng Anh và tổ chức giáo dục IDP của Úc và được triển khai từ năm 1989."
        image="https://res.edu.vn/wp-content/uploads/2021/02/ielts-la-gi.jpg"
      />

      <LearningPathDetail
        titleItem="Research IELTS"
        description="IELTS là một hệ thống bài kiểm tra về khả năng sử dụng thành thạo tiếng Anh trải dài qua cả bốn kĩ năng Nghe, Nói, Đọc, Viết. Bài thi được đồng điều hành bởi ba tổ chức ESOL của Đại học Cambridge, Hội đồng Anh và tổ chức giáo dục IDP của Úc và được triển khai từ năm 1989."
        image="https://res.edu.vn/wp-content/uploads/2021/02/ielts-la-gi.jpg"
      />
    </Container>
  );
};

LearningPaths.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default LearningPaths;
