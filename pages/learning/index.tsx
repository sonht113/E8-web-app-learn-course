import LearnedCourseFooter from '@/components/LearnedCourseFooter';
import LearnedCourseHeader from '@/components/LearnedCourseHeader';
import LearningVideo from '@/components/LearningVideo';
import ListCourseModal from '@/components/ListCourseModal';
import ListLearningCourse from '@/components/ListLearningCourse';
import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NextPageWithLayout } from 'types/layout.type';

const LearnedCourse: NextPageWithLayout = () => {
  const [toggle, setToggle] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => {
    setToggle(!toggle);
  };
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
          <LearningVideo
            linkVideo={'https://www.youtube.com/embed/QhBnZ6NPOY0'}
          />
        </GridItem>
        {!toggle && (
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <ListLearningCourse />
          </GridItem>
        )}
      </Grid>

      <LearnedCourseFooter
        onOpen={onOpen}
        toggle={toggle}
        handleToggle={handleToggle}
      />

      <ListCourseModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default LearnedCourse;
