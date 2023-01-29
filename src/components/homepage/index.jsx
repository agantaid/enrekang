import axios from '@/utils/axios';
import { Hide } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../footer';
import Navbar from '../navbar';
import HeroSliderDestinasi from '../viewDestinasi/heroSliderDestinasi';
import CariDestinasi from './cariDestinasi';
import Download from './download';
import TempatWisata from './tempat-wisata';
import TestimonialSlider from './testimonialSlider';
import TourVisit from './tour-visit';
import WatchPopular from './watchPopular';
import Youtube from './youtube';

const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [video, setVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/sliders').then(({ data }) => setSlides(data.data));
    axios.get('/api/v1/videos/public').then(({ data }) => setVideo(data.data[0]));
    axios.get('/api/v1/video-galleries').then(({ data }) => setVideos(data.data));
    axios.get('/api/v1/settings').then(({ data }) => setSettings(data));
  }, []);

  return (
    <>
      <Navbar pageTitle={'Home'} />
      <HeroSliderDestinasi slides={slides} video={video} />
      <TourVisit />
      <Youtube settings={settings} />
      <TempatWisata />
      <CariDestinasi />
      <WatchPopular videos={videos} />
      <TestimonialSlider />
      <Hide below="lg">
        <Download />
      </Hide>
      <Footer settings={settings} />
    </>
  );
};

export default HomePage;
