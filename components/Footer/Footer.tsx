import { Text, Flex, Grid, GridItem, Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import logo from 'public/static/images/icon.png';
import Image from 'next/image';

const infoE8: string[] = [
  'Điện thoại: 0246.329.1102',
  'Email: contact@fullstack.edu.vn',
  'Địa chỉ: Số 524 đường 2/9, phường Hoà Cường Nam, quận Hải Châu, TP. Đà Nẵng',
];

const aboutE8Items: { link: string; title: string }[] = [
  {
    link: '/about',
    title: 'Giới thiệu',
  },
  {
    link: '/contact-us',
    title: 'Liên hệ',
  },
  {
    link: '/terms',
    title: 'Điều khoản',
  },
  {
    link: '/settings/security',
    title: 'Bảo mật',
  },
];

const infoCompany: string[] = [
  'Mã số thuế: 0109922901',
  'Ngày thành lập: 04/03/2022',
  'Lĩnh vực: Tiếng anh, giáo dục. E8 xây dựng và phát triển những kiến thức, bài học tiếng anh mang lại giá trị cho cộng đồng.',
];

const Footer = () => {
  return (
    <Box w={'full'} bg={'black'} py={14}>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        w={'full'}
        gap={[6, 6]}
        px={[4, 8, 14, 20]}
        alignItems={'center'}
      >
        <GridItem>
          <Flex alignItems={'center'} gap={2} mb={4}>
            <Image src={logo} alt="E8 logo" width={40} />
            <Text fontSize={'lg'} color={'white'} fontWeight={'bold'}>
              Học tiếng anh để đi làm
            </Text>
          </Flex>
          {infoE8.map((item: string) => (
            <Text key={item} color={'gray.300'} mb={2} fontSize={'sm'}>
              {item}
            </Text>
          ))}
        </GridItem>
        <GridItem>
          <Text fontSize={'lg'} color={'white'} fontWeight={'bold'} mb={4}>
            VỀ E8
          </Text>
          {aboutE8Items.map((item: { link: string; title: string }) => (
            <Link href={item.link} key={item.link}>
              <Text color={'gray.300'} mb={2} fontSize={'sm'}>
                {item.title}
              </Text>
            </Link>
          ))}
        </GridItem>
        <GridItem>
          <Text fontSize={'lg'} color={'white'} fontWeight={'bold'} mb={4}>
            CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC E8
          </Text>
          {infoCompany.map((item: string, index: number) => (
            <Text key={index} color={'gray.300'} mb={2} fontSize={'sm'}>
              {item}
            </Text>
          ))}
        </GridItem>
      </Grid>
      <Text
        px={[4, 8, 16, 24]}
        color={'gray.300'}
        fontSize={'sm'}
        mt={10}
      >{`© 2018 - ${new Date().getFullYear()} E8. Nền tảng học tiếng anh hàng đầu Việt Nam.`}</Text>
    </Box>
  );
};

export default Footer;
