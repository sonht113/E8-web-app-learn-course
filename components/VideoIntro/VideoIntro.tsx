import {
  Box,
  AspectRatio,
  VStack,
  Center,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

import { GiLevelEndFlag } from 'react-icons/gi';
import { FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsBatteryFull } from 'react-icons/bs';

type IVideoIntroProps = {
  linkVideo: string;
};

const VideoIntro: React.FC<IVideoIntroProps> = ({ linkVideo }) => {
  console.log(`Video`, linkVideo);
  return (
    <Box>
      <Box
        marginY={4}
        borderRadius={8}
        width={'100%'}
        height={'250px'}
        display={{ base: 'none', md: 'block' }}
      >
        <AspectRatio width="100%" height="100%" ratio={1} borderRadius={8}>
          <iframe
            title="naruto"
            src={linkVideo}
            allowFullScreen
            style={{ borderRadius: 'inherit' }}
          />
        </AspectRatio>
      </Box>
      <VStack border={{ base: '1px', md: '0' }} borderColor={'gray.200'}>
        <Center>
          <Text fontSize={'32px'} color={'#f05123'}>
            Miễn phí
          </Text>
        </Center>
        <Center>
          <Button colorScheme="orange" borderRadius={40} paddingX={12}>
            ĐĂNG KÝ HỌC
          </Button>
        </Center>
        <Box paddingTop={2}>
          <Flex alignItems={'center'} marginY={2}>
            <GiLevelEndFlag size={'14px'} />
            <Text paddingLeft={2}>Trình độ cơ bản</Text>
          </Flex>
          <Flex alignItems={'center'} marginY={2}>
            <FaPhotoVideo size={'14px'} />
            <Text paddingLeft={2}>Tổng số 56 bài học</Text>
          </Flex>
          <Flex alignItems={'center'} marginY={2}>
            <MdOutlineWatchLater size={'14px'} />
            <Text paddingLeft={2}>Thời lượng 10 giờ 19 phút</Text>
          </Flex>
          <Flex alignItems={'center'} marginY={2}>
            <BsBatteryFull size={'14px'} />
            <Text paddingLeft={2}>Học mọi lúc, mọi nơi</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default VideoIntro;
