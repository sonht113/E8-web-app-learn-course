import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';

import { BannerType } from 'types/banner.type';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type IBannerProps = {
  items: BannerType[];
};

const Banner: React.FC<IBannerProps> = ({ items }) => {
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
        {items.map((item: BannerType) => (
          <SwiperSlide key={item.id}>
            <Box
              w="100%"
              h="270px"
              bgGradient={`linear(to-r, ${item.colorFrom}, ${item.colorTo} )`}
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
                  pl={10}
                  w={'640px'}
                >
                  <Heading
                    color={'white'}
                    as={'h5'}
                    size={['md', 'md', 'md', 'lg']}
                  >
                    {item.title}
                  </Heading>
                  <Text color={'white'} fontSize={'md'}>
                    {item.description}
                  </Text>
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
                      color: item.colorFrom,
                      transition: 'linear 0.1s',
                    }}
                  >
                    {item.button}
                  </Text>
                </Box>
                <Box
                  display={['none', 'none', 'flex']}
                  flex={'3, 1'}
                  justifyContent={'flex-start'}
                >
                  <Image
                    height={'100%'}
                    objectFit={'cover'}
                    src={
                      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png'
                    }
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
