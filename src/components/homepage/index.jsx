import { Hide } from '@chakra-ui/react';
import Footer from '../footer';
import CariDestinasi from './cariDestinasi';
import Download from './download';
import Hero from './hero';
import TempatWisata from './tempat-wisata';
import TestimonialSlider from './testimonialSlider';
import TourVisit from './tour-visit';

const HomePage = () => {
  return (
    <>
      <Hero />
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
