import { Box, Flex, Stack, Text, VStack, Image, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';

const TourVisit = (props) => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { toursTitle, toursTitle1, toursTitle2, toursTitle3, toursDesc1, toursDesc2, toursDesc3 } =
    langHome[locale];

  return (
    <Container id="tours-visit" maxW="8xl">
      <Box
        width={{ base: '300px', md: '100%' }}
        bgColor="#fff"
        mt={{ base: '10px', md: '0px' }}
        mx={{ base: 'auto', md: '0px' }}
        shadow={{ base: 'xl', md: 'none' }}
        borderRadius={{ base: '10px', md: '0px' }}
      >
        <Box
          width={{ base: '70%', md: '100%' }}
          height={'auto'}
          pl={{ base: '10px', md: '20px', xl: '186px' }}
          py={{ base: '12px', md: '120px', lg: '134px' }}
          pr={{ base: '10px', md: '20px', xl: '200px' }}
        >
          <Flex
            direction={{ md: 'row', lg: 'row', xl: 'row' }}
            justifyContent={{ base: 'space-between', md: 'normal' }}
            gap={{ base: '0px', md: '20px', lg: '81px' }}
            textAlign={'left'}
          >
            <Stack
              direction="column"
              spacing={{ base: '20px', md: '60px' }}
              mt={{ base: '8px', md: '38px' }}
            >
              <Text fontWeight={'600'} fontSize={{ base: '14px', md: '26px' }}>
                {toursTitle}
              </Text>
              <Stack direction="row" spacing={'23px'}>
                <Image
                  src="/icon-nature.png"
                  width={{ base: '26px', md: '36px', lg: '62px' }}
                  height={{ base: '22px', md: '32px', lg: '54px' }}
                  alt="Nature Tour"
                />
                <VStack spacing="4px" alignItems={'flex-start'}>
                  <Text fontSize={{ base: '13px', md: '24px' }} fontWeight="600">
                    {toursTitle1}
                  </Text>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '20px' }}
                    fontWeight="400"
                  >
                    {toursDesc1}
                  </Text>
                </VStack>
              </Stack>
              <Stack direction="row" spacing={'23px'}>
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
              <Stack direction="row" spacing={'23px'}>
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
            </Stack>

            <Box width={{ md: 'auto', lg: 'auto' }} mt={{ base: '70px', md: '100px', lg: '0px' }}>
              <Image
                width={{ base: '65px', md: '214px', lg: '315px' }}
                height={{ base: '65px', md: '214px', lg: '315px' }}
                src="/nature-tour.png"
                alt="nature tour"
                position={'absolute'}
              />
              <Image
                width={{ base: '65px', md: '214px', lg: '315px' }}
                height={{ base: '65px', md: '214px', lg: '315px' }}
                src="/culture-tour.png"
                marginLeft={{ base: '20px', md: '60px', lg: '100px' }}
                alt="culture tour"
                marginTop={{ base: '42px', md: '136px' }}
                position={'absolute'}
                style={{}}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default TourVisit;
