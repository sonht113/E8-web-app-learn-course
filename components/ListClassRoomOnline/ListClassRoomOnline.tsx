import { Box, Grid, Skeleton, Text } from '@chakra-ui/react';
import { AuthenContext } from 'context/AuthenContext';
import React, { useContext } from 'react';
import { Class } from 'types/class.type';
import ClassRoom from '../ClassRoom';

type IListClassRoomOnline = {
  title?: string;
  classes?: Class[];
};
const ListClassRoomOnline: React.FC<IListClassRoomOnline> = ({
  title,
  classes,
}) => {
  const { isAuthenticated } = useContext(AuthenContext);
  return (
    <Box mt={10} w={['100%', '95%']} mx={'auto'}>
      <Box>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          {title}
        </Text>
      </Box>
      <Grid
        templateColumns={[
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={5}
        pb={5}
        overflowX={
          classes?.length !== 0 && ['scroll', 'scroll', 'scroll', 'hidden']
        }
      >
        {!classes &&
          [1, 2, 3, 4, 5].map((_item, index) => (
            <Skeleton
              key={index}
              w={['60vw', '30vw', '30vw', 'full']}
              h={'180px'}
              rounded={'xl'}
            />
          ))}
        {/* {classes?.length === 0 && (
          <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
            Không có lớp học online nào
          </Text>
        )} */}
        {[2, 4, 4, 4, 4].map(() => (
          <ClassRoom
            id="123"
            title="Toeic 666"
            price={45555}
            desc={'sjfhdsahfds'}
            thumbnail={
              'https://c.wallhere.com/images/d0/d0/3c9203dca6873e85879197389228-1520111.jpg!d'
            }
            totalViews={34}
            teacher={'Ho Trong Son'}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListClassRoomOnline;
