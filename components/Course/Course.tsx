import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Pro from '../../public/images/pro.svg';

const Course = () => {
  return (
    <Box position={'relative'}>
      <Box
        width={'100%'}
        display={'block'}
        backgroundImage="url('https://files.fullstack.edu.vn/f8-prod/courses/7.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={'cover'}
        pt={'56.25%'}
        rounded={'2xl'}
      ></Box>
      <Text>Hello</Text>
    </Box>
  );
};

export default Course;
