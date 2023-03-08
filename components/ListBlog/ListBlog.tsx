import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { BlogViewHome } from 'types/blog.type';
import Blog from '../Blog';

type IListBlogProps = {
  blogs?: BlogViewHome[];
  title: string;
};

const ListBlog: React.FC<IListBlogProps> = ({ blogs, title }) => {
  return (
    <Box mt={10} w={['100%', '95%']} mx={'auto'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={4}
      >
        <Flex gap={1} alignItems={'center'}>
          <Box>
            <Text fontSize={'xl'} fontWeight={'bold'}>
              {title}
            </Text>
          </Box>
          <Box
            h={5}
            w={5}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
            bg={'rgba(129, 129, 129, 0.5)'}
            rounded={'full'}
          >
            <ArrowForwardIcon fontSize={'sm'} />
          </Box>
        </Flex>
        <Flex
          className="linkSeeMoreBlog"
          alignItems={'center'}
          cursor={'pointer'}
        >
          <Box>
            <Text
              className="textSeeMoreBlog"
              fontSize={'sm'}
              fontWeight={'bold'}
              color={'#09b166'}
            >
              Xem chi tiết
            </Text>
          </Box>
          <ChevronRightIcon className="iconSeeMoreBlog" color={'#09b166'} />
        </Flex>
      </Box>

      <Grid
        overflowX={'scroll'}
        templateColumns={[
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={[5, 10]}
        pb={5}
      >
        {blogs.map((blog: BlogViewHome, index: number) => (
          <Blog
            key={index}
            title={blog.title}
            thumbnail={blog.thumbnail}
            avatar={blog.author?.avatar}
            name={blog.author.name}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListBlog;
