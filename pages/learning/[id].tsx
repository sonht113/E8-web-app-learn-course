import CommentModal from '@/components/CommentModal';
import LearnedCourseFooter from '@/components/LearnedCourseFooter';
import LearnedCourseHeader from '@/components/LearnedCourseHeader';
import LearningVideo from '@/components/LearningVideo';
import ListCourseModal from '@/components/ListCourseModal';
import ListLearningCourse from '@/components/ListLearningCourse';
import { Button, Grid, GridItem, useDisclosure, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getChapters } from 'api/chapter.api';
import { LearningContextProvider } from 'context/LearingContext';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { NextPageWithLayout } from 'types/layout.type';

const LearnedCourse: NextPageWithLayout = () => {
  const [lecture, setLecture] = useState({});
  const [toggle, setToggle] = useState(false);
  const {
    isOpen: isOpenListCourseModal,
    onOpen: onOpenListCourseModal,
    onClose: onCloseListCourseModal,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const router = useRouter();
  const { id } = router.query;

  const queryChapters = useQuery({
    queryKey: ['chapters', id],
    queryFn: () => getChapters(id),
    keepPreviousData: true,
  });

  const chapters = queryChapters?.data?.data.results;

  return (
    <>
      <LearnedCourseHeader title={'Learn HTML Have a nice day'} />
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        width={{ base: '100%', md: '100%' }}
        marginY="50px"
        position="relative"
      >
        <GridItem colSpan={!toggle ? { base: 1, md: 3 } : { base: 1, md: 4 }}>
          <LearningVideo {...{ lecture }} />
        </GridItem>
        {!toggle && (
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <ListLearningCourse {...{ chapters, setLecture }} />
          </GridItem>
        )}

        <Button
          onClick={onOpen}
          rounded="3xl"
          p="6"
          bg="white"
          boxShadow="dark-lg"
          color="green"
          width={150}
          position="fixed"
          bottom={16}
          right={{ base: '5%', md: '30%' }}
        >
          <BsFillChatDotsFill fontSize={32} />{' '}
          <Text marginLeft={2}>Hỏi đáp</Text>
        </Button>

        <CommentModal isOpen={isOpen} onClose={onClose} />
      </Grid>

      <LearnedCourseFooter
        onOpen={onOpenListCourseModal}
        toggle={toggle}
        handleToggle={handleToggle}
      />

      <ListCourseModal
        isOpen={isOpenListCourseModal}
        onClose={onCloseListCourseModal}
        {...{
          chapters,
          setLecture,
        }}
      />
    </>
  );
};

LearnedCourse.getLayout = function getLayout(page: ReactElement) {
  return (
    <React.Fragment>
      <LearningContextProvider>{page}</LearningContextProvider>
    </React.Fragment>
  );
};

export default LearnedCourse;
