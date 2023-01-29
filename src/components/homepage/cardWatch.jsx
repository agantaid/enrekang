import { Box, Center } from '@chakra-ui/react';
import { BigPlayButton, Player } from 'video-react';

const CardWatch = ({ src }) => {
  return (
    <Center mx="10px">
      <Box
        width={{ base: '100%', md: '650px', lg: '650px' }}
        height={{ base: '160px', md: '200px', lg: '420px' }}
      >
        {/* poster="/bg-hero-home.jpg" add thumbnail as property on Player */}
        <Player playsInline src={src}>
          <BigPlayButton position="center" />
        </Player>
      </Box>
    </Center>
  );
};

export default CardWatch;
