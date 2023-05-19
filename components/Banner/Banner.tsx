import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { Box, Flex, Image, Text, Heading, Skeleton } from '@chakra-ui/react';
import Link from 'next/link';

import { BannerRes } from 'types/banner.type';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type IBannerProps = {
  banners?: BannerRes[] | any;
};

const Banner: React.FC<IBannerProps> = ({ banners }) => {
  if (!banners) {
    return (
      <Box>
        <Skeleton height="270px" rounded={'xl'} />
      </Box>
    );
  }
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {banners?.map((item: BannerRes) => (
          <SwiperSlide key={item._id}>
            <Box
              w="100%"
              h="270px"
              bgGradient={'linear(to-r, rgb(31, 119, 41), rgb(101, 221, 99))'}
              rounded={'xl'}
            >
              <Flex
                h={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'start'}
                  gap={5}
                  px={10}
                  w={'640px'}
                >
                  <Heading
                    color={'white'}
                    as={'h5'}
                    size={['md', 'md', 'md', 'lg']}
                  >
                    {item.text}
                  </Heading>
                  <Text color={'white'} fontSize={'md'}>
                    {item.desc}
                  </Text>
                  <Link href={item.link}>
                    <Text
                      py={1}
                      px={5}
                      border={'2px'}
                      rounded={'3xl'}
                      borderColor={'white'}
                      color={'white'}
                      cursor={'pointer'}
                      fontSize={'xs'}
                      fontWeight={'medium'}
                      _hover={{
                        bg: 'white',
                        color: 'rgb(104, 40, 250)',
                        transition: 'linear 0.1s',
                      }}
                    >
                      Tìm hiểu thêm
                    </Text>
                  </Link>
                </Box>
                <Box
                  display={['none', 'none', 'flex']}
                  flex={'3, 1'}
                  justifyContent={'flex-start'}
                >
                  <Image
                    height={'100%'}
                    objectFit={'cover'}
                    src={item.image}
                    alt={'banner'}
                  />
                </Box>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
