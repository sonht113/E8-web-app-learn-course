import { Box, Grid, Skeleton, Text } from '@chakra-ui/react';
import { AuthenContext } from 'context/AuthenContext';
import React, { useContext, useMemo } from 'react';
import { ClassDetail } from 'types/class.type';
import ClassRoom from '../ClassRoom';

type IListClassRoomOnline = {
  title?: string;
  classes?: ClassDetail[];
};
const ListClassRoomOnline: React.FC<IListClassRoomOnline> = ({
  title,
  classes,
}) => {
  const { isAuthenticated, user } = useContext(AuthenContext);
  const getTime = (time: number) =>
    useMemo(() => {
      const date = new Date(time).getDate();
      const month = new Date(time).getMonth();
      const year = new Date(time).getFullYear();
      return `${date}-${month}-${year}`;
    }, []);
  return (
    <Box mt={10} w={['100%', '95%']} mx={'auto'}>
      <Box>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          {title}
        </Text>
      </Box>
      <Grid
        templateColumns={
          classes?.length === 0
            ? '1fr'
            : [
                `repeat(${classes?.length}, 1fr)`,
                `repeat(${classes?.length}, 1fr)`,
                `repeat(${classes?.length}, 1fr)`,
                'repeat(4, 1fr)',
              ]
        }
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
        {classes?.length === 0 && (
          <Text fontSize={'sm'} fontWeight={'medium'} color={'gray.500'}>
            Không có lớp học online nào
          </Text>
        )}
        {classes?.map((cla: ClassDetail) => (
          <ClassRoom
            id={cla?._id}
            title={cla?.name}
            startTime={getTime(cla?.startTime)}
            price={4444}
            desc={cla?.desc}
            thumbnail={cla?.thumbnail}
            totalViews={cla?.members?.length}
            teacher={cla?.teacher?.fullName}
            isJoined={cla?.members?.includes(user?._id)}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListClassRoomOnline;
