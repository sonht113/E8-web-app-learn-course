import React, { ReactElement, useCallback, useContext } from 'react';
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

  const queryMyLearningCourses = useQuery({
    queryKey: ['my-learning-course', user._id, 'myLearningCourses.idCourse'],
    queryFn: () => getUser(user._id, 'myLearningCourses.idCourse'),
  });

  const myLearningCourses: CourseType[] = [];
  const getMyLearningCourses = useCallback(() => {
    queryMyLearningCourses.data?.data.myLearningCourses.forEach(
      (item: MyLearningCourses) => {
        myLearningCourses.push(item.idCourse);
      }
    );
  }, [queryMyLearningCourses]);

  getMyLearningCourses();

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
