import { PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Link,
  Image,
} from '@chakra-ui/react';
// import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import langHome from '../homepage/lang';
import Head from 'next/head';

const Navbar = ({ pageTitle, lang }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // lang
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title1, title2, title3, button, button2, link, local } = langHome[locale];

  return (
    <>
      <Head>
        <title>Tourism Enrekang - {pageTitle}</title>
      </Head>

      <Flex direction={'row'} justifyContent="space-between" alignItems={'center'}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Stack alignItems={'center'} direction={'row'} spacing="14px">
            <Image
              width={{ base: '60px', lg: '80px' }}
              height={{ base: '60px', lg: '80px' }}
              src="/logo-dispopar.png"
              alt="logo-dispopar"
            />
            <Text
              fontSize={{ base: '16px', lg: '24px' }}
              fontWeight="600"
              color="#fff"
              letterSpacing={{ md: '0em', xl: '0.15em' }}
            >
              DISPOPAR ENREKANG
            </Text>
          </Stack>
        </Link>

        <Hide above="lg">
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_102_251)">
                    <ellipse cx="7.5" cy="7.5" rx="1.71875" ry="4.53125" stroke="white" />
                    <path
                      d="M2.96875 7.5H12.0312"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="7.5" cy="7.5" r="4.53125" stroke="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_102_251">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              rightIcon={
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L2.4 2.86667C3.13333 3.84444 3.5 4.33333 4 4.33333C4.5 4.33333 4.86667 3.84444 5.6 2.86667L7 1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              bgColor="transparent"
              border={'2px solid #fff'}
              width="146px"
              ml={{ base: '80px', md: '438px' }}
              height={'24px'}
              px="2px"
              color="#fff"
              fontWeight={'500'}
              fontSize="8px"
              _hover={{
                bg: 'transparent',
              }}
              _active={{
                bg: 'transparent',
              }}
            >
              <Link
                activeClassName={locale === 'en'}
                href={link}
                style={{ textDecoration: 'none' }}
                locale="en"
              >
                {button}
              </Link>
            </MenuButton>
            <MenuList minW={'80px'}>
              <Link activeClassName={locale === 'id'} href={link} locale={local}>
                <MenuItem>{button2}</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Button
            ref={btnRef}
            bgColor="transparent"
            onClick={onOpen}
            _hover={{ bg: 'transparent' }}
            _active={{
              bg: 'transparent',
              transform: 'scale(0.98)',
            }}
            rightIcon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.75 12.9165H11.25"
                  stroke="#FFFEFE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.75 20H11.25"
                  stroke="#FFFEFE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.75 27.0835H11.25"
                  stroke="#FFFEFE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          ></Button>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              {/* <DrawerHeader>Create your account</DrawerHeader> */}

              <DrawerBody>
                <Flex
                  height="96vh"
                  direction={'column'}
                  px="20px"
                  pt="46px"
                  justifyContent={'space-between'}
                >
                  <VStack spacing="34px">
                    <VStack spacing="22px">
                      <Link href="/" style={{ textDecoration: 'none' }}>
                        <Text fontSize={'24px'} fontWeight="700">
                          {title1}
                        </Text>
                      </Link>
                      <Divider border="2px solid #C6C5C5" />
                    </VStack>
                    <VStack spacing="22px">
                      <Link href="#visit-populer" style={{ textDecoration: 'none' }}>
                        <Text fontSize={'24px'} fontWeight="700">
                          {title2}
                        </Text>
                      </Link>
                      <Divider border="2px solid #C6C5C5" />
                    </VStack>
                    <VStack spacing="22px">
                      <Link href="#footer" style={{ textDecoration: 'none' }}>
                        <Text fontSize={'24px'} fontWeight="700">
                          {title3}
                        </Text>
                      </Link>
                      <Divider border="2px solid #C6C5C5" />
                    </VStack>
                    <VStack spacing="22px">
                      <Link href="/event" style={{ textDecoration: 'none' }}>
                        <Text fontSize={'24px'} fontWeight="700">
                          Event
                        </Text>
                      </Link>
                      <Divider border="2px solid #C6C5C5" />
                    </VStack>
                    <HStack spacing="26px">
                      <Stack>
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
                            stroke="black"
                            strokeWidth="2"
                          />
                          <path
                            d="M21.8726 17.3553C21.8916 17.9296 21.7973 18.5019 21.5951 19.0397C21.3929 19.5775 21.0868 20.0701 20.6942 20.4896C20.3016 20.9091 19.8302 21.2471 19.307 21.4844C18.7837 21.7217 18.2189 21.8536 17.6447 21.8726C17.0704 21.8916 16.4981 21.7973 15.9603 21.5951C15.4225 21.3929 14.9299 21.0868 14.5104 20.6942C14.0909 20.3016 13.7529 19.8302 13.5156 19.307C13.2783 18.7837 13.1464 18.2189 13.1274 17.6447C13.1084 17.0704 13.2027 16.4981 13.4049 15.9603C13.6071 15.4225 13.9132 14.9299 14.3058 14.5104C14.6984 14.0909 15.1698 13.7529 15.693 13.5156C16.2163 13.2783 16.7811 13.1464 17.3553 13.1274C17.9296 13.1084 18.5019 13.2027 19.0397 13.4049C19.5775 13.6071 20.0701 13.9132 20.4896 14.3058C20.9091 14.6984 21.2471 15.1698 21.4844 15.693C21.7217 16.2163 21.8536 16.7811 21.8726 17.3553Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.9588 12.0312H22.9688"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Stack>
                      <Stack>
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="17.5"
                            cy="17.5002"
                            r="10.5729"
                            stroke="black"
                            strokeWidth="2"
                          />
                          <path
                            d="M20.7813 13.125H19.6875C19.3524 13.125 19.0205 13.191 18.7109 13.3193C18.4012 13.4475 18.1199 13.6355 17.8829 13.8725C17.6459 14.1095 17.4579 14.3908 17.3297 14.7004C17.2014 15.0101 17.1354 15.3419 17.1354 15.6771V28.0729M14.2188 19.6875H20.7813"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Stack>
                    </HStack>
                  </VStack>

                  <Center mt="100px">
                    <Stack direction={'column'} spacing="6px">
                      <Image
                        width={'159px'}
                        height="64px"
                        src="/icon-drawer-menus-logo.png"
                        alt="logo-tagline"
                      />
                    </Stack>
                  </Center>
                </Flex>
              </DrawerBody>

              {/* <DrawerFooter>
                          <Button variant='outline' mr={3} onClick={onClose}>
                          Close
                          </Button>
                      </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </Hide>
        {/* navbar lg */}
        <Hide below="lg">
          <Stack direction={'row'} spacing={'43px'}>
            <Stack direction={'row'} spacing={{ lg: '18px', xl: '57px' }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text color="#fff" fontSize={'20px'} fontWeight="500" fontFamily={'Inter'}>
                  {title1}
                </Text>
              </Link>
              <Link href="#visit-populer" style={{ textDecoration: 'none' }}>
                <Text color="#fff" fontSize={'20px'} fontWeight="500" fontFamily={'Inter'}>
                  {title2}
                </Text>
              </Link>
              <Link href="#footer" style={{ textDecoration: 'none' }}>
                <Text color="#fff" fontSize={'20px'} fontWeight="500" fontFamily={'Inter'}>
                  {title3}
                </Text>
              </Link>
              <Link href="/event" style={{ textDecoration: 'none' }}>
                <Text color="#fff" fontSize={'20px'} fontWeight="500" fontFamily={'Inter'}>
                  Event
                </Text>
              </Link>
            </Stack>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="blackAlpha.900" />}
              />
              <Input
                type="text"
                borderRadius={'10px'}
                width="178px"
                height={'38px'}
                bgColor="#fff"
                color={'blackAlpha.600'}
              />

              {/* lang setting */}
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_27_8)">
                        <ellipse
                          cx="12.4998"
                          cy="12.4998"
                          rx="2.86458"
                          ry="7.55208"
                          stroke="#FFFEFE"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4.94775 12.5H20.0519"
                          stroke="#FFFEFE"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12.4998"
                          cy="12.4998"
                          r="7.55208"
                          stroke="#FFFEFE"
                          strokeWidth="1.5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_27_8">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  rightIcon={
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5.58579 5.58579C6.25245 6.25245 6.58579 6.58579 7 6.58579C7.41421 6.58579 7.74755 6.25245 8.41421 5.58579L13 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  bgColor="transparent"
                  border={'2px solid #fff'}
                  width="97px"
                  ml="43px"
                  height={'38px'}
                  px="4px"
                  color="#fff"
                  fontWeight={'500'}
                  fontSize="14px"
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                >
                  <Link
                    activeClassName={locale === 'en'}
                    style={{ textDecoration: 'none' }}
                    href={link}
                    locale="en"
                  >
                    {button}
                  </Link>
                </MenuButton>
                <MenuList>
                  <Link
                    activeClassName={locale === 'id'}
                    style={{ textDecoration: 'none' }}
                    href={link}
                    locale="id"
                  >
                    <MenuItem>{button2}</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </InputGroup>
          </Stack>
        </Hide>
      </Flex>
    </>
  );
};

export default Navbar;
