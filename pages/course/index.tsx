import { Container } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';

import DefaultLayout from 'layouts/defaultLayout';
import { NextPageWithLayout } from 'types/layout.type';
import ListCourse from '@/components/ListCourse';
import { CourseType } from 'types/course.type';
import { getCourses } from 'api/course.api';
import IntroLearningPath from '@/components/IntroLearningPath';
import TitlePage from '@/components/TitlePage';

const introLearningPath = {
  title: 'Bạn đang tìm kiếm một lộ trình học cho người mới?',
  description:
    'Các khoá học được thiết kế phù hợp cho người mới, lộ trình rõ ràng, nội dung dễ hiểu và thú vị.',
  thumbnail:
    'https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png',
};

const Course: NextPageWithLayout = () => {
  const queryCourses = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
    keepPreviousData: true,
  });

  return (
    <Container className="course">
      <TitlePage
        title={'Khoá học'}
        description={
          'Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu.'
        }
      />
      <ListCourse
        isPro={true}
        title={'Khoá học Pro'}
        courses={queryCourses.data?.data.filter(
          (course: CourseType) => !course.isFree
        )}
      />
      <ListCourse
        isPro={false}
        title={'Khoá học Free'}
        courses={queryCourses.data?.data.filter(
          (course: CourseType) => course.isFree
        )}
      />
      <IntroLearningPath data={introLearningPath} />
    </Container>
  );
};

Course.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Course;
