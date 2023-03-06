import React, { ReactElement } from 'react';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';
import Banner from '@/components/Banner';
import { BannerType } from 'types/banner.type';
import Course from '@/components/Course';
import { Container, Flex } from '@chakra-ui/react';

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
      <Flex alignItems={'center'} gap={5}>
        {[1, 2, 3, 5].map(() => (
          <Course />
        ))}
      </Flex>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
