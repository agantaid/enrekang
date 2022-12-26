import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CardIdeas from './cardIdeas';

const TripIdeas = ({ tourism }) => {
  const { locale } = useRouter();

  return (
    <Box mb="50px">
      <Container maxW="6xl">
        <Text fontSize={'25px'} mb="30px" fontWeight="600">
          Destination Trip Ideas
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap="40px">
          {tourism?.trips?.map((trip) => (
            <CardIdeas
              key={trip.id}
              image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${trip.image.name}`}
              title={locale === 'id' ? trip.title : trip.title_en}
              desc={locale === 'id' ? trip.desc : trip.desc_en}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TripIdeas;
