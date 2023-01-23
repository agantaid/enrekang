import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import CardTestimoni from './cardTestimoni';
import langHome from '../homepage/lang';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '@/utils/axios';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { testiTitle } = langHome[locale];

  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/testimonies/public').then(({ data }) => setTestimonies(data.data));
  }, []);

  return (
    <Box
      mt={{ base: '35px', lg: '65px' }}
      mb={{ base: '-85px', md: '-85px', lg: '0px' }}
      bgColor={'#F5F5F5'}
      py="65px"
      pl={{ base: '0px', md: '20px', xl: '202px' }}
      pr={{ base: '0px', md: '20px', xl: '167px' }}
    >
      <Container maxW={'6xl'}>
        <Text fontSize={{ base: '18px', md: '40px' }} fontWeight="600" mb="17px">
          {testiTitle}
        </Text>
        <Slider {...settings}>
          {testimonies.map((testimoni) => (
            <Box key={testimoni.id}>
              <CardTestimoni
                name={testimoni?.name}
                job={locale === 'id' ? testimoni?.job : testimoni?.job_en}
                comment={locale === 'id' ? testimoni?.comment : testimoni?.comment_en}
                destination={
                  locale === 'id' ? testimoni?.tourism?.title : testimoni?.tourism?.title_en
                }
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${testimoni.image.name}`}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
