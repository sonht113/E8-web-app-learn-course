import React, { ReactElement } from 'react';
import { Container } from '@chakra-ui/react';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';
import Banner from '@/components/Banner';
import { CourseType } from 'types/course.type';
import ListCourse from '@/components/ListCourse';
import ListBlog from '@/components/ListBlog';
import ListTeacher from '@/components/ListTeacher';
import { useQuery } from '@tanstack/react-query';
import { getBanners } from 'api/banner.api';
import { getCourses } from 'api/course.api';

import { bannerItems, blogs, teachers } from '_mock/data';

const Home: NextPageWithLayout = () => {
  const queryBanners = useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
    keepPreviousData: true,
  });

  console.log(queryBanners);

  const queryCourses = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
    keepPreviousData: true,
  });

  return (
    <Container className="home">
      <Banner items={bannerItems} />
      <ListCourse
        isPro={true}
        title={'Khoá học Pro'}
        courses={queryCourses.data?.data.filter(
          (course: CourseType) => course.isPrivate
        )}
      />
      <ListCourse
        isPro={false}
        title={'Khoá học Free'}
        courses={queryCourses.data?.data.filter(
          (course: CourseType) => !course.isPrivate
        )}
      />
      <ListBlog title={'Bài viết nổi bật'} blogs={blogs} />
      <ListTeacher title={'Giảng viên nổi bật'} teachers={teachers} />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
