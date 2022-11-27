import { Box, Button, Container, HStack, Input, Stack, Text } from '@chakra-ui/react';

const Comment = () => {
  return (
    <Box
      mb="-100px"
      h="428px"
      maxW="100%"
      bgImage={'/bg-comment.png'}
      bgRepeat="no-repeat"
      bgSize={'cover'}
      bgPosition="center"
    >
      <Container maxW="6xl" pt="47px">
        <Box w={{ base: '100%', md: '364px' }}>
          <Text mb="20px" fontSize={'25px'} color="#fff">
            Give Your Comments About This Destination
          </Text>
          <Stack direction={'column'} spacing="15px">
            <Input
              type={'text'}
              placeholder="Your Name"
              size="md"
              color="#808080"
              bgColor="#fff"
              _placeholderColor={{ color: '#808080' }}
            />
            <Input
              type={'text'}
              placeholder="Job Title"
              size="md"
              color="#808080"
              bgColor="#fff"
              _placeholderColor={{ color: '#808080' }}
            />
            <Input
              type={'text'}
              placeholder="Your Comment"
              size="md"
              color="#808080"
              bgColor="#fff"
              _placeholderColor={{ color: '#808080' }}
            />
            <Stack direction={{ base: 'column', md: 'row' }} spacing="8px">
              <Input type={'file'} placeholder="Add Image" />
              <Button
                height="40px"
                width="128px"
                bgColor={'#00BD07'}
                color="#fff"
                _hover={{ bg: '#00BD07' }}
                _active={{
                  bg: '#00BD07',
                  transform: 'scale(0.98)',
                }}
              >
                SEND
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Comment;
