import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import CourseItem from '../CourseItem';

type IListLearningCourseProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const ListLearningCourse: React.FC<IListLearningCourseProps> = ({
  isOpen,
  onClose,
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
        <CourseItem isOpen={isOpen} />
        <CourseItem isOpen={isOpen} />
        <CourseItem isOpen={isOpen} />
        <CourseItem isOpen={isOpen} />
        <CourseItem isOpen={isOpen} />
        <CourseItem isOpen={isOpen} />
        <CourseItem isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default ListLearningCourse;
