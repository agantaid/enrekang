import axios from '@/utils/axios';
import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import langHome from '../homepage/lang';
import CardInspiration from './cardInspiration';

const InspirtaionTravel = () => {
  const { locale } = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/inspirations').then(({ data }) => setData(data.data));
  }, []);

  return (
    <>
      <Container maxW={'6xl'} pb="54px">
        <Box>
          <Text fontSize={'40px'} fontWeight="500">
            {langHome[locale].inspirasiTitle}
          </Text>
          <Text fontSize={'20px'} fontWeight="400" mt="4px" mb="36px">
            {langHome[locale].inspirasiDesc}
          </Text>
        </Box>
        <SimpleGrid justifyItems={'center'} columns={{ base: 1, md: 3, lg: 4, xl: 5 }} spacing={22}>
          {data?.map((item) => (
            <CardInspiration
              key={item.id}
              title={locale === 'id' ? item.title : item.title_en}
              desc={locale === 'id' ? item.desc : item.desc_en}
              link={`/view-destinasi/${item.id}`}
              image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${item.images[0].name}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default InspirtaionTravel;
