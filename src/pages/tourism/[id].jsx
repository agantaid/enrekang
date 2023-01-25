import CardWisata from '@/components/homepage/cardWisata';
import langHome from '@/components/homepage/lang';
import axios from '@/utils/axios';
import { Box, Container, Flex, HStack, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Tourism = () => {
  const router = useRouter();
  const { id } = router.query;
  const { locale } = router;
  const [tourism, setTourism] = useState([]);

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/v1/tourisms?trips=${id}`).then(({ data }) => setTourism(data));
  }, [id]);

  return (
    <>
      <Container maxW="6xl" mt={'60px'} pb="100px">
        <Flex direction={'column'}>
          <Box>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <HStack spacing={'16px'}>
                <Stack>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59375 19.1252L0.34375 10.8752C0.21875 10.7502 0.13 10.6148 0.0774997 10.469C0.0258331 10.3231 0 10.1669 0 10.0002C0 9.83356 0.0258331 9.67731 0.0774997 9.53147C0.13 9.38564 0.21875 9.25022 0.34375 9.12522L8.59375 0.875225C8.82292 0.646058 9.10917 0.526059 9.4525 0.515225C9.79667 0.505225 10.0937 0.625225 10.3437 0.875225C10.5937 1.10439 10.7242 1.39064 10.735 1.73398C10.745 2.07814 10.625 2.37522 10.375 2.62522L4.25 8.75022H18.2188C18.5729 8.75022 18.87 8.86981 19.11 9.10897C19.3492 9.34897 19.4688 9.64606 19.4688 10.0002C19.4688 10.3544 19.3492 10.6511 19.11 10.8902C18.87 11.1302 18.5729 11.2502 18.2188 11.2502H4.25L10.375 17.3752C10.6042 17.6044 10.7242 17.8961 10.735 18.2502C10.745 18.6044 10.625 18.8961 10.375 19.1252C10.1458 19.3752 9.85417 19.5002 9.5 19.5002C9.14583 19.5002 8.84375 19.3752 8.59375 19.1252Z"
                      fill="#454545"
                    />
                  </svg>
                </Stack>
                <Text fontSize={'16px'} fontWeight="500" color={'#454545'}>
                  {langHome[locale].back}
                </Text>
              </HStack>
            </Link>
          </Box>
          <Box>
            <Box mt="50px">
              <Flex justifyContent={'space-between'}>
                <HStack spacing="18px">
                  <Text fontSize={'32px'} fontWeight="600">
                    {langHome[locale][id]}
                  </Text>
                </HStack>
              </Flex>
              <Box mt="25px" ml="20px">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="30px">
                  {tourism?.map((item) => (
                    <CardWisata
                      key={item.id}
                      id={item.id}
                      image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${item.image.name}`}
                      title={locale === 'id' ? item.title : item.title_en}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Tourism;
