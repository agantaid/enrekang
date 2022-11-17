import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';

const CardWisata = ({ image }) => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { visitButton } = langHome[locale];
  return (
    <Box
      px="16px"
      pt={{ base: '0px', md: '16px' }}
      pb="11px"
      width={{ base: '196px', md: '196px', lg: '275px' }}
      height={{ md: 'auto' }}
      borderRadius={'10px'}
      boxShadow="xl"
      bgColor={'#FFFEFE'}
    >
      <Image
        width={{ md: '196px', lg: '270px' }}
        height="auto"
        src={image}
        alt="wisata-1"
        borderRadius={'10px'}
      />
      <Text fontSize={'16px'} fontWeight="500" my={{ base: '6px', md: '12px' }}>
        Nama Tempat Wisata
      </Text>
      <Button
        rightIcon={
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.83333H16M16 6.83333L11.5556 12.6667M16 6.83333L11.5556 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        height={{ base: '33px', md: '43px' }}
        width="100%"
        bg={'transparent'}
        border="1px solid #000000"
        _hover={{ bg: 'transparent' }}
        _active={{
          bg: 'transparent',
          transform: 'scale(0.98)',
        }}
      >
        {visitButton}
      </Button>
    </Box>
  );
};

export default CardWisata;
