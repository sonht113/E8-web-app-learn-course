import React, { ReactElement, useContext } from 'react';
import { Container } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';
import Banner from '@/components/Banner';
import { CourseType } from 'types/course.type';
import ListCourse from '@/components/ListCourse';
import ListBlog from '@/components/ListBlog';
import ListTeacher from '@/components/ListTeacher';
import { getBanners } from 'api/banner.api';
import { getCourses } from 'api/course.api';

import { blogs } from '_mock/data';
import { getUsers } from 'api/user.api';
import { TypeUser, User } from 'types/user.type';
import { AuthenContext } from 'context/AuthenContext';
import ListClassRoomOnline from '@/components/ListClassRoomOnline';
import { getClassesApi } from 'api/class.api';

const Home: NextPageWithLayout = () => {
  const { user } = useContext(AuthenContext);

  const queryClassOnline = useQuery({
    queryKey: ['class-online'],
    queryFn: () => getClassesApi(),
    keepPreviousData: true,
    cacheTime: 10 * 1000,
    staleTime: 10 * 1000,
  });

  const queryBanners = useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
    keepPreviousData: true,
    cacheTime: 10 * 1000,
    staleTime: 100 * 1000,
  });

  const queryCourses = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
    keepPreviousData: true,
    cacheTime: 10 * 1000,
    staleTime: 5 * 1000,
  });

  const queryTeachers = useQuery({
    queryKey: ['teachers'],
    queryFn: () => getUsers(),
    keepPreviousData: true,
    cacheTime: 10 * 1000,
    staleTime: 5 * 1000,
  });

  return (
    <Container className="home">
      <Banner banners={queryBanners.data?.data} />
      <ListClassRoomOnline
        title={'Lớp học online'}
        classes={queryClassOnline?.data?.data?.results}
      />
      <ListCourse
        isPro={true}
        title={'Khoá học Pro'}
        courses={queryCourses.data?.data.filter(
          (course: CourseType) => course.isPrivate
        )}
        user={user}
      />
      <ListCourse
        isPro={false}
        title={'Khoá học Free'}
        courses={queryCourses.data?.data.filter(
          (course: CourseType) => !course.isPrivate
        )}
        user={user}
      />
      <ListBlog title={'Bài viết nổi bật'} blogs={blogs} />
      <ListTeacher
        title={'Giảng viên nổi bật'}
        teachers={queryTeachers.data?.data.filter(
          (teacher: User) =>
            teacher.myCourses.length > 5 &&
            teacher.typeUser === TypeUser.TEACHER
        )}
      />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
