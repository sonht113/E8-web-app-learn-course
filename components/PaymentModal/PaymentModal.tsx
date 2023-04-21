import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import BankInfor from './BankInfor';
import FormInforUser from './FormInforUser';

type IPaymentModalProps = {
  title: string;
  price: number;
  onClose: () => void;
  isOpen: boolean;
};
const PaymentModal: React.FC<IPaymentModalProps> = ({
  title,
  price,
  onClose,
  isOpen,
}) => {
  return (
    <Modal
      isCentered={false}
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="6xl"
    >
      <ModalOverlay />
      <ModalContent
        position="fixed"
        top="0"
        marginTop={0}
        width="100%"
        bgColor="gray.800"
      >
        <ModalCloseButton color="white" ps={6} />
        <ModalBody>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab color="white">Thông tin chuyển khoản</Tab>
              <Tab color="white">Nhập thông tin của bạn</Tab>
            </TabList>
            <TabPanels>
              <TabPanel color="white">
                <BankInfor {...{ title, price }} />
              </TabPanel>
              <TabPanel color="white">
                <FormInforUser />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
