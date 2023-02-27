import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import ButtonFC from '../Button/Button';
import Search from '../Search';

const Navbar = () => {
  const [keywordSearch, setKeyWordSearch] = useState<string>('');

  return (
    <Grid
      position={'fixed'}
      templateColumns="repeat(3, 1fr)"
      borderBottom={'solid'}
      borderBottomColor={'#e8e8e8'}
      alignItems="center"
      gap={6}
      px={4}
      h={'64px'}
      w={'full'}
      bg={'white'}
    >
      <GridItem>
        <Logo />
        <HamburgerIcon display={['block', 'none']} fontSize={25} />
      </GridItem>
      <GridItem>
        <Search
          display={['none', 'block']}
          radius="full"
          width={['full']}
          placeholder="Tìm kiếm khoá học, bài viết, video, ..."
          value={keywordSearch}
          setValue={setKeyWordSearch}
        />
        <Link href={'/search'}>
          <SearchIcon
            float={'right'}
            display={['block', 'none']}
            fontSize={'xl'}
          />
        </Link>
      </GridItem>
      <GridItem float={'left'}>
        <Link href={'/login'}>
          <ButtonFC
            float={'right'}
            title="Đăng nhập"
            color="teal"
            radius="full"
            size={['sm', 'md']}
          />
        </Link>
      </GridItem>
    </Grid>
  );
};

const Logo = () => {
  return (
    <Container display={['none', 'block']}>
      <Flex alignItems={'center'} gap={4}>
        <Box>
          <Image
            rounded={'md'}
            boxSize={'45px'}
            objectFit="cover"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt="E8 logo"
          />
        </Box>
        <Box display={['none', 'none', 'block']}>
          <Text fontWeight={'bold'}>Học tiếng anh để đi làm</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
