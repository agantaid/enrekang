import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';
import CardInpiration from './cardInpiration';
// import "./Module.cardInpiration.css"

const InspirtaionTravel = () => {
  return (
    <>
      <Container maxW={'6xl'} pb="54px">
        <Box>
          <Text fontSize={'40px'} fontWeight="500">
            Travel Inspiration
          </Text>
          <Text fontSize={'20px'} fontWeight="400" mt="4px" mb="36px">
            Lörem ipsum paradysamma sorument regt suprasade dende paskapet defåneheten.{' '}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 5 }} spacing={22}>
          <CardInpiration image={'/travel-inpirasi1.png'} />
          <CardInpiration image={'/travel-inpirasi2.png'} />
          <CardInpiration image={'/travel-inpirasi3.png'} />
          <CardInpiration image={'/travel-inpirasi4.png'} />
          <CardInpiration image={'/travel-inpirasi5.png'} />
          <CardInpiration image={'/travel-inpirasi5.png'} />
          <CardInpiration image={'/travel-inpirasi4.png'} />
          <CardInpiration image={'/travel-inpirasi3.png'} />
          <CardInpiration image={'/travel-inpirasi2.png'} />
          <CardInpiration image={'/travel-inpirasi1.png'} />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default InspirtaionTravel;
