import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillPlayCircle, AiOutlineMinus } from 'react-icons/ai';

const CourseContent = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleShow = () => {
    setIsShowing(!isShowing);
  };
  return (
    <Box paddingY={2}>
      <Flex
        backgroundColor="#f5f5f5"
        paddingX={30}
        paddingY={3}
        borderRadius={7}
        cursor={'pointer'}
        onClick={handleShow}
      >
        <Flex alignItems={'center'}>
          {!isShowing ? (
            <AddIcon boxSize={3} color={'#f05123'} />
          ) : (
            <AiOutlineMinus size={'14px'} color={'#f05123'} />
          )}

          <Text paddingLeft={3}>1. Giới thiệu</Text>
        </Flex>
        <Spacer />
        <Box>3 bài học</Box>
      </Flex>
      {/* Course content detail */}
      {isShowing ? (
        <Box>
          <Flex paddingX={30} paddingY={3} borderRadius={7}>
            <Flex alignItems={'center'}>
              <AiFillPlayCircle size={'14px'} color={'#f05123'} />
              <Text paddingLeft={3}>1. Giới thiệu khóa học</Text>
            </Flex>
            <Spacer />
            <Box>02:03</Box>
          </Flex>
          <Flex paddingX={30} paddingY={3} borderRadius={7}>
            <Flex alignItems={'center'}>
              <AiFillPlayCircle size={'14px'} color={'#f05123'} />
              <Text paddingLeft={3}>1. Giới thiệu khóa học</Text>
            </Flex>
            <Spacer />
            <Box>02:03</Box>
          </Flex>
          <Flex paddingX={30} paddingY={3} borderRadius={7}>
            <Flex alignItems={'center'}>
              <AiFillPlayCircle size={'14px'} color={'#f05123'} />
              <Text paddingLeft={3}>1. Giới thiệu khóa học</Text>
            </Flex>
            <Spacer />
            <Box>02:03</Box>
          </Flex>
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default CourseContent;
