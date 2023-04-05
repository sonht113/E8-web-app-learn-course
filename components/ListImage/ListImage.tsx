/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

type IListImageProps = {
  click?: (_url: string) => void;
};

const ListImage: React.FC<IListImageProps> = ({ click }) => {
  return (
    <Flex
      flexWrap={'wrap'}
      gap={2}
      mt={2}
      maxW={['200px', '300px', '300px', '400px']}
    >
      <Image
        cursor={'pointer'}
        boxSize={['80px', '100px', '100px', '150px']}
        objectFit="cover"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
        alt="Dan Abramov"
        onClick={() =>
          click(
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
          )
        }
      />
      <Image
        boxSize={['80px', '100px', '100px', '150px']}
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Image
        boxSize={['80px', '100px', '100px', '150px']}
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </Flex>
  );
};

export default ListImage;
