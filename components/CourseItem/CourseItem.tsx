import React from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';

type ICourseItemProps = {
  isOpen: boolean;
};

const CourseItem: React.FC<ICourseItemProps> = ({ isOpen }) => {
  const [isShowing, setIsShowing] = useState(false);

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
            1. Bắt đầu
          </Text>
          <Text fontSize="12px" fontWeight={400}>
            5/6 | 18:39
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
          <Box
            paddingX="32px"
            width="100%"
            cursor="pointer"
            _hover={{ bg: 'gray.200' }}
          >
            <Text
              fontSize="16px"
              paddingY="4px"
              whiteSpace="normal"
              wordBreak="break-word"
              maxW="100%"
            >
              1. Have a nice day
            </Text>
            <Flex alignItems="center" paddingBottom="4px">
              <AiFillPlayCircle size={'14px'} />
              <Text fontSize="12px" fontWeight={400} paddingStart={2}>
                18:39
              </Text>
            </Flex>
          </Box>
          <Box
            paddingX="32px"
            width="100%"
            cursor="pointer"
            _hover={{ bg: 'gray.200' }}
          >
            <Text
              fontSize="16px"
              paddingY="4px"
              whiteSpace="normal"
              wordBreak="break-word"
              maxW="100%"
            >
              1. Have a nice day
            </Text>
            <Flex alignItems="center" paddingBottom="4px">
              <AiFillPlayCircle size={'14px'} />
              <Text fontSize="12px" fontWeight={400} paddingStart={2}>
                18:39
              </Text>
            </Flex>
          </Box>
          <Box
            paddingX="32px"
            width="100%"
            cursor="pointer"
            _hover={{ bg: 'gray.200' }}
          >
            <Text
              fontSize="16px"
              paddingY="4px"
              whiteSpace="normal"
              wordBreak="break-word"
              maxW="100%"
            >
              1. Have a nice day
            </Text>
            <Flex alignItems="center" paddingBottom="4px">
              <AiFillPlayCircle size={'14px'} />
              <Text fontSize="12px" fontWeight={400} paddingStart={2}>
                18:39
              </Text>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CourseItem;
