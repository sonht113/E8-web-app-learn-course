import React, { ReactElement } from 'react';
import DefaultLayout from 'layouts/defaultLayout';
import { Container } from '@chakra-ui/react';

import TitlePage from '@/components/TitlePage';
import ListTeacher from '@/components/ListTeacher';
import { teachers } from '_mock/data';
import IntroLearningPath from '@/components/IntroLearningPath';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'api/user.api';
import { TypeUser, User } from 'types/user.type';

const introLearningPath = {
  title:
    'Bạn là một người mới và đang boăn khoăn không biết lựa chọn khoá học hoặc giảng viên phù hợp với mình?',
  description:
    'Tham khảo lộ trình để tìm ra được cho mình một khoá học hoặc là một giảng viên phù hợp với bản thân',
  thumbnail:
    'https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png',
};

const Teacher = () => {
  const teachersQuery = useQuery({
    queryKey: ['teachers'],
    queryFn: () => getUsers(),
    keepPreviousData: true,
  });

  return (
    <Container className={'teacher'}>
      <TitlePage
        title={'Giảng viên'}
        description={
          'Các giảng viên giỏi ở các lĩnh vực khác nhau sẽ giúp bạn nâng cao vốn kiến thức qua từng khoá học.'
        }
      />
      <ListTeacher
        teachers={teachersQuery.data?.data.filter(
          (teacher: User) =>
            teacher.myCourses.length > 5 &&
            teacher.typeUser === TypeUser.TEACHER
        )}
        title={'Giảng viên nổi bật'}
      />
      <ListTeacher
        teachers={teachersQuery.data?.data.filter(
          (teacher: User) => teacher.typeUser === TypeUser.TEACHER
        )}
        title={'Tất cả các giảng viên'}
      />
      <IntroLearningPath data={introLearningPath} />
    </Container>
  );
};

Teacher.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Teacher;
