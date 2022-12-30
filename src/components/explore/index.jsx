import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import Footer from '../footer';
import Navbar from '../navbar';
import HeroSlider from './heroSlider';
import InspirtaionTravel from './inspirationTravel';
import RelatedWisata from './relatedWisata';
import TourismSpot from './tourismSpot';

const Explore = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/sliders').then(({ data }) => setSlides(data.data));
  }, []);

  return (
    <>
      <Navbar pageTitle={'Explore Maps'} />
      <HeroSlider slides={slides} />
      <TourismSpot />
      <RelatedWisata />
      <InspirtaionTravel />
      <Footer />
    </>
  );
};

export default Explore;
