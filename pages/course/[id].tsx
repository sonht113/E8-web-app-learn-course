import {
  Button,
  Container,
  Grid,
  GridItem,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import DefaultLayout from 'layouts/defaultLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types/layout.type';
import CourseInfo from '@/components/CourseInfo';
import VideoIntro from '@/components/VideoIntro';
import { BsFillChatDotsFill } from 'react-icons/bs';
import CommentModal from '@/components/CommentModal';

const CourseDetail: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <CourseInfo title={'Lập trình C++ cơ bản, nâng cao'} />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <VideoIntro linkVideo="https://www.youtube.com/embed/QhBnZ6NPOY0" />
          </GridItem>
        </Grid>

        <Button
          onClick={onOpen}
          rounded="3xl"
          p="6"
          bg="white"
          boxShadow="dark-lg"
          color="green"
        >
          <BsFillChatDotsFill fontSize={32} />{' '}
          <Text marginLeft={2}>Hỏi đáp</Text>
        </Button>

        <CommentModal isOpen={isOpen} onClose={onClose} />
      </Container>
    </>
  );
};

CourseDetail.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CourseDetail;
