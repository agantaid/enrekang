import { Box, Container, Flex, Select, Text } from '@chakra-ui/react';
import Map from './Map';
import styles from '../explore/Map/Map.module.css';
import { useEffect, useState } from 'react';
import axios from '@/utils/axios';
// import dynamic from 'next/dynamic'

// const MapContainer = dynamic(()=>import('react-leaflet/MapContainer'),{
//     ssr:false,
// })

// const Marker = dynamic(()=>import('react-leaflet/Marker'),{
//     ssr:false,
// })
// const Popup = dynamic(()=>import('react-leaflet/Popup'),{
//     ssr:false,
// })
// const TileLayer = dynamic(()=>import('react-leaflet/TileLayer'),{
//     ssr:false,
// })

const TourismSpot = () => {
  const [locations, setLocations] = useState([]);
  const DEFAULT_CENTER = [-3.5631279, 119.7612];

  useEffect(() => {
    axios.get('/api/v1/locations').then(({ data }) => setLocations(data.data));
  }, []);
  return (
    <>
      <Box pt="102px" pb="52px">
        <Container maxW={'6xl'}>
          <Flex
            direction={{ base: 'column-reverse', lg: 'row' }}
            gap="36px"
            justifyContent={'space-between'}
          >
            <Box
              // bgImage={'map-spot.png'}
              // bgRepeat="no-repeat"
              // bgPosition={'center'}
              // bgSize="cover"
              width={'100%'}
              height="364px"
            >
              <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={10}>
                {({ TileLayer, Marker, Popup }) => (
                  <>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {locations?.map((location) => (
                      <Marker
                        key={location.id}
                        position={[parseFloat(location.longitude), parseFloat(location.latitude)]}
                      >
                        <Popup>{location.name}</Popup>
                      </Marker>
                    ))}
                  </>
                )}
              </Map>
            </Box>
            <Box>
              <Text fontSize={'40px'} fontWeight="500">
                Choose your tourism spot
              </Text>
              <Text my="8px" fontSize={'20px'} fontWeight="400">
                Telusuri spot menarik di kabupaten Enrekang sekarang
              </Text>
              <Select placeholder="Silahkan Pilih" size="lg" shadow={'xl'}>
                {locations?.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </Select>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default TourismSpot;
