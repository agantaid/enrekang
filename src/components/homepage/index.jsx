import axios from '@/utils/axios';
import { Hide } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../footer';
import Head from '../head';
import HeroSliderDestinasi from '../viewDestinasi/heroSliderDestinasi';
import CariDestinasi from './cariDestinasi';
import Download from './download';
import Hero from './hero';
import TempatWisata from './tempat-wisata';
import TestimonialSlider from './testimonialSlider';
import TourVisit from './tour-visit';

const HomePage = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/sliders').then(({ data }) => setSlides(data.data));
  }, []);
  return (
    <>
      <HeroSliderDestinasi slides={slides} />
      <TourVisit />
      <TempatWisata />
      <CariDestinasi />
      <TestimonialSlider />
      <Hide below="lg">
        <Download />
      </Hide>
      <Footer />
    </>
  );
};

export default HomePage;
