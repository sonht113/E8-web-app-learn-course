import React from 'react';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import ListLearningCourse from '../ListLearningCourse';

type IListCourseModalProps = {
  onClose: () => void;
  isOpen: boolean;
};
const ListCourseModal: React.FC<IListCourseModalProps> = ({
  onClose,
  isOpen,
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
        <ListLearningCourse isOpen={isOpen} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default ListCourseModal;
