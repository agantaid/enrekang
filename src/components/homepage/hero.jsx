import { Box, Button, Image, Input, Stack, Text } from '@chakra-ui/react';
import Navbar from '../navbar';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';

const Hero = (props) => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { heroTitle, heroDesc, heroButton } = langHome[locale];

  return (
    <Box
      pl={{ base: '24px', md: '40px', xl: '182px' }}
      pr={{ base: '24px', md: '40px', xl: '123px' }}
      py={{ base: '40px', md: '67px' }}
      width={'100%'}
      height={{ base: '799px', md: '100vh' }}
      bgImage={'/bg-hero-home.jpg'}
      bgPosition="center"
      bgRepeat={'no-repeat'}
      bgSize="cover"
    >
      <Navbar pageTitle={'Home'} />
      <Box
        width={{ md: '100%', xl: '583px' }}
        height="auto"
        mt={{ base: '60px', md: '214px' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontSize={{ base: '36px', md: '55px' }} fontWeight="800" color="#FFFEFE">
          {heroTitle}
        </Text>
        <Text
          w={{ base: '260px', md: '524px' }}
          fontSize={{ base: '12px', md: '16px' }}
          fontWeight="400"
          color="#FFFEFE"
          lineHeight={'180%'}
        >
          {heroDesc}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing="25px" mt="26px">
          <Input
            width={{ base: '100%', md: '345px' }}
            height="48px"
            type={'text'}
            color="#FFFEFE"
            placeholder="example@gmail.com"
            _placeholder={{ opacity: 1, color: '#FFFEFE' }}
            border="2px solid #EAE6E6"
          />
          <Button
            size="md"
            height="48px"
            width={{ base: '100%', md: '178px' }}
            color={{ base: '#fff', md: '#454545' }}
            bgColor={{ base: '#8AD440', md: 'rgba(255, 254, 254, 0.66)' }}
            borderRadius="10px"
            _hover={{ bg: { base: '#8AD440', md: 'rgba(255, 254, 254, 0.66)' } }}
            _active={{
              bg: { base: '#8AD440', md: 'rgba(255, 254, 254, 0.66)' },
              transform: 'scale(0.98)',
            }}
          >
            {heroButton}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
