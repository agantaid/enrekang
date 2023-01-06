import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import CardFacilities from './cardFacilities';

const Facilities = ({ facilities }) => {
  return (
    <Box mb="50px" mt={{ base: '252px', lg: '0px' }}>
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
            {facilities?.map((facility) => (
              <CardFacilities
                key={facility.id}
                title={facility.name}
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${facility.image.name}`}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Facilities;
