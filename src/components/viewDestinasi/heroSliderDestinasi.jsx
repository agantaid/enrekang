import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../navbar';

// If you want to use your own Selectors look up the Advancaed Story book examples
const HeroSliderDestinasi = ({ slides }) => {
  // lang
  //   const { locale, locales, defaultLocale } = useRouter();
  //   const { heroButton } = langExplore[locale];

  return (
    <Box width={'100%'} height={{ base: '90vh', md: '100vh' }}>
      <Box
        pl={{ base: '24px', md: '40px', xl: '182px' }}
        pr={{ base: '24px', md: '40px', xl: '123px' }}
        position="absolute"
        zIndex={'2'}
        right="0"
        top="0"
        left="0"
        py={{ base: '40px', md: '67px' }}
      >
        <Navbar pageTitle={'View Destination'} />
      </Box>
      <Carousel infiniteLoop>
        {slides?.map((slide) => {
          return (
            <>
              <Box
                width={'100%'}
                height={{ base: '90vh', md: '100vh' }}
                bgImage={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${slide.image.name}`}
                bgPosition="center"
                bgRepeat={'no-repeat'}
                bgSize="cover"
                key="1"
              >
                {/* <Image position={'inherit'} src={slide.image} key='1' height="100vh" alt="hero-slider" width="800px" /> */}
              </Box>
            </>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default HeroSliderDestinasi;
