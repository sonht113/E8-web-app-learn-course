import React, { ReactElement, useCallback, useContext, useMemo } from 'react';
import DefaultLayout from 'layouts/defaultLayout';
import { Container } from '@chakra-ui/react';
import TitlePage from '@/components/TitlePage';
import { AuthenContext } from 'context/AuthenContext';
import { useQuery } from '@tanstack/react-query';
import { getUser } from 'api/user.api';
import { MyLearningCourses } from 'types/user.type';
import ListCourse from '@/components/ListCourse';
import { CourseType } from 'types/course.type';

const ContentTitlePage = {
  title: 'Khoá học bạn đã tham gia',
};

const MyCourses = () => {
  const { user } = useContext(AuthenContext);

  const { data, isLoading } = useQuery({
    queryKey: ['my-learning-course', user._id, 'myLearningCourses.idCourse'],
    queryFn: () => getUser(user._id, 'myLearningCourses.idCourse'),
  });

  let myLearningCourses: CourseType[] | undefined;
  const getMyLearningCourses = () => {
    const arr = [];
    data?.data.myLearningCourses.forEach((item: MyLearningCourses) => {
      arr.push(item.idCourse);
    });
    myLearningCourses = arr;
    return myLearningCourses;
  };

  useMemo(() => {
    getMyLearningCourses();
  }, [data]);

  return (
    <Container className="my-courses">
      <TitlePage title={ContentTitlePage.title} />
      <ListCourse courses={myLearningCourses} isPro={true} user={user} />
    </Container>
  );
};

MyCourses.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MyCourses;
