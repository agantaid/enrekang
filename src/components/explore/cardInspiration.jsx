import {
  Box,
  Text,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

const CardInspiration = ({ title, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        onClick={onOpen}
        // href="/viewDestinasi"
        style={{ textDecoration: 'none' }}
        display={isVisible ? 'block' : 'none'}
      >
        <Text ml={'10px'} mt="200px" color="#fff" fontSize={'16px'} fontWeight="600">
          {title}
        </Text>
      </Link>

      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} size={'6xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader></ModalHeader> */}
          <ModalCloseButton />
          <ModalBody py="40px">
            <Flex direction={{ base: 'column', lg: 'row' }} gap="52px">
              <Box>
                <Image src="/inspiration-modal.png" width={'100%'} height={'auto'} alt={title} />
              </Box>
              <Flex direction={'column'} justifyContent="space-between" py="20px" width={'100%'}>
                <Box>
                  <Text fontSize={'32px'} fontWeight="500" fontFamily={'Poppins'}>
                    {title}
                  </Text>
                  <Text
                    my="14px"
                    fontSize={'15px'}
                    fontWeight="400"
                    fontFamily={'Poppins'}
                    textAlign="justify"
                    lineHeight={'22px'}
                  >
                    {' '}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nobis? Iste
                    voluptate sequi quasi suscipit molestiae perferendis est aperiam architecto
                    reiciendis ex molestias aut earum quaerat, placeat sit! Non quos sunt veniam
                    sint repudiandae soluta cum. Iusto quibusdam ullam labore repellendus illo minus
                    cumque accusamus culpa! Voluptas animi exercitationem dolorum deserunt est,
                    architecto rerum, ea aliquam doloribus sit reprehenderit pariatur quaerat iure
                    odit, neque inventore! Porro tenetur ea quasi recusandae nam eaque quidem
                    inventore debitis cum sunt iste harum ullam aliquid qui, rem quod dolorum,
                    architecto explicabo a quos voluptate eveniet. Enim, illum soluta facere placeat
                    deserunt quidem aliquam aperiam.{' '}
                  </Text>
                </Box>
                <Link href="#" style={{ textDecoration: 'none' }}>
                  <Button
                    rightIcon={
                      <svg
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.1651 1H3.38965C2.44684 1 1.97543 1 1.68254 1.29289C1.38965 1.58579 1.38965 2.05719 1.38965 3V18.7755C1.38965 19.7183 1.38965 20.1897 1.68254 20.4826C1.97543 20.7755 2.44684 20.7755 3.38965 20.7755H19.1651C20.1079 20.7755 20.5793 20.7755 20.8722 20.4826C21.1651 20.1897 21.1651 19.7183 21.1651 18.7755V3C21.1651 2.05719 21.1651 1.58579 20.8722 1.29289C20.5793 1 20.1079 1 19.1651 1Z"
                          stroke="#FFFEFE"
                          strokeWidth="2"
                        />
                        <path
                          d="M11.2774 14.4195L7.86458 11.0067C7.14792 10.29 6.78959 9.93168 6.34935 9.94613C5.90911 9.96059 5.5757 10.3416 4.90886 11.1037L1.38958 15.1257"
                          stroke="#FFFEFE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.1658 11.5937L16.9419 6.84184C16.2738 6.09026 15.9398 5.71446 15.5018 5.70177C15.0639 5.68908 14.7081 6.04487 13.9965 6.75647L9.15922 11.5937"
                          stroke="#FFFEFE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    // size='md'
                    height="48px"
                    width="100%"
                    bgColor={'#8AD440'}
                    color="#fff"
                    fontSize={'20px'}
                    fontWeight="500"
                    fontFamily={'Poppins'}
                    borderRadius="10px"
                    _hover={{ bg: '#8AD440' }}
                    _active={{
                      bg: '#8AD440',
                      transform: 'scale(0.98)',
                    }}
                    // mt={'auto'}
                  >
                    See Destination
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default CardInspiration;
