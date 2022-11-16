import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import SliderCard from './sliderCardWisata';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';

const TempatWisata = (props) => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { visitTitle, visitDesc } = langHome[locale];
  return (
    <Box>
      <Center>
        <VStack spacing={'4px'} pt="32px" pb="38px">
          <Text fontSize={{ base: '18px', md: '40px' }} fontWeight="600">
            {visitTitle}
          </Text>
          <Text fontSize={{ base: '10px', md: '16px' }} fontWeight="400">
            {visitDesc}
          </Text>
        </VStack>
      </Center>

      <Container maxW="8xl">
        <Box px={{ md: '20px', xl: '142px' }} pb="78px">
          <SliderCard />
        </Box>
      </Container>
    </Box>
  );
};

export default TempatWisata;
