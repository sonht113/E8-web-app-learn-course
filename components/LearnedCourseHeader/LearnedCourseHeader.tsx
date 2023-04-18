import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { MdStickyNote2 } from 'react-icons/md';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';

import logo from 'public/static/images/icon.png';

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
            width={40}
            style={{ objectFit: 'cover' }}
            src={logo}
            alt="E8 logo"
          />
        </Link>
        <Text
          fontWeight={700}
          color="#fff"
          maxWidth={{ base: '150px', sm: '100%' }}
          noOfLines={1}
          ms={3}
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
