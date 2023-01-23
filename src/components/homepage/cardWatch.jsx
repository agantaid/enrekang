import { Box, Center } from '@chakra-ui/react';
import { Player } from 'video-react';

const CardWatch = () => {
  return (
    <Center mx="10px">
      <Box
        width={{ base: '100%', md: '650px', lg: '650px' }}
        height={{ base: '160px', md: '200px', lg: '420px' }}
      >
        <Player poster="/bg-hero-home.jpg" playsInline src="/live.mp4" />
      </Box>
    </Center>
  );
};

export default CardWatch;
