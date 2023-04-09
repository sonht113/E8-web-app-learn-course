import React from 'react';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import ListLearningCourse from '../ListLearningCourse';
import { ChapterType, LectureType } from 'types/chapter.type';

type IListCourseModalProps = {
  onClose: () => void;
  isOpen: boolean;
  chapters: ChapterType[];
  setLecture: (lecture: LectureType) => void;
};
const ListCourseModal: React.FC<IListCourseModalProps> = ({
  onClose,
  isOpen,
  chapters,
  setLecture,
}) => {
  return (
    <Modal
      isCentered={false}
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent bg="white" position="fixed" top="0" left="0" marginTop={0}>
        <ListLearningCourse
          {...{
            isOpen,
            onClose,
            chapters,
            setLecture,
          }}
        />
      </ModalContent>
    </Modal>
  );
};

export default ListCourseModal;
