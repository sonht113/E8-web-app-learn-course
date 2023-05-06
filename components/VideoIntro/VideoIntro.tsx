import {
  Box,
  AspectRatio,
  VStack,
  Center,
  Button,
  Text,
  Flex,
  Skeleton,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';

import { GiLevelEndFlag } from 'react-icons/gi';
import { FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsBatteryFull } from 'react-icons/bs';
import { ChapterType } from 'types/chapter.type';
import { CourseType } from 'types/course.type';

type IVideoIntroProps = {
  chapters: ChapterType[];
  courseData: CourseType;
  click: () => void;
  isJoined?: boolean;
};

const VideoIntro: React.FC<IVideoIntroProps> = ({
  chapters,
  courseData,
  click,
  isJoined,
}) => {
  const chapter = chapters?.map((chapter) => chapter.lectures);
  const lecture = chapter?.map((lecture) => lecture?.[0]);
  const urlVideo = lecture && lecture[0]?.url;

  return (
    <Box>
      <Box
        marginY={4}
        borderRadius={8}
        width={'100%'}
        height={'250px'}
        display={{ base: 'none', md: 'block' }}
      >
        {urlVideo ? (
          <AspectRatio width="100%" height="100%" ratio={1} borderRadius={8}>
            <video controls>
              <source src={urlVideo} type="video"></source>
            </video>
          </AspectRatio>
        ) : (
          <Skeleton height="250px" rounded={'xl'} />
        )}
      </Box>
      <VStack border={{ base: '1px', md: '0' }} borderColor={'gray.200'}>
        <Center>
          <Text fontSize={'32px'} color={'#1a9405'}>
            Miễn phí
          </Text>
        </Center>
        <Center>
          <Button
            onClick={click}
            colorScheme="green"
            borderRadius={40}
            paddingX={12}
          >
            {!courseData ? (
              <Spinner fontSize={'sm'} />
            ) : isJoined ? (
              'TIẾP TỤC HỌC'
            ) : (
              'ĐĂNG KÝ HỌC'
            )}
          </Button>
        </Center>
        <Box paddingTop={2}>
          <Flex alignItems={'center'} marginY={2}>
            <GiLevelEndFlag size={'14px'} />
            <Text paddingLeft={2}>Trình độ cơ bản</Text>
          </Flex>
          <Flex alignItems={'center'} marginY={2}>
            <FaPhotoVideo size={'14px'} />
            <Text paddingLeft={2}>
              Tổng số {courseData?.totalLectures} bài học
            </Text>
          </Flex>
          <Flex alignItems={'center'} marginY={2}>
            <MdOutlineWatchLater size={'14px'} />
            <Text paddingLeft={2}>Thời lượng {courseData?.totalTime} giờ</Text>
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
