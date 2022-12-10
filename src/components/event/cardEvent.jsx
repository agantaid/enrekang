import { Box, Button, Card, CardBody, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';

const CardEvent = ({ title, desc, date, src }) => {
  return (
    <Card maxW="md" shadow={'md'}>
      <CardBody>
        <Image src={src} alt="Green double couch with wooden legs" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text fontSize={'20px'} fontWeight="600">
            {title}
          </Text>
          <Text fontSize={'15px'} fontWeight="500" color={'#808080'}>
            {desc}
          </Text>
          <Flex justifyContent={'space-between'}>
            <HStack spacing="8px">
              <Stack>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33317 16.9997C1.87484 16.9997 1.48234 16.8366 1.15567 16.5105C0.829559 16.1838 0.666504 15.7913 0.666504 15.333V3.66634C0.666504 3.20801 0.829559 2.81579 1.15567 2.48967C1.48234 2.16301 1.87484 1.99967 2.33317 1.99967H3.1665V0.333008H4.83317V1.99967H11.4998V0.333008H13.1665V1.99967H13.9998C14.4582 1.99967 14.8507 2.16301 15.1773 2.48967C15.5034 2.81579 15.6665 3.20801 15.6665 3.66634V15.333C15.6665 15.7913 15.5034 16.1838 15.1773 16.5105C14.8507 16.8366 14.4582 16.9997 13.9998 16.9997H2.33317ZM2.33317 15.333H13.9998V6.99967H2.33317V15.333ZM2.33317 5.33301H13.9998V3.66634H2.33317V5.33301ZM2.33317 5.33301V3.66634V5.33301ZM3.99984 10.333V8.66634H12.3332V10.333H3.99984ZM3.99984 13.6663V11.9997H9.83317V13.6663H3.99984Z"
                    fill="#808080"
                  />
                </svg>
              </Stack>
              <Text fontSize={'15px'} fontWeight="500" color={'#808080'}>
                {date}
              </Text>
            </HStack>
            <Button
              height="38px"
              width="90px"
              bgColor={'#00BD07'}
              color="#fff"
              _hover={{ bg: '#00BD07' }}
              _active={{
                bg: '#00BD07',
                transform: 'scale(0.98)',
              }}
            >
              Going
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardEvent;
