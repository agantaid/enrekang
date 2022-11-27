import React, { Component } from 'react';
import Slider from 'react-slick';
import CardWisata from '../homepage/cardWisata';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { Box, Image, Text } from '@chakra-ui/react';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

export default class SliderRelatedWisata extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Box px={{ base: '4px', md: '20px', xl: '120px' }}>
          <Text fontSize={{ base: '12px', md: '20px' }} fontWeight="400">
            Related Results
          </Text>
          <Slider {...settings}>
            <Box width={{ base: '90%', md: '100%' }} height="420px" p={{ base: '4px', md: '20px' }}>
              <CardWisata image={'/wisata1.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata2.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata3.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata3.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata2.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata1.png'} />
            </Box>
          </Slider>
        </Box>
      </>
    );
  }
}
