import axios from '@/utils/axios';
import { Hide } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../footer';
import Head from '../head';
import Navbar from '../navbar';
import HeroSliderDestinasi from '../viewDestinasi/heroSliderDestinasi';
import CariDestinasi from './cariDestinasi';
import Download from './download';
import Hero from './hero';
import TempatWisata from './tempat-wisata';
import TestimonialSlider from './testimonialSlider';
import TourVisit from './tour-visit';
import Youtube from './youtube';

const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/sliders').then(({ data }) => setSlides(data.data));
    axios.get('/api/v1/videos/public').then(({ data }) => setVideo(data.data[0]));
  }, []);

  return (
    <>
      <Navbar pageTitle={'Home'} />
      <HeroSliderDestinasi slides={slides} video={video} />
      <TourVisit />
      <Youtube />
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
