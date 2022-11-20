import { Box, Button, Center, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../navbar';
import { SliderData } from './SliderData';
import { useRouter } from 'next/router';
import langExplore from './lang';

// If you want to use your own Selectors look up the Advancaed Story book examples
const HeroSlider = ({ slides }) => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { heroButton } = langExplore[locale];

  return (
    <Box width={'100%'} height={{ base: '799px', md: '100vh' }}>
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
        <Navbar pageTitle={'Explore Maps'} />
      </Box>
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return (
            <>
              <Box
                width={'100%'}
                height={{ base: '799px', md: '100vh' }}
                bgImage={slide.image}
                bgPosition="center"
                bgRepeat={'no-repeat'}
                bgSize="cover"
                key="1"
              >
                <Center height={'100vh'} width="100%">
                  <VStack spacing="20px">
                    <Text color="#fff" fontWeight={'600'} fontSize={{ base: '16px', md: '24px' }}>
                      Lörem ipsum paradysamma sorument regt suprasade dende paskapet defåneheten.
                    </Text>
                    <Link href="/">
                      <Button
                        height={{ base: '40px', md: '56px' }}
                        width={{ base: '140px', md: '345px' }}
                        fontWeight={'600'}
                        fontSize={{ base: '16px', md: '24px' }}
                        bgColor={'rgba(138, 212, 64, 0.85)'}
                        color="#fff"
                        _hover={{ bg: 'rgba(138, 212, 64, 0.85)' }}
                        _active={{
                          bg: 'rgba(138, 212, 64, 0.85)',
                          transform: 'scale(0.98)',
                        }}
                      >
                        {heroButton}
                      </Button>
                    </Link>
                  </VStack>
                </Center>
                {/* <Image position={'inherit'} src={slide.image} key='1' height="100vh" alt="hero-slider" width="800px" /> */}
              </Box>
            </>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default HeroSlider;