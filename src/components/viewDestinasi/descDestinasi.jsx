import axios from '@/utils/axios';
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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Map from '../explore/Map';
import styles from '../explore/Map/Map.module.css';

const DescDestinasi = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tourism, setTourism] = useState({});

  useEffect(() => {
    axios.get(`/api/v1/tourisms/${id}`).then(({ data }) => setTourism(data));
  }, [id]);

  return (
    <Box pt="80px" pb="80px">
      <Container maxW="6xl">
        <Text fontSize={'36px'} fontWeight="700">
          {router.locale === 'id' ? tourism?.title : tourism?.title_en}
        </Text>
        <Text mt="8px" mb="35px" fontSize={'24px'} fontWeight="500" color="#808080">
          {router.locale === 'id' ? tourism?.sub_title : tourism?.sub_title_en}
        </Text>
        <Flex direction={{ base: 'column', lg: 'row' }} gap="34px">
          <Box textAlign={'justify'}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${tourism?.image?.name}`}
              maxW={{ base: 'auto', md: '706px' }}
              height={{ base: 'auto', md: '357px' }}
              alt="View Destinasi Description"
            />
            <Text maxW="706px" mt="20px" fontSize={'16px'} fontWeight="400" color={'#222222'}>
              {router.locale === 'id' ? tourism?.desc : tourism?.desc_en}
            </Text>
          </Box>
          <Box width={'100%'} height="164px">
            <Card maxW="sm" bgColor="transparent">
              <CardBody>
                {tourism.location && (
                  <Map
                    className={styles.homeMap}
                    center={[
                      parseFloat(tourism.location.longitude),
                      parseFloat(tourism.location.latitude),
                    ]}
                    zoom={12}
                  >
                    {({ TileLayer, Marker, Popup }) => (
                      <>
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker
                          position={[parseFloat(tourism.latitude), parseFloat(tourism.longitude)]}
                        >
                          <Popup>{tourism.title}</Popup>
                        </Marker>
                      </>
                    )}
                  </Map>
                )}
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex maxW="100%" justifyContent={'space-around'}>
                  <Link href={'/viewDestinasi'} style={{ textDecoration: 'none' }}>
                    <Button
                      rightIcon={
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
                      }
                      variant="ghost"
                      colorScheme="blue"
                    >
                      Navigation
                    </Button>
                  </Link>
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
