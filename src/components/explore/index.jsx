import Footer from '../footer';
import HeroSlider from './heroSlider';
import InspirtaionTravel from './inspirationTravel';
import RelatedWisata from './relatedWisata';
import { SliderData } from './sliderData';
import TourismSpot from './tourismSpot';

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
