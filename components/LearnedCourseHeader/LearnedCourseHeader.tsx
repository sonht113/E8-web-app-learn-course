import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { MdStickyNote2 } from 'react-icons/md';
import { Link } from '@chakra-ui/react';

type ILearnedCourseHeaderProps = {
  title: string;
};

const LearnedCourseHeader: React.FC<ILearnedCourseHeaderProps> = ({
  title,
}) => {
  return (
    <Flex
      as="header"
      alignItems="center"
      bg="#29303b"
      px={{ base: 2, md: 6 }}
      py={3}
      height={'50px'}
      position="fixed"
      left="0"
      top="0"
      w="100%"
      zIndex={999}
    >
      <Flex alignItems="center">
        <Link href="/">
          <ChevronLeftIcon boxSize={10} color="#fff" />
        </Link>
        <Link href="/">
          <Image
            rounded={'md'}
            boxSize={'30px'}
            objectFit="cover"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt="E8 logo"
            marginX={4}
            display={{ base: 'none', md: 'block' }}
          />
        </Link>
        <Text
          fontWeight={700}
          color="#fff"
          maxWidth={{ base: '150px', sm: '100%' }}
          noOfLines={1}
        >
          {title}
        </Text>
      </Flex>
      <Flex ml="auto" color="#fff" alignItems="center">
        <Flex alignItems="center" paddingEnd={{ base: 6, md: 10 }}>
          <MdStickyNote2 />
          <Text paddingStart={2}>Ghi chú</Text>
        </Flex>

        <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <AiFillQuestionCircle />
          <Text paddingStart={2}>Hướng dẫn</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LearnedCourseHeader;
