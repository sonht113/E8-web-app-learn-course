import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

type IListImageProps = {
  click?: (_url: string) => void;
  sender?: boolean;
  image?: string;
};

const ListImage: React.FC<IListImageProps> = ({ click, sender, image }) => {
  return (
    <Flex
      flexWrap={'wrap'}
      gap={2}
      mt={2}
      maxW={['200px', '300px', '300px', '400px']}
      justifyContent={sender && 'flex-end'}
    >
      <Image
        cursor={'pointer'}
        boxSize={['80px', '100px', '100px', '150px']}
        objectFit="cover"
        src={image}
        onClick={() => click(image)}
      />
    </Flex>
  );
};

export default ListImage;
