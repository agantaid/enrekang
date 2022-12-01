import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import SliderRelatedWisata from './SliderRelatedWisata';

const RelatedWisata = () => {
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
