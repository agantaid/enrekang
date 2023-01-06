import axios from '@/utils/axios';
import {
  Box,
  Flex,
  Stack,
  Text,
  VStack,
  Image,
  Container,
  SimpleGrid,
  Center,
  Hide,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import langHome from '../homepage/lang';

const TourVisit = () => {
  const { locale } = useRouter();
  const {
    toursTitle,
    toursTitle1,
    toursTitle2,
    toursTitle3,
    toursTitle4,
    toursTitle5,
    toursTitle6,
    toursTitle7,
    toursDesc1,
    toursDesc2,
    toursDesc3,
    toursDesc4,
    toursDesc5,
    toursDesc6,
    toursDesc7,
  } = langHome[locale];
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/tourisms?trips=true').then(({ data }) => setTours(data.data));
  }, []);

  return (
    <Container id="tours-visit" maxW="8xl">
      <Box
        pt={{ base: '40px', sm: '176px', md: '60px', lg: '120px', xl: '120px', '2xl': '347px' }}
        width={{ base: '300px', md: '100%' }}
        bgColor="#fff"
        mt={{ base: '10px', md: '0px' }}
        mx={{ base: 'auto', md: '0px' }}
        shadow={{ base: 'xl', md: 'none' }}
        borderRadius={{ base: '10px', md: '0px' }}
      >
        <Box
          width={{ base: '80%', md: '100%' }}
          height={'auto'}
          pl={{ base: '10px', md: '20px', xl: '40px' }}
          py={{ base: '12px', md: '120px', lg: '120px' }}
          pr={{ base: '10px', md: '20px', xl: '40px' }}
        >
          <Flex
            direction={'column'}
            justifyContent={{ base: 'space-between', md: 'normal' }}
            gap={{ base: '0px', md: '20px', lg: '81px' }}
            textAlign={'left'}
          >
            <Center mb="40px">
              <Text fontWeight={'600'} fontSize={{ base: '16px', md: '28px', lg: '40px' }}>
                {toursTitle}
              </Text>
            </Center>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2, xl: 3 }}
              spacing={{ base: '20px', md: '60px' }}
              mt={{ base: '8px', md: '38px' }}
              mb={{ base: '20px', lg: '0px' }}
            >
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/icon-nature.png"
                  width={{ base: '26px', md: '36px', lg: '57px' }}
                  height={{ base: '22px', md: '32px', lg: '42.54px' }}
                  alt="Nature Tour"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Link href="/natureTourism" style={{ textDecoration: 'none' }}>
                    <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                      {toursTitle1}
                    </Text>
                  </Link>

                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc1}
                  </Text>
                </VStack>
              </Stack>
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/icon-culture.png"
                  width={{ base: '25px', md: '45px', lg: '62px' }}
                  height={{ base: '20px', md: '40px', lg: '54px' }}
                  alt="Nature Tour"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle2}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc2}
                  </Text>
                </VStack>
              </Stack>
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/icon-tourist.png"
                  width={{ base: '25px', md: '45px', lg: '62px' }}
                  height={{ base: '20px', md: '40px', lg: '54px' }}
                  alt="Nature Tour"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle3}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc3}
                  </Text>
                </VStack>
              </Stack>
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/ico-hanmade.png"
                  width={{ base: '25px', md: '45px', lg: '62px' }}
                  height={{ base: '20px', md: '40px', lg: '54px' }}
                  alt="Handmade Tour"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle4}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc4}
                  </Text>
                </VStack>
              </Stack>
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/ico-culinary.png"
                  width={{ base: '25px', md: '45px', lg: '62px' }}
                  height={{ base: '20px', md: '40px', lg: '54px' }}
                  alt="Culinary Tour"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle5}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc5}
                  </Text>
                </VStack>
              </Stack>
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/ico-interest.png"
                  width={{ base: '25px', md: '45px', lg: '62px' }}
                  height={{ base: '20px', md: '40px', lg: '54px' }}
                  alt="Special Interest"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle6}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc6}
                  </Text>
                </VStack>
              </Stack>
              <Hide below="xl">
                <Box></Box>
              </Hide>
              <Stack ml={{ base: '40px', md: '0px', lg: '0px' }} direction="row" spacing={'23px'}>
                <Image
                  src="/ico-interest.png"
                  width={{ base: '25px', md: '45px', lg: '62px' }}
                  height={{ base: '20px', md: '40px', lg: '54px' }}
                  alt="History Tourism"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle7}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc7}
                  </Text>
                </VStack>
              </Stack>
            </SimpleGrid>

            {/* <Box
              width={{ md: 'auto', lg: 'auto' }}
              mt={{ base: '70px', md: '100px', lg: 'auto' }}
              mb={{ lg: 'auto' }}
            >
              <Carousel infiniteLoop showArrows={false} showIndicators={false} autoPlay>
                {tours?.map((slide) => {
                  return (
                    <>
                      <Image
                        width={{ base: '65px', md: '214px', lg: '315px' }}
                        height={{ base: '65px', md: '214px', lg: '315px' }}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${slide.image.name}`}
                        alt={slide.desc}
                        borderRadius="10"
                      />
                    </>
                  );
                })}
              </Carousel>
            </Box> */}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default TourVisit;
