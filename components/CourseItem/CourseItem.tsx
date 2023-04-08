/* eslint-disable no-unused-vars */

import React from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';
import { ChapterType, LectureType } from 'types/chapter.type';

type ICourseItemProps = {
  isOpen: boolean;
  chapter: ChapterType;
  setLecture: (lecture: LectureType) => void;
};

const CourseItem: React.FC<ICourseItemProps> = ({
  isOpen,
  chapter,
  setLecture,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  const getLecture = (lecture: LectureType) => {
    setLecture(lecture);
  };

  const handleShow = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={isOpen ? '100%' : '400px'}
        paddingX="20px"
        paddingY="8px"
        bg="#f7f8fa"
        borderBottomWidth="1px"
        borderColor="gray.200"
        cursor="pointer"
        _hover={{ bg: 'gray.200' }}
        onClick={handleShow}
      >
        <Box>
          <Text fontSize="16px" fontWeight={600}>
            {chapter?.position}. {chapter?.title}
          </Text>
          <Text fontSize="12px" fontWeight={400}>
            {chapter?.lectures?.length} Bài học
          </Text>
        </Box>
        {!isShowing ? (
          <ChevronDownIcon boxSize={8} />
        ) : (
          <ChevronUpIcon boxSize={8} />
        )}
      </Flex>
      {isShowing && (
        <Box>
          {chapter?.lectures?.map((lecture) => (
            <Box
              key={lecture?._id}
              paddingX="32px"
              width="100%"
              cursor="pointer"
              _hover={{ bg: 'gray.200' }}
              onClick={() => getLecture(lecture)}
            >
              <Text
                fontSize="16px"
                paddingY="4px"
                whiteSpace="normal"
                wordBreak="break-word"
                maxW="100%"
              >
                {lecture?.position}. {lecture?.title}
              </Text>
              <Flex alignItems="center" paddingBottom="4px">
                <AiFillPlayCircle size={'14px'} />
                <Text fontSize="12px" fontWeight={400} paddingStart={2}>
                  {lecture?.totalTimes}
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default CourseItem;
