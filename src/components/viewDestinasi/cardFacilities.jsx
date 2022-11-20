import { Box, Text } from '@chakra-ui/react';

const CardFacilities = ({ image, title }) => {
  return (
    <Box
      borderRadius={'5px'}
      pl="17px"
      pb="20px"
      pt="180px"
      width={'200px'}
      height={'222px'}
      bgImage={image}
      bgRepeat={'no-repeat'}
      bgPosition="center"
      bgSize={'cover'}
    >
      <Text fontSize={'16px'} fontWeight="500" fontFamily={'Inter'} color="#fff">
        {title}
      </Text>
    </Box>
  );
};

export default CardFacilities;
