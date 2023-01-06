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
  const [settings, setSettings] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    axios.get('/api/v1/sliders').then(({ data }) => setSlides(data.data));
    axios.get('/api/v1/settings').then(({ data }) => setSettings(data));
  }, []);

  return (
    <>
      <Navbar pageTitle={'Explore Maps'} />
      <HeroSlider slides={slides} />
      <TourismSpot setLocation={setLocation} />
      <RelatedWisata location={location} />
      <InspirtaionTravel />
      <Footer settings={settings} />
    </>
  );
};

export default Explore;
