import axios from '@/utils/axios';
import { Box, Button, Container, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Comment = () => {
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    if (!id) return;
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('tourism_id', id);
      formData.append('job', job);
      formData.append('job_en', '-');
      formData.append('comment', comment);
      formData.append('comment_en', '-');
      formData.append('comment_en', '-');
      formData.append('image', image);
      await axios.post('/api/v1/testimonies', formData);
      setLoading(false);
      return toast({
        title: 'Success!',
        status: 'success',
        colorScheme: 'green',
        position: 'top-right',
        isClosable: false,
      });
    } catch (error) {
      setLoading(false);
      return toast({
        title: 'Oppss.. failed!',
        colorScheme: 'red',
        status: 'error',
        position: 'top-right',
        isClosable: false,
      });
    }
  };

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
          <form onSubmit={onSubmit}>
            <Stack direction={'column'} spacing="15px">
              <Input
                type={'text'}
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="md"
                color="#808080"
                bgColor="#fff"
                _placeholderColor={{ color: '#808080' }}
              />
              <Input
                type={'text'}
                placeholder="Job Title"
                required
                value={job}
                onChange={(e) => setJob(e.target.value)}
                size="md"
                color="#808080"
                bgColor="#fff"
                _placeholderColor={{ color: '#808080' }}
              />
              <Input
                type={'text'}
                placeholder="Your Comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                size="md"
                color="#808080"
                bgColor="#fff"
                _placeholderColor={{ color: '#808080' }}
              />
              <Stack direction={{ base: 'column', md: 'row' }} spacing="8px">
                <Input
                  type={'file'}
                  bgColor="#fff"
                  border={'5px solid transparent'}
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                  borderColor="transparent"
                  placeholder="Add Image"
                />
                <Button
                  height="40px"
                  width="128px"
                  bgColor={'#00BD07'}
                  color="#fff"
                  type="submit"
                  isLoading={loading}
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
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Comment;
