import { Box, Container, Flex, Select, Text } from '@chakra-ui/react';
import Map from './Map';
import styles from '../explore/Map/Map.module.css';
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
  const DEFAULT_CENTER = [38.907132, -77.036546];
  // const position = [51.505, -0.09]
  return (
    <>
      <Box pt="102px" pb="52px">
        <Container maxW={'6xl'}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap="36px"
            justifyContent={'space-between'}
          >
            <Box
              bgImage={'map-spot.png'}
              bgRepeat="no-repeat"
              bgPosition={'center'}
              bgSize="cover"
              width={'100%'}
              height="541px"
            >
              {/* <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
                                {({ TileLayer, Marker, Popup }) => (
                                    <>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                    />
                                    <Marker position={DEFAULT_CENTER}>
                                        <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>
                                    </>
                                )}
                            </Map> */}
            </Box>
            <Box>
              <Text fontSize={'40px'} fontWeight="500">
                Choose your tourism spot
              </Text>
              <Text my="8px" fontSize={'20px'} fontWeight="400">
                Lörem ipsum paradysamma sorument regt suprasade dende paskapet defåneheten.{' '}
              </Text>
              <Select placeholder="Silahkan Pilih" size="lg" shadow={'xl'}>
                <option value="option1">Kecamatan Duri</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default TourismSpot;
