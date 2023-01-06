import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CardWisata from '../homepage/cardWisata';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { Box, Image, Text } from '@chakra-ui/react';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import axios from '@/utils/axios';

export default function SliderRelatedWisata({ location }) {
  const [data, setData] = useState([]);
  const { locale } = useRouter();
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

  useEffect(() => {
    if (location)
      axios.get(`/api/v1/tourisms?location-id=${location}`).then(({ data }) => setData(data.data));
    else axios.get('/api/v1/tourisms').then(({ data }) => setData(data.data));
  }, [location]);

  return (
    <>
      <Box px={{ base: '4px', md: '20px', xl: '120px' }}>
        <Text fontSize={{ base: '12px', md: '20px' }} fontWeight="400">
          Related Results
        </Text>
        <Slider {...settings}>
          {data?.map((item) => (
            <Box
              key={item.id}
              width={{ base: '90%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata
                id={item.id}
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${item.image.name}`}
                title={locale === 'id' ? item.title : item.title_en}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
