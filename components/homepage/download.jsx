import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';

const Download = () => {
  return (
    <Container maxW={'8xl'} px={{ lg: '0px', xl: '183px' }}>
      <Box
        mt="205px"
        pl="106px"
        pt="83px"
        pb="43px"
        pr="40px"
        width={'1074px'}
        height="333px"
        bgImage={'/bg-download.png'}
        bgSize="cover"
        bgRepeat={'no-repeat'}
        bgPosition="center"
      >
        <Flex direction={'row'} justifyContent="space-between">
          <Box>
            <Text fontSize={'40px'} fontWeight="600" color="#fff">
              Download Now{' '}
            </Text>
            <Text mt="4px" mb="31px" fontSize={'20px'} fontWeight="500" color="#fff">
              download now and get new experience journey
            </Text>
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
              Download Now
            </Button>
          </Box>
          <Image
            mt="-204px"
            ml={{ lg: '375px', xl: '569px' }}
            width="546px"
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
