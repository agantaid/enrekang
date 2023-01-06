import langHome from '../homepage/lang';
import { Box, Flex, Text, Container, AspectRatio } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Youtube = ({ settings }) => {
  const { locale } = useRouter();
  const { ytTitle, ytDesc } = langHome[locale];

  return (
    <Box
      mb={{ base: '35px', lg: '120px' }}
      mt={{ base: '35px' }}
      width={'100%'}
      height={{ base: '500px', sm: 'auto', md: '682px', xl: '472px' }}
      py="63px"
      px={{ base: '20px', md: '40px', lg: '120px' }}
      bgImage="/bg-youtube.png"
      bgSize="cover"
      bgRepeat={'no-repeat'}
      bgPosition="center"
    >
      <Container maxW="8xl">
        <Box>
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

            {/* youtube */}
            <Box>
              <AspectRatio width={{ base: 'auto', lg: '639px' }} ratio={2} shadow="xl">
                <iframe
                  title="Enrekang dan Sejuta Potensi Pariwisatanya."
                  src={settings && settings[0]?.video}
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Youtube;
