import { Box, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import CardFacilities from './cardFacilities';

const Facilities = () => {
  return (
    <Box mb="50px">
      <Container maxW="6xl">
        <Flex direction={{ base: 'column', md: 'row' }} gap="32px">
          <Box maxW={'200px'} height={'222px'} mx={{ base: 'auto', md: '0px' }}>
            <Text fontSize={'24px'} fontWeight="500">
              Available Facilities
            </Text>
            <Text fontSize={'15px'} fontWeight="400" color="#454545" mt="64px">
              Dapatkan Fasilitas menarik di sekitar destinasi
            </Text>
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing="20px"
            mx={{ base: 'auto', md: '0px' }}
          >
            <CardFacilities title="Resort" image="/view-facilities1.png" />
            <CardFacilities title="Guid" image="/view-facilities2.png" />
            <CardFacilities title="Hot springs" image="/view-facilities3.png" />
            <CardFacilities title="Tools Rental" image="/view-facilities4.png" />
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Facilities;
