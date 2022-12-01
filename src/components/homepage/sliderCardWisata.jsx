import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CardWisata from './cardWisata';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { Box } from '@chakra-ui/react';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import axios from '@/utils/axios';
import { useRouter } from 'next/router';

export default function SliderCard() {
  const { locale } = useRouter();
  const [data, setData] = useState([]);
  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    axios.get('/api/v1/tourisms').then(({ data }) => setData(data.data));
  }, []);

  return (
    <>
      <Box px={{ base: '4px', md: '20px', xl: '120px' }}>
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
