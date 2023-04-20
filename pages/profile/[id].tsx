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
  Center,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import ProfileLayout from 'layouts/profileLayout';
import CoverImage from '../../public/static/images/cover-image.jpg';
import React, { ReactElement, useContext, useMemo } from 'react';
import Course from '@/components/Course';
import { CourseType } from 'types/course.type';
import { TypeUser } from 'types/user.type';
import { ProfileContext } from 'context/ProfileContext';

const Profile = () => {
  const { user } = useContext(ProfileContext);
  const isTeacher = useMemo(() => user?.typeUser === TypeUser.TEACHER, [user]);

  const proMyCourses = useMemo(
    () => user?.myCourses.filter((course: CourseType) => course.isPrivate),
    [user]
  );

  const freeMyCourses = useMemo(
    () => user?.myCourses.filter((course: CourseType) => !course.isPrivate),
    [user]
  );

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
            name={user?.fullName
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'D')}
            src={user?.avatar}
          />
          <Text fontSize={'2xl'} fontWeight={'bold'} pb={[0, 7]} ml={[0, 5]}>
            {user?.fullName} {isTeacher && '(Teacher)'}
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
                {user?.email}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {user?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {user?.gender}
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {user?.street}
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
              <Text fontSize={['md', 'lg']} fontWeight={'bold'} mb={5}>
                Khoá học pro
              </Text>
              {proMyCourses.length === 0 && <EmptyCourse />}
              <Flex flexDirection={'column'} gap={5}>
                {proMyCourses.length !== 0 &&
                  proMyCourses.map((course: CourseType) => (
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
            {user?.myLearningCourses.length === 0 && <EmptyCourse />}
            <Flex flexDirection={'column'} gap={5}>
              {user?.myLearningCourses.length !== 0 &&
                user?.myLearningCourses.map((course: CourseType) => (
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
                <Text fontSize={['md', 'lg']} fontWeight={'bold'} mb={5}>
                  Khoá học free
                </Text>
                {freeMyCourses.length === 0 && <EmptyCourse />}
                <Flex flexDirection={'column'} gap={5}>
                  {freeMyCourses.length !== 0 &&
                    freeMyCourses.map((course: CourseType) => (
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

const EmptyCourse = () => {
  return (
    <Center>
      <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
        Không có khoá học nào ở đây
      </Text>
    </Center>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
