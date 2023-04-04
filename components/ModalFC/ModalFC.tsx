import React, { ReactNode } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

type IModalFCProps = {
  title: string;
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  children: ReactNode;
};

const ModalFC: React.FC<IModalFCProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="red" size={'sm'} mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit} colorScheme={'green'} size={'sm'}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalFC;
