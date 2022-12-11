import { Box, Flex, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';

const CardTestimoni = ({ name, comment, destination, job, image }) => {
  return (
    <Box>
      <Flex direction={{ base: 'column-reverse', md: 'row' }} gap={{ base: '8px', md: '35px' }}>
        <Box
          width={{ base: '100%', sm: '165px', md: '388px' }}
          height={{ base: '165px', md: '443px' }}
          bgColor={'#fff'}
          shadow="xl"
          py={{ base: '13px', md: '20px', lg: '20px', xl: '45px' }}
          pl={{ base: '11px', md: '20px', lg: '28px' }}
          pr={{ base: '13px', md: '22px', lg: '43px' }}
        >
          <VStack alignItems={'flex-start'} spacing="4px" mb="17px">
            <Text fontSize={{ base: '12px', md: '18px', lg: '24px' }} fontWeight="600">
              {destination}
            </Text>
            {/* <Text fontSize={{ base: '8px', md: '16px' }} fontWeight="500">
              Nature Destination{' '}
            </Text> */}
          </VStack>
          <Text
            fontWeight={'400'}
            fontSize={{ base: '10px', md: '22px', lg: '24px' }}
            lineHeight={{ base: '15px', md: '36px' }}
            mb="29px"
          >
            {comment}
          </Text>
          <Stack
            direction={{ base: 'row', md: 'row', lg: 'row' }}
            mt={{ md: '20px', lg: '0px', xl: '80px' }}
            ml={{ base: '160px', md: '60px', xl: '62px' }}
            justifyContent={{ base: 'left', md: 'left', lg: 'right' }}
            spacing="15px"
          >
            <VStack spacing="4px" mb="17px">
              <Text fontSize={{ base: '10px', md: '20px' }} fontWeight="600">
                {name}
              </Text>
              <Text fontSize={{ base: '9px', md: '16px' }} fontWeight="400">
                {job}
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Image
          borderRadius={'10px'}
          width={{ base: '100%', md: '60%', lg: '648px' }}
          height={{ base: 'auto', md: '443px' }}
          shadow="xl"
          src={image}
          alt="testimonial-view"
        />
      </Flex>
    </Box>
  );
};

export default CardTestimoni;
