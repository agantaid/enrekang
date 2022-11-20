import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const DescDestinasi = () => {
  return (
    <Box pt="80px" pb="80px">
      <Container maxW="6xl">
        <Text fontSize={'36px'} fontWeight="700">
          Name Destination
        </Text>
        <Text mt="8px" mb="35px" fontSize={'24px'} fontWeight="500" color="#808080">
          Name Destination
        </Text>
        <Flex direction={{ base: 'column', lg: 'row' }} gap="34px">
          <Box textAlign={'justify'}>
            <Image
              src="/view-destinasi.png"
              maxW={{ base: 'auto', md: '706px' }}
              height={{ base: 'auto', md: '357px' }}
              alt="View Destinasi Description"
            />
            <Text maxW="706px" mt="20px" fontSize={'16px'} fontWeight="400" color={'#222222'}>
              Lörem ipsum egen parade antetåna unde, för bese ågyr och parakartad i nil syledes
              kaning. Platögen mire egosm decimina på nende behungen. Katt premogt kvasiryra av
              mirade ber prebest inte kror akadat, kavis.
              <br />
              Lörem ipsum egen parade antetåna unde, för bese ågyr och parakartad i nil syledes
              kaning. Platögen mire egosm decimina på nende behungen. Lörem ipsum egen parade
              antetåna unde, för bese ågyr och parakartad i nil syledes kaning. Platögen mire egosm
              decimina på nende behungen. parakartad i nil syledes kaning. Platögen mire egosm
              decimina på nende behungen.
            </Text>
          </Box>
          <Box>
            <Card maxW="sm" bgColor="transparent">
              <CardBody>
                <Image
                  width={'100%'}
                  height="291px"
                  src="/maps-destinasi.png"
                  alt="Maps Destinasi"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex maxW="100%" justifyContent={'space-around'}>
                  <Link href={'/viewDestinasi'} style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" colorScheme="blue">
                      Navigation
                    </Button>
                  </Link>
                  <Stack>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.3126 10.6875L19.7917 18.2083"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.7708 10.6875H27.3124V16.2292"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.9583 22.9582V27.3123L10.6875 27.3123L10.6875 15.0415H15.0417"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default DescDestinasi;
