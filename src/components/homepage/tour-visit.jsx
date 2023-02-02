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
          py={{ base: '12px', md: '60px', lg: '120px' }}
          pr={{ base: '10px', md: '20px', xl: '40px' }}
        >
          <Flex
            direction={'column'}
            justifyContent={{ base: 'space-between', md: 'normal' }}
            gap={{ base: '0px', md: '20px', lg: '81px' }}
            textAlign={'left'}
          >
            <Center mb="40px">
              <Text fontWeight={'600'} fontSize={{ base: '16px', md: '28px', lg: '36px' }}>
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
                  <Link href={`/tourism/nature`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle1}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
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
                  <Link href={`/tourism/culture`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle2}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
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
                  <Link href={`/tourism/tourist`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle3}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
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
                  <Link href={`/tourism/manmade`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle4}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
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
                  <Link href={`/tourism/culinary`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle5}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
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
                  <Link href={`/tourism/special`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle6}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
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
                  <Link href={`/tourism/history`} style={{ textDecoration: 'none' }}>
                    <Text
                      cursor="pointer"
                      fontSize={{ base: '13px', md: '20px' }}
                      color="#000000"
                      fontWeight="600"
                    >
                      {toursTitle7}
                    </Text>
                  </Link>
                  <Text
                    width={{ base: 'auto', lg: '372px' }}
                    fontSize={{ base: '10px', md: '16px' }}
                    color="#454545"
                    fontWeight="400"
                  >
                    {toursDesc7}
                  </Text>
                </VStack>
              </Stack>
            </SimpleGrid>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default TourVisit;
