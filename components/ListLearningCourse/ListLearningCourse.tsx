import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { ChapterType, LectureType } from 'types/chapter.type';
import CourseItem from '../CourseItem';

type IListLearningCourseProps = {
  isOpen?: boolean;
  onClose?: () => void;
  chapters: ChapterType[];
  setLecture: (lecture: LectureType) => void;
};

const ListLearningCourse: React.FC<IListLearningCourseProps> = ({
  isOpen,
  onClose,
  chapters,
  setLecture,
}) => {
  return (
    <Box
      height={isOpen ? '100vh' : '80vh'}
      width="auto"
      position={isOpen ? 'relative' : 'fixed'}
      paddingBottom={8}
      bg="white"
    >
      <Flex justifyContent={'center'} alignItems={'center'} paddingX={4}>
        <Text fontSize="16px" fontWeight={600} paddingX="16px" paddingY="12px">
          Nội dung khóa học
        </Text>
        <Spacer />
        <Button bg="transparent" onClick={onClose} paddingEnd={4}>
          <CloseIcon />
        </Button>
      </Flex>
      <Box height="100%" overflowY="scroll" className="scroll-custom">
        {chapters?.map((chapter) => (
          <CourseItem key={chapter?._id} {...{ isOpen, chapter, setLecture }} />
        ))}
      </Box>
    </Box>
  );
};

export default ListLearningCourse;
