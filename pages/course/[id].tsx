import { useRouter } from 'next/router';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import DefaultLayout from 'layouts/defaultLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types/layout.type';
import CourseInfo from '@/components/CourseInfo';
import VideoIntro from '@/components/VideoIntro';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from 'api/course.api';
import { getChapters } from 'api/chapter.api';

const CourseDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const queryCourse = useQuery({
    queryKey: ['course'],
    queryFn: () => getCourse(id),
    keepPreviousData: true,
  });

  const queryChapters = useQuery({
    queryKey: ['chapters'],
    queryFn: () => getChapters(id),
    keepPreviousData: true,
  });

  const courseData = queryCourse.data?.data;
  const chapters = queryChapters?.data?.data.results;
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
            <VideoIntro chapters={chapters} courseData={courseData} />
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
