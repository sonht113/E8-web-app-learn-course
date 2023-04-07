import Image from 'next/image';
import {
  Avatar,
  Flex,
  Box,
  Grid,
  Text,
  ListItem,
  List,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import ProfileLayout from 'layouts/profileLayout';
import CoverImage from '../../public/static/images/cover-image.jpg';
import React, { ReactElement, useState } from 'react';
import { courses } from '_mock/data';
import Course from '@/components/Course';
import { CourseType } from 'types/course.type';

const Profile = () => {
  const [isTeacher] = useState<boolean>(true);

  return (
    <React.Fragment>
      <Box position={'relative'} mb={'100px'}>
        <Image
          className="coverImageProfile"
          src={CoverImage}
          alt={'cover-image'}
        />
        <Box
          className="avatarProfile"
          position={'absolute'}
          bottom={['-40%', '-25%']}
        >
          <Avatar
            p={2}
            bg={'white'}
            size={['xl', '2xl']}
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
          <Text fontSize={'2xl'} fontWeight={'bold'} pb={[0, 7]} ml={[0, 5]}>
            Hồ Trọng Sơn {isTeacher && '(Teacher)'}
          </Text>
        </Box>
      </Box>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1,1fr)',
          'repeat(2, 1fr)',
        ]}
        gap={6}
        px={3}
      >
        <Box>
          <Box
            border={'1px'}
            mb={3}
            borderColor={'gray.300'}
            borderRadius={'md'}
            p={3}
          >
            <Text fontSize={['md', 'lg']} fontWeight={'bold'}>
              Giới thiệu
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </Box>
          {isTeacher && (
            <Box
              border={'1px'}
              borderColor={'gray.300'}
              borderRadius={'md'}
              p={3}
            >
              <Text fontSize={['md', 'lg']} fontWeight={'bold'}>
                Khoá học pro
              </Text>
              <Flex flexDirection={'column'} gap={5}>
                {courses.map((course: CourseType) => (
                  <Course
                    id={course._id}
                    isFree={true}
                    thumbnail={course.thumbnail}
                    price={course.price}
                    title={course.title}
                    desc={course.desc}
                  />
                ))}
              </Flex>
            </Box>
          )}
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={3}>
          <Box
            border={'1px'}
            borderColor={'gray.300'}
            borderRadius={'md'}
            p={3}
          >
            <Text fontSize={['md', 'lg']} mb={5} fontWeight={'bold'}>
              {isTeacher ? 'Lớp học online' : 'Các khoá học đã tham gia'}
            </Text>
            <Flex flexDirection={'column'} gap={5}>
              {courses.map((course: CourseType) => (
                <Course
                  id={course._id}
                  thumbnail={course.thumbnail}
                  title={course.title}
                  desc={course.desc}
                />
              ))}
            </Flex>
          </Box>
          {isTeacher && (
            <>
              <Box
                border={'1px'}
                borderColor={'gray.300'}
                borderRadius={'md'}
                p={3}
              >
                <Text fontSize={['md', 'lg']} fontWeight={'bold'}>
                  Khoá học free
                </Text>
                <Flex flexDirection={'column'} gap={5}>
                  {courses.map((course: CourseType) => (
                    <Course
                      id={course._id}
                      isFree={false}
                      totalViews={course.totalViews}
                      thumbnail={course.thumbnail}
                      title={course.title}
                      desc={course.desc}
                    />
                  ))}
                </Flex>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </React.Fragment>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
