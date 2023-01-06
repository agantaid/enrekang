import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import SliderRelatedWisata from './SliderRelatedWisata';

const RelatedWisata = ({ location }) => {
  return (
    <Box>
      <Container maxW="8xl">
        <Box px={{ md: '20px', xl: '142px' }} pb="78px">
          <SliderRelatedWisata location={location} />
        </Box>
      </Container>
    </Box>
  );
};

export default RelatedWisata;
