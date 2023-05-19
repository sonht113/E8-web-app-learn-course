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
  SkeletonCircle,
  Skeleton,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import ProfileLayout from 'layouts/profileLayout';
import CoverImage from '../../public/static/images/cover-image.jpg';
import React, { ReactElement, useContext, useMemo } from 'react';
import Course from '@/components/Course';
import { CourseType } from 'types/course.type';
import { MyLearningCourses, TypeUser } from 'types/user.type';
import { ProfileContext } from 'context/ProfileContext';
import ListSkeleton from '@/components/ListSkeleton';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { Class } from 'types/class.type';
import ClassRoom from '@/components/ClassRoom';
import { AuthenContext } from 'context/AuthenContext';
import { getTime } from 'utils/getTime';

type IListCourseProfileProps = {
  classes?: Class[];
  myLearningCourses?: MyLearningCourses[];
  myLearningClasses?: Class[];
  courses?: CourseType[];
  title: string;
  isAuthenticated?: boolean;
};

type IEmptyCourseProps = {
  content: string;
};

const Profile = () => {
  const { user } = useContext(ProfileContext);
  const { isAuthenticated } = useContext(AuthenContext);
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
        {!user && (
          <Box
            className="avatarProfile"
            position={'absolute'}
            bottom={['-50%', '-25%']}
          >
            <SkeletonCircle size={['100', '140']} />
            <Skeleton height="30px" width={'150px'} mb={5} ml={[0, 5]} />
          </Box>
        )}
        {user && (
          <Box
            className="avatarProfile"
            position={'absolute'}
            bottom={['-40%', '-25%']}
          >
            <Avatar
              p={2}
              bg={'white'}
              size={['xl', '2xl']}
              name={user.fullName
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D')}
              src={user?.avatar}
            />
            <Text
              fontSize={'2xl'}
              textAlign={'center'}
              fontWeight={'bold'}
              pb={[0, 7]}
              ml={[0, 5]}
            >
              {user.fullName} {isTeacher && '(Teacher)'}
            </Text>
          </Box>
        )}
      </Box>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
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
            {!user && <ListSkeleton />}
            {user && (
              <List spacing={3}>
                <ListItem>
                  <ListIcon
                    as={user.email ? MdCheckCircle : WarningTwoIcon}
                    color={user.email ? 'green.500' : 'yellow.500'}
                  />
                  <Text
                    fontSize={'sm'}
                    fontWeight={'medium'}
                    color={'gray.600'}
                    display={'inline'}
                  >
                    {user.email || 'Trống'}
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={user.phone ? MdCheckCircle : WarningTwoIcon}
                    color={user.phone ? 'green.500' : 'yellow.500'}
                  />
                  <Text
                    fontSize={'sm'}
                    fontWeight={'medium'}
                    color={'gray.600'}
                    display={'inline'}
                  >
                    {user.phone || 'Trống'}
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={user.gender ? MdCheckCircle : WarningTwoIcon}
                    color={user.gender ? 'green.500' : 'yellow.500'}
                  />
                  <Text
                    fontSize={'sm'}
                    fontWeight={'medium'}
                    color={'gray.600'}
                    display={'inline'}
                  >
                    {user.gender || 'Trống'}
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={user.street ? MdCheckCircle : WarningTwoIcon}
                    color={user.street ? 'green.500' : 'yellow.500'}
                  />
                  <Text
                    fontSize={'sm'}
                    fontWeight={'medium'}
                    color={'gray.600'}
                    display={'inline'}
                  >
                    {user.street || 'Trống'}
                  </Text>
                </ListItem>
              </List>
            )}
          </Box>
          {!user && (
            <Box display={'flex'} flexDirection={'column'} gap={3}>
              <Skeleton height={'50px'} />
              <Skeleton height={'50px'} />
              <Skeleton height={'50px'} />
            </Box>
          )}
          {isTeacher && (
            <Box display={'flex'} flexDirection={'column'} gap={3}>
              <ListCourseProfile
                title="Lớp học online của bạn"
                isAuthenticated={isAuthenticated}
                classes={user?.myClassRooms}
              />
              <ListCourseProfile
                title="Khoá học pro của bạn"
                courses={proMyCourses}
              />
              <ListCourseProfile
                title="Khoá học miễn phí của bạn"
                courses={freeMyCourses}
              />
            </Box>
          )}
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={3}>
          {!user ? (
            <>
              <Skeleton height={'100px'} />
              <Skeleton height={'100px'} />
            </>
          ) : (
            <>
              <ListCourseProfile
                title="Lớp học online bạn đã tham gia"
                myLearningClasses={user?.myLearningClassRooms}
                isAuthenticated={isAuthenticated}
              />
              <ListCourseProfile
                title="Khoá học bạn đã tham gia"
                myLearningCourses={user?.myLearningCourses}
              />
            </>
          )}
        </Box>
      </Grid>
    </React.Fragment>
  );
};

const EmptyCourse: React.FC<IEmptyCourseProps> = ({ content }) => {
  return (
    <Center>
      <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
        {content}
      </Text>
    </Center>
  );
};

const ListCourseProfile: React.FC<IListCourseProfileProps> = ({
  courses,
  myLearningCourses,
  classes,
  myLearningClasses,
  title,
  isAuthenticated,
}) => {
  return (
    <Box border={'1px'} borderColor={'gray.300'} borderRadius={'md'} p={3}>
      <Text fontSize={['md', 'lg']} mb={5} fontWeight={'bold'}>
        {title}
      </Text>
      {myLearningCourses && myLearningCourses.length === 0 && (
        <EmptyCourse content="Bạn chưa tham gia khoá học nào ở đây" />
      )}
      {myLearningClasses && myLearningClasses.length === 0 && (
        <EmptyCourse content="Bạn chưa tham gia lớp học online nào ở đây" />
      )}
      {courses && courses.length === 0 && (
        <EmptyCourse content="Không có khoá học nào ở đây" />
      )}
      {classes && classes.length === 0 && (
        <EmptyCourse content="Không có lớp học online nào ở đây" />
      )}
      <Flex
        flexDirection={'column'}
        gap={5}
        maxHeight={'500px'}
        overflowY={'scroll'}
      >
        {courses &&
          courses.map((course: CourseType) => (
            <Course
              key={course?._id}
              id={course?._id}
              thumbnail={course?.thumbnail}
              title={course?.title}
              desc={course?.desc}
              totalViews={course?.usersJoined.length}
              isFree={course?.price === 0}
              isJoined={true}
            />
          ))}
        {myLearningCourses &&
          myLearningCourses.map((myCourse: MyLearningCourses) => (
            <Course
              key={myCourse?._id}
              id={myCourse?._id}
              thumbnail={myCourse?.idCourse.thumbnail}
              title={myCourse?.idCourse.title}
              desc={myCourse?.idCourse.desc}
              totalViews={myCourse?.idCourse.usersJoined.length}
              isFree={myCourse?.idCourse.price === 0}
              isJoined={true}
            />
          ))}
        {classes &&
          classes.map((cls: Class) => (
            <ClassRoom
              key={cls?._id}
              id={cls?._id}
              title={cls?.name}
              isAuthenticated={isAuthenticated}
              thumbnail={cls?.thumbnail}
              totalViews={cls?.members.length}
              startTime={getTime(cls?.startTime)}
            />
          ))}
        {myLearningClasses &&
          myLearningClasses.map((cls: Class) => (
            <ClassRoom
              key={cls?._id}
              id={cls?._id}
              title={cls?.name}
              isAuthenticated={isAuthenticated}
              thumbnail={cls?.thumbnail}
              totalViews={cls?.members.length}
              startTime={getTime(cls?.startTime)}
              isJoined={true}
            />
          ))}
      </Flex>
    </Box>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
