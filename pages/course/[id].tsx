import { useRouter } from 'next/router';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import DefaultLayout from 'layouts/defaultLayout';
import { ReactElement, useContext, useMemo } from 'react';
import { NextPageWithLayout } from 'types/layout.type';
import CourseInfo from '@/components/CourseInfo';
import VideoIntro from '@/components/VideoIntro';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourse, updateCourse } from 'api/course.api';
import { getChapters } from 'api/chapter.api';
import { AuthenContext } from 'context/AuthenContext';
import { CourseType } from 'types/course.type';
import { updateUser } from 'api/user.api';
import { User } from 'types/user.type';

const CourseDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, isAuthenticated } = useContext(AuthenContext);

  //console.log(id);

  const queryCourse = useQuery({
    queryKey: ['course'],
    queryFn: () => getCourse(String(id)),
    keepPreviousData: true,
    staleTime: 50 * 1000,
  });

  // console.log(queryCourse.data);
  console.log('user', user);

  const queryChapters = useQuery({
    queryKey: ['chapters'],
    queryFn: () => getChapters(id),
    keepPreviousData: true,
    staleTime: 50 * 1000,
  });

  const courseData = queryCourse?.data?.data;
  const chapters = queryChapters?.data?.data.results;

  const isJoined = useMemo(() => {
    return courseData?.usersJoined?.includes(user?._id);
  }, [courseData]);

  const updateCourseMutate = useMutation({
    mutationFn: (data: { id: string; body: CourseType }) => updateCourse(data),
  });

  const updateUserMutate = useMutation({
    mutationFn: (data: { id: string; body: User }) => updateUser(data),
  });

  const updateCourseAfterRegisterCourse = (data: {
    id: string;
    body: CourseType;
  }) => {
    updateCourseMutate.mutate(data, {
      onSuccess: (res) => {
        return router.push(`/learning/${id}`);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const updateUserAfterRegisterCourse = (data: { id: string; body: User }) => {
    updateUserMutate.mutate(data, {
      onSuccess: (data) => {
        return data;
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const handleRegisterForCourse = () => {
    updateCourseAfterRegisterCourse({
      id: String(id),
      body: { usersJoined: [...courseData.usersJoined, user?._id] },
    });

    updateUserAfterRegisterCourse({
      id: user._id,
      body: {
        myLearningCourses: [
          ...user.myLearningCourses,
          {
            idCourse: courseData._id,
            currentLesson: 1,
          },
        ],
      },
    });
  };

  const handleLearningCourse = () => {
    router.push(`/learning/${id}`);
  };

  return (
    <>
      <Container maxW="100%" paddingY={4}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={6}
          width={{ base: '100%', md: '100%' }}
          margin="0 auto"
          paddingX={10}
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <CourseInfo
              title={courseData?.title}
              description={courseData?.desc}
              chapters={chapters}
              courseData={courseData}
            />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <VideoIntro
              click={() => {
                if (!isAuthenticated) {
                  return router.push('/login');
                } else {
                  if (isAuthenticated) {
                    isJoined
                      ? handleLearningCourse()
                      : handleRegisterForCourse();
                  }
                }
              }}
              isJoined={isJoined}
              chapters={chapters}
              courseData={courseData}
            />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

CourseDetail.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CourseDetail;
