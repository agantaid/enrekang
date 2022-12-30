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
import { useEffect, useState } from 'react';
import axios from '@/utils/axios';
import { useRouter } from 'next/router';
import Navbar from '../navbar';

const ViewDestinasi = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tourism, setTourism] = useState({});
  const [slides, setSlides] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/tourisms/${id}`).then(({ data }) => setTourism(data));
    axios.get('/api/v1/videos/public').then(({ data }) => setVideo(data.data[0]));
    axios.get('/api/v1/sliders').then(({ data }) => setSlides(data.data));
  }, []);
  return (
    <>
      <Navbar pageTitle={'View Destinasi'} />
      <HeroSliderDestinasi slides={slides} video={video} />
      <DescDestinasi router={router} tourism={tourism} />
      <Facilities />
      <TripIdeas tourism={tourism} />
      <Box mt="80px">
        <InspirtaionTravel />
      </Box>
      <Comment />
      <Footer />
    </>
  );
};

export default ViewDestinasi;
