import React, { ReactElement } from 'react';
import { Container } from '@chakra-ui/react';
import TitlePage from '@/components/TitlePage';
import DefaultLayout from 'layouts/defaultLayout';

const ContentTitlePage = {
  title: 'Bài viết nổi bật',
  description:
    'Tổng hợp các bài viết chia sẻ kinh nghiệm học tiếng anh của các giảng viên và học viên.',
};

const Blog = () => {
  return (
    <Container className="blog">
      <TitlePage
        title={ContentTitlePage.title}
        description={ContentTitlePage.description}
      />
    </Container>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Blog;
