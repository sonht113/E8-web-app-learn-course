import React, { ReactElement } from 'react';
import { Container } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';
import Banner from '@/components/Banner';
import { BannerType } from 'types/banner.type';
import ListCourse from '@/components/ListCourse';
import { CourseViewHome } from 'types/course.type';
import ListBlog from '@/components/ListBlog';
import { BlogViewHome } from 'types/blog.type';
import ListTeacher from '@/components/ListTeacher';
import { TeacherViewHome } from 'types/teacher.type';

export const coursesPro: CourseViewHome[] = [
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
];

export const coursesFree: CourseViewHome[] = [
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
];

const blogs: BlogViewHome[] = [
  {
    id: uuidv4(),
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
  {
    id: uuidv4(),
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
  {
    id: uuidv4(),
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
];

const teachers: TeacherViewHome[] = [
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
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
      <ListTeacher teachers={teachers} />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
