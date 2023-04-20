import { List, ListItem, Skeleton } from '@chakra-ui/react';
import React from 'react';

const ListSkeleton = () => {
  return (
    <List spacing={4}>
      <ListItem>
        <Skeleton height="15px" width={['200px', '300px']} />
      </ListItem>
      <ListItem>
        <Skeleton height="15px" width={['200px', '300px']} />
      </ListItem>
      <ListItem>
        <Skeleton height="15px" width={['200px', '300px']} />
      </ListItem>
      <ListItem>
        <Skeleton height="15px" width={['200px', '300px']} />
      </ListItem>
    </List>
  );
};

export default ListSkeleton;
