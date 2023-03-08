import React, { ReactElement } from 'react';
import { Container } from '@chakra-ui/react';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';
import Banner from '@/components/Banner';
import { BannerType } from 'types/banner.type';
import ListCourse from '@/components/ListCourse';
import { CourseViewHome } from 'types/course.type';
import ListBlog from '@/components/ListBlog';
import { BlogViewHome } from 'types/blog.type';

const coursesPro: CourseViewHome[] = [
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
];

const coursesFree: CourseViewHome[] = [
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
];

const blogs: BlogViewHome[] = [
  {
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
  {
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
  {
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
];

const bannerItems: BannerType[] = [
  {
    id: 1,
    image:
      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'KHOÁ HỌC HTML CSS PRO',
    description:
      'Đây là khoá học đầy đủ và chi tiết nhất mà bạn có thể tìm trên internet!',
    button: 'Tìm hiểu thêm',
    colorFrom: 'rgb(104, 40, 250)',
    colorTo: 'rgb(255, 186, 164)',
  },
  {
    id: 2,
    image:
      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'KHOÁ HỌC HTML CSS PRO',
    description:
      'Đây là khoá học đầy đủ và chi tiết nhất mà bạn có thể tìm trên internet!',
    button: 'Tìm hiểu thêm',
    colorFrom: 'rgb(104, 40, 250)',
    colorTo: 'rgb(255, 186, 164)',
  },
  {
    id: 3,
    image:
      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'KHOÁ HỌC HTML CSS PRO',
    description:
      'Đây là khoá học đầy đủ và chi tiết nhất mà bạn có thể tìm trên internet!',
    button: 'Tìm hiểu thêm',
    colorFrom: 'rgb(104, 40, 250)',
    colorTo: 'rgb(255, 186, 164)',
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <Container className="home">
      <Banner items={bannerItems} />
      <ListCourse isPro={true} title={'Khoá học Pro'} courses={coursesPro} />
      <ListCourse isPro={false} title={'Khoá học Free'} courses={coursesFree} />
      <ListBlog title={'Bài viết nổi bật'} blogs={blogs} />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
