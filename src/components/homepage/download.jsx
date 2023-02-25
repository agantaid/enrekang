import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';

const Download = () => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { downloadTitle, downloadDesc, downloadButton } = langHome[locale];

  return (
    <Container maxW={'8xl'} px={{ lg: '0px', xl: '183px' }}>
      <Box
        mt="205px"
        mb={{ base: '35px', lg: '205px' }}
        pl="106px"
        pt="83px"
        pb="43px"
        pr="40px"
        width={{ md: 'auto', lg: '1024px', xl: '1074px' }}
        height="333px"
        bgImage={'/bg-download.png'}
        bgSize="cover"
        bgRepeat={'no-repeat'}
        bgPosition="center"
      >
        <Flex direction={'row'} justifyContent="space-between">
          <Box>
            <Text fontSize={'40px'} fontWeight="600" color="#fff">
              {downloadTitle}
            </Text>
            <Text
              mt="4px"
              mb="31px"
              fontSize={{ lg: '16px', xl: '20px' }}
              fontWeight="500"
              color="#fff"
            >
              {downloadDesc}
            </Text>
            <Link href="https://play.google.com/store/apps/details?id=id.dispoparenrekang.twa">
              <Button
                height="52px"
                width="310px"
                shadow={'md'}
                bgColor={'rgba(255, 254, 254, 0.8)'}
                color="#8AD440"
                _hover={{ bg: 'rgba(255, 254, 254, 0.8)' }}
                _active={{
                  bg: 'rgba(255, 254, 254, 0.8)',
                  transform: 'scale(0.98)',
                }}
              >
                {downloadButton}
              </Button>
            </Link>
          </Box>
          <Image
            mt="-204px"
            ml={{ lg: '520px', xl: '569px' }}
            width="334px"
            height={'534px'}
            src="/icon-downloadapp.png"
            position="absolute"
            alt="icon-download"
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default Download;
