import React, { ReactElement } from 'react';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';

const Home: NextPageWithLayout = () => {
  return <React.Fragment></React.Fragment>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
