import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineMenu } from 'react-icons/ai';

type ILearnedCourseFooterProps = {
  toggle: boolean;
  handleToggle: () => void;
  onOpen: () => void;
};

const LearnedCourseFooter: React.FC<ILearnedCourseFooterProps> = ({
  toggle,
  handleToggle,
  onOpen,
}) => {
  return (
    <Flex
      as="footer"
      alignItems="center"
      bg="#f0f0f0"
      px={8}
      py={3}
      height={'50px'}
      position="fixed"
      left="0"
      bottom="0"
      w="100%"
      zIndex={999}
    >
      <Flex width="100%" alignItems="center">
        <Button
          borderRadius="full"
          bg="#fff"
          paddingY="14px"
          paddingX="4px"
          onClick={onOpen}
          display={{ base: 'flex', md: 'none' }}
        >
          <AiOutlineMenu fontSize="20px" />
        </Button>
        <Center width="100%">
          <Flex alignItems="center" cursor="pointer">
            <ChevronLeftIcon boxSize={6} />
            <Text paddingEnd={{ base: 4, md: 8 }}>BÀI TRƯỚC</Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer">
            <Text paddingStart={{ base: 4, md: 8 }}>BÀI TIẾP THEO</Text>
            <ChevronRightIcon boxSize={6} />
          </Flex>
        </Center>
        <Button
          borderRadius="full"
          bg="#fff"
          paddingY="14px"
          paddingX="4px"
          onClick={handleToggle}
          display={{ base: 'none', md: 'flex' }}
        >
          {!toggle ? (
            <AiOutlineArrowRight fontSize="20px" />
          ) : (
            <AiOutlineMenu fontSize="20px" />
          )}
        </Button>
      </Flex>
    </Flex>
  );
};

export default LearnedCourseFooter;
