import langHome from '../homepage/lang';
import { Box, Flex, Text, Container, AspectRatio } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Youtube = () => {
  const { locale } = useRouter();
  const { ytTitle, ytDesc } = langHome[locale];

  return (
    <Container maxW="8xl" my="120px">
      <Box
        width={'100%'}
        height={{ md: '682px', xl: '472px' }}
        py="63px"
        px={{ base: '20px', md: '40px', lg: '120px' }}
        bgImage="/bg-youtube.png"
        bgSize="cover"
        bgRepeat={'no-repeat'}
        bgPosition="center"
      >
        <Box my="auto">
          <Flex
            direction={{ base: 'column', md: 'column', xl: 'row' }}
            gap="36px"
            textAlign={{ base: 'center', md: 'center', xl: 'left' }}
          >
            <Box width={'auto'} my="auto">
              <Text
                mb="8px"
                fontSize={{ base: '20px', md: '36px', lg: '36px' }}
                fontWeight="700"
                color="#fff"
                fontFamily="Poppins"
              >
                {ytTitle}
              </Text>
              <Text
                fontSize={{ base: '16px', md: '20px', lg: '20px' }}
                fontWeight="500"
                color="#fff"
                fontFamily="Poppins"
              >
                {ytDesc}
              </Text>
            </Box>
            <Box>
              <AspectRatio width={{ base: 'auto', lg: '639px' }} ratio={2} shadow="xl">
                <iframe
                  title="Enrekang dan Sejuta Potensi Pariwisatanya."
                  src="https://www.youtube.com/embed/jifDyOXmKEM"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Youtube;
