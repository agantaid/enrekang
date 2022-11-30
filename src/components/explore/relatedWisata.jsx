import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import SliderCard from '../homepage/cardWisata';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';
import SliderRelatedWisata from './SliderRelatedWisata';

const RelatedWisata = (props) => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { visitTitle, visitDesc } = langHome[locale];
  return (
    <Box>
      <Container maxW="8xl">
        <Box px={{ md: '20px', xl: '142px' }} pb="78px">
          <SliderRelatedWisata />
        </Box>
      </Container>
    </Box>
  );
};

export default RelatedWisata;
