import { AspectRatio, Box, Heading, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { LectureType } from 'types/chapter.type';

type ILearningVideoProps = {
  lecture: LectureType;
};

const LearningVideo: React.FC<ILearningVideoProps> = ({ lecture }) => {
  return (
    <Box overflowY="scroll" height="100vh" className="scroll-custom">
      <Box
        bg="black"
        height={{ base: '40%', sm: '50%', md: '70%' }}
        paddingX={{ base: 5, md: 20 }}
      >
        <AspectRatio maxW="100%" height={{ base: '99%' }} ratio={1}>
          {/* <iframe title="course" src={lecture?.url} allowFullScreen /> */}
          <video controls>
            <source src={lecture.url} type="video" />
          </video>
        </AspectRatio>
      </Box>
      <Box paddingX={{ base: 5, md: 20 }}>
        <Box marginY={{ base: '24px', md: '48px' }}>
          {lecture?.title ? (
            <Heading
              as="h2"
              fontSize="28px"
              fontWeight={600}
              marginBottom="8px"
            >
              {lecture.title}
            </Heading>
          ) : (
            <Skeleton height="30px" width="60%" rounded={'md'} />
          )}
          <Text fontSize="14px">Cập nhật tháng 2 năm 2022</Text>
        </Box>
        <Box>
          <Text fontSize="16px" marginY="16px" color="#292929">
            Tham gia nhóm Học trực tuyến tại E8 trên Facebook để cùng nhau trao
            đổi trong quá trình học tập ❤️
          </Text>
          <Text fontSize="16px" marginY="16px" color="#292929">
            Các bạn subscribe kênh Youtube E8 Official để nhận thông báo khi có
            các bài học mới nhé ❤️
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LearningVideo;
