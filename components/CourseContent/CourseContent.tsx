import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillPlayCircle, AiOutlineMinus } from 'react-icons/ai';
import { ChapterType } from 'types/chapter.type';

type ICourseContentProps = {
  chapter: ChapterType;
};

const CourseContent: React.FC<ICourseContentProps> = ({ chapter }) => {
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

          <Text paddingLeft={3}>
            {chapter?.position}. {chapter?.title}
          </Text>
        </Flex>
        <Spacer />
        <Box>{chapter?.lectures.length} bài học</Box>
      </Flex>

      {isShowing && (
        <Box>
          {chapter?.lectures.map((lecture) => (
            <Flex paddingX={30} paddingY={3} borderRadius={7}>
              <Flex alignItems={'center'}>
                <AiFillPlayCircle size={'14px'} color={'#f05123'} />
                <Text paddingLeft={3}>
                  {lecture.position}. {lecture.title}
                </Text>
              </Flex>
              <Spacer />
              <Box>{lecture.totalTimes}</Box>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CourseContent;
