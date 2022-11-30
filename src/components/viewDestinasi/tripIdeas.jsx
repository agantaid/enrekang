import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import CardIdeas from './cardIdeas';

const TripIdeas = () => {
  return (
    <Box mb="50px">
      <Container maxW="6xl">
        <Text fontSize={'25px'} mb="30px" fontWeight="600">
          Destination Trip Ideas
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap="40px">
          <CardIdeas
            image={'/trip-ideas1.png'}
            title="Title Trip Idea"
            desc={'Lörem ipsum matsvinnsbutik megase det vill säga infravis, bons, menskopp utan'}
          />
          <CardIdeas
            image={'/trip-ideas2.png'}
            title="Title Trip Idea"
            desc={'Lörem ipsum matsvinnsbutik megase det vill säga infravis, bons, menskopp utan'}
          />
          <CardIdeas
            image={'/trip-ideas3.png'}
            title="Title Trip Idea"
            desc={'Lörem ipsum matsvinnsbutik megase det vill säga infravis, bons, menskopp utan'}
          />
          <CardIdeas
            image={'/trip-ideas4.png'}
            title="Title Trip Idea"
            desc={'Lörem ipsum matsvinnsbutik megase det vill säga infravis, bons, menskopp utan'}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TripIdeas;
