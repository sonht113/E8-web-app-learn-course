import React, { ReactElement } from 'react';
import DefaultLayout from 'layouts/defaultLayout';
import { Container } from '@chakra-ui/react';

import TitlePage from '@/components/TitlePage';
import ListTeacher from '@/components/ListTeacher';
import { teachers } from '_mock/data';
import IntroLearningPath from '@/components/IntroLearningPath';

const introLearningPath = {
  title:
    'Bạn là một người mới và đang boăn khoăn không biết lựa chọn khoá học hoặc giảng viên phù hợp với mình?',
  description:
    'Tham khảo lộ trình để tìm ra được cho mình một khoá học hoặc là một giảng viên phù hợp với bản thân',
  thumbnail:
    'https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png',
};

const Teacher = () => {
  return (
    <Container className={'teacher'}>
      <TitlePage
        title={'Giảng viên'}
        description={
          'Các giảng viên giỏi ở các lĩnh vực khác nhau sẽ giúp bạn nâng cao vốn kiến thức qua từng khoá học.'
        }
      />
      <ListTeacher teachers={teachers} title={'Giảng viên nổi bật'} />
      <ListTeacher teachers={teachers} title={'Tất cả các giảng viên'} />
      <IntroLearningPath data={introLearningPath} />
    </Container>
  );
};

Teacher.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Teacher;
