import { Box, Container, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import Slider from 'react-slick';
import CardTestimoni from './cardTestimoni';

export default class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container maxW={'8xl'}>
        <Box
          mt="65px"
          mb={{ base: '-85px', md: '-85px', lg: '0px' }}
          bgColor={'#F5F5F5'}
          py="65px"
          pl={{ base: '0px', md: '20px', xl: '202px' }}
          pr={{ base: '0px', md: '20px', xl: '167px' }}
        >
          <Text fontSize={{ base: '18px', md: '40px' }} fontWeight="600" mb="17px">
            What they say
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
  }
}
