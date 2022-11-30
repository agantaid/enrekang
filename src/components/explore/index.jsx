import { Text } from '@chakra-ui/react';
import Footer from '../footer';
import HeroSlider from './heroSlider';
import InspirtaionTravel from './inspirationTravel';
import RelatedWisata from './relatedWisata';
import { SliderData } from './SliderData';
import TourismSpot from './tourismSpot';
// import "./Module.cardInpiration.css"

const Explore = () => {
  return (
    <>
      <HeroSlider slides={SliderData} />
      <TourismSpot />
      <RelatedWisata />
      <InspirtaionTravel />
      <Footer />
    </>
  );
};

export default Explore;
