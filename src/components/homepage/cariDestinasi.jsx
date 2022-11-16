import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';

const CariDestinasi = () => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { findTitle, findDesc, findButton } = langHome[locale];

  return (
    <Container maxW="8xl">
      <Box px={{ md: '20px', xl: '182px' }}>
        <Flex
          gap={{ md: '40px', xl: '88px' }}
          direction={{ base: 'row-reverse', md: 'row', lg: 'row' }}
          alignItems="center"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Image
            width={{ base: '140px', md: '340px', lg: '475px' }}
            height="auto"
            src="/icon-find.png"
            alt="Find Destination"
          />
          <Box width={'374px'}>
            <Text fontSize={{ md: '24px', lg: '40px' }} fontWeight="600">
              {findTitle}
            </Text>
            <Text mt="10px" mb="63px" fontSize={{ base: '10px', md: '16px' }} fontWeight="400">
              {findDesc}
            </Text>
            <Button
              height={{ base: '34px', md: '61px' }}
              width={{ base: '148px', md: '276px' }}
              bg={'transparent'}
              fontSize={{ base: '13px', md: '24px' }}
              border="1px solid #000000"
              _hover={{ bg: 'transparent' }}
              _active={{
                bg: 'transparent',
                transform: 'scale(0.98)',
              }}
            >
              {findButton}
            </Button>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default CariDestinasi;
