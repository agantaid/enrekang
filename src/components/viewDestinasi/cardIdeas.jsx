import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

const CardIdeas = ({ image, title, desc }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt="Trip Ideas" borderRadius="lg" />
      </CardBody>
      <Divider />
      <CardFooter>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {title}
          </Heading>
          <Text pt="2" fontSize="sm">
            {desc}
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CardIdeas;
