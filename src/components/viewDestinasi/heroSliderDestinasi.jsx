import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../navbar';

// If you want to use your own Selectors look up the Advancaed Story book examples
const HeroSliderDestinasi = ({ slides, video }) => {
  // lang
  //   const { locale, locales, defaultLocale } = useRouter();
  //   const { heroButton } = langExplore[locale];

  return (
    <Box width={'100%'} height={{ base: '30vh', md: '40vh', lg: '483px', xl: '700px' }}>
      <Box
        pl={{ base: '24px', md: '40px', xl: '182px' }}
        pr={{ base: '24px', md: '40px', xl: '123px' }}
        // position="absolute"
        zIndex={'2'}
        right="0"
        top="0"
        left="0"
        // py={{ base: '40px', md: '67px' }}
      >
        {/* <Navbar pageTitle={'View Destination'} /> */}
      </Box>
      <Box
        as="video"
        w="100vw"
        autoPlay
        loop
        muted
        // display={{ base: 'none', lg: 'inherit' }}
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/videos/${video?.name}`}
      />
    </Box>
  );
};

export default HeroSliderDestinasi;
