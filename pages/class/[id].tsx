import DefaultLayout from 'layouts/defaultLayout';
import React, { ReactElement } from 'react';

const Class = () => {
  return <div>Class</div>;
};

Class.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Class;
