import { Box, Container, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import Slider from 'react-slick';
import CardTestimoni from '../homepage/cardTestimoni';
import langHome from '../homepage/lang';
import { useRouter } from 'next/router';

const TestiSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { testiTitle } = langHome[locale];
  return (
    <Container maxW={'8xl'}>
      <Box
        mt="65px"
        mb={{ base: '-85px', md: '-85px', lg: '0px' }}
        // bgColor={'#F5F5F5'}
        py="65px"
        pl={{ base: '0px', md: '20px', xl: '202px' }}
        pr={{ base: '0px', md: '20px', xl: '167px' }}
      >
        <Text fontSize={{ base: '18px', md: '40px' }} fontWeight="600" mb="17px">
          {testiTitle}
        </Text>
        <Slider {...settings}>
          <Box>
            <CardTestimoni />
          </Box>
          <Box>
            <CardTestimoni />
          </Box>
          <Box>
            <CardTestimoni />
          </Box>
          <Box>
            <CardTestimoni />
          </Box>
          <Box>
            <CardTestimoni />
          </Box>
          <Box>
            <CardTestimoni />
          </Box>
        </Slider>
      </Box>
    </Container>
  );
};

export default TestiSlider;
