import React, { ReactElement } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { NextPageWithLayout } from '../types/layout.type';
import DefaultLayout from 'layouts/defaultLayout';
import ButtonFC from '@/components/Button';
import Search from '@/components/Search';

const Home: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <Text fontSize="6xl">(6xl) In love with React & Next</Text>
      <ButtonFC title="Button" color="red" rightIcon={<AddIcon />} />

      <Button colorScheme="teal" size="sm">
        123
      </Button>
      <Search width="150px" radius="full" />
    </React.Fragment>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
