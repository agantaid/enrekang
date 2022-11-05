import { Box, Container, Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box height={{ base: '100%', md: '443px' }} pb="120px" width="auto" bgColor="#222222" mt="85px">
      <Container maxW={'8xl'} pt="89px">
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
          <Box>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Image width={'60px'} height="60px" src="/logo-dispopar.png" alt="logo-dispopar" />
            </Link>
            <Text
              width={{ base: 'auto', md: '345px' }}
              mt="12px"
              mb="30px"
              fontSize={'14px'}
              color="#fff"
              fontWeight="400"
            >
              Lörem ipsum nasade bens fufinade, presk: migasyn till anade och valpromenera:
              stenodonar sper VAR preskade tvillingshoppare syna.{' '}
            </Text>
            <HStack spacing="32px">
              <Link>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="7.65625"
                    y="7.65625"
                    width="19.6875"
                    height="19.6875"
                    rx="3.5"
                    stroke="#FFFEFE"
                    strokeWidth="2"
                  />
                  <path
                    d="M21.8726 17.3553C21.8916 17.9296 21.7973 18.5019 21.5951 19.0397C21.3929 19.5775 21.0868 20.0701 20.6942 20.4896C20.3016 20.9091 19.8302 21.2471 19.307 21.4844C18.7837 21.7217 18.2189 21.8536 17.6447 21.8726C17.0704 21.8916 16.4981 21.7973 15.9603 21.5951C15.4225 21.3929 14.9299 21.0868 14.5104 20.6942C14.0909 20.3016 13.7529 19.8302 13.5156 19.307C13.2783 18.7837 13.1464 18.2189 13.1274 17.6447C13.1084 17.0704 13.2027 16.4981 13.4049 15.9603C13.6071 15.4225 13.9132 14.9299 14.3058 14.5104C14.6984 14.0909 15.1698 13.7529 15.693 13.5156C16.2163 13.2783 16.7811 13.1464 17.3553 13.1274C17.9296 13.1084 18.5019 13.2027 19.0397 13.4049C19.5775 13.6071 20.0701 13.9132 20.4896 14.3058C20.9091 14.6984 21.2471 15.1698 21.4844 15.693C21.7217 16.2163 21.8536 16.7811 21.8726 17.3553Z"
                    stroke="#FFFEFE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.9588 12.0312H22.9688"
                    stroke="#FFFEFE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5002" cy="17.4997" r="10.5729" stroke="white" strokeWidth="2" />
                  <path
                    d="M20.7813 13.125H19.6875C19.3524 13.125 19.0205 13.191 18.7109 13.3193C18.4012 13.4475 18.1199 13.6355 17.8829 13.8725C17.6459 14.1095 17.4579 14.3908 17.3297 14.7004C17.2014 15.0101 17.1354 15.3419 17.1354 15.6771V28.0729M14.2188 19.6875H20.7813"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </HStack>
          </Box>

          <Box>
            <Text fontSize={'26px'} fontWeight="600" color="#fff" mb="20px">
              FAQ
            </Text>
            <Stack direction={'column'} spacing="22px">
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
            </Stack>
          </Box>
          <Box>
            <Text fontSize={'26px'} fontWeight="600" color="#fff" mb="20px">
              Contact
            </Text>
            <Stack direction={'column'} spacing="22px">
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
              <Image src="/icon-faq.png" width={'128px'} height="20px" alt="icon-faq" />
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
