import { Box, Text, Image, Link } from '@chakra-ui/react';
import { useState } from 'react';

const CardInspiration = ({ title, image }) => {
  const [isVisible, setIsVisible] = useState(false);

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  return (
    <Box
      width={'196px'}
      height="248px"
      backgroundImage={image}
      bgRepeat="no-repeat"
      bgPosition={'center'}
      bgSize="cover"
      borderRadius={'15px'}
      _hover={{ transitionDelay: '0.5s' }}
      onMouseOver={over}
      onMouseOut={out}
    >
      {/* <Image borderRadius={'15px'} _hover={{ transitionDelay:'0.5s' }} onMouseOver={over} onMouseOut={out}  width={'100%'} height='264px' src='/travel-inpirasi1.png' alt='inspiration' /> */}
      <Link
        href="/viewDestinasi"
        style={{ textDecoration: 'none' }}
        display={isVisible ? 'block' : 'none'}
      >
        <Text ml={'10px'} mt="200px" color="#fff" fontSize={'16px'} fontWeight="600">
          {title}
        </Text>
      </Link>
    </Box>
  );
};
export default CardInspiration;
