import { Box, Text } from '@chakra-ui/react';
import HeroSlider from './heroSliderDestinasi';
import { SliderData } from '../explore/sliderData';
import HeroSliderDestinasi from './heroSliderDestinasi';
import DescDestinasi from './descDestinasi';
import Facilities from './facilities';
import TripIdeas from './tripIdeas';
import InspirtaionTravel from '../explore/inspirationTravel';
import Footer from '../footer';
import TestiSlider from './testiSlider';
import Comment from './commen';
import TestimonialSlider from '../homepage/testimonialSlider';

const ViewDestinasi = () => {
  return (
    <>
      <HeroSliderDestinasi slides={SliderData} />
      <DescDestinasi />
      <Facilities />
      <TripIdeas />
      <Box mt="80px">
        <InspirtaionTravel />
      </Box>
      <Comment />
      <Footer />
    </>
  );
};

export default ViewDestinasi;
