import axios from '@/utils/axios';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import langHome from '../homepage/lang';

const Footer = () => {
  // lang
  const { locale, locales, defaultLocale } = useRouter();
  const { footerDesc, footerContact } = langHome[locale];

  const [settings, setSettings] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/settings').then(({ data }) => setSettings(data));
  }, []);

  console.log(settings);

  return (
    <Box
      id="footer"
      height={{ base: '100%', md: '443px' }}
      pb="80px"
      width="auto"
      bgColor="#222222"
      mt="85px"
    >
      <Container maxW={'5xl'} pt={{ base: '20px', lg: '40px' }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '40px', lg: '0px' }}
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize={'32px'} fontWeight="600" color="#fff">
              Dispopar Kab. Enrekang
            </Text>
            <Text
              width={{ base: 'auto', md: '345px' }}
              mt="12px"
              mb="16px"
              fontSize={'14px'}
              color="#fff"
              fontWeight="400"
            >
              {settings && settings[0]?.address}
            </Text>
            <HStack spacing="16px" mb="24px">
              {/* instagram */}
              <Link href={settings && settings[0]?.instagram}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7949 9.00247 13.5565 9.31934 14.1186 9.88141C14.6807 10.4435 14.9975 11.2051 15 12ZM21.375 7.875V16.125C21.375 17.5174 20.8219 18.8527 19.8373 19.8373C18.8527 20.8219 17.5174 21.375 16.125 21.375H7.875C6.48261 21.375 5.14726 20.8219 4.16269 19.8373C3.17812 18.8527 2.625 17.5174 2.625 16.125V7.875C2.625 6.48261 3.17812 5.14726 4.16269 4.16269C5.14726 3.17812 6.48261 2.625 7.875 2.625H16.125C17.5174 2.625 18.8527 3.17812 19.8373 4.16269C20.8219 5.14726 21.375 6.48261 21.375 7.875ZM16.5 12C16.5 11.11 16.2361 10.24 15.7416 9.49993C15.2471 8.75991 14.5443 8.18314 13.7221 7.84254C12.8998 7.50195 11.995 7.41283 11.1221 7.58647C10.2492 7.7601 9.44736 8.18868 8.81802 8.81802C8.18868 9.44736 7.7601 10.2492 7.58647 11.1221C7.41283 11.995 7.50195 12.8998 7.84254 13.7221C8.18314 14.5443 8.75991 15.2471 9.49993 15.7416C10.24 16.2361 11.11 16.5 12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12ZM18 7.125C18 6.9025 17.934 6.68499 17.8104 6.49998C17.6868 6.31498 17.5111 6.17078 17.3055 6.08564C17.1 6.00049 16.8738 5.97821 16.6555 6.02162C16.4373 6.06502 16.2368 6.17217 16.0795 6.3295C15.9222 6.48684 15.815 6.68729 15.7716 6.90552C15.7282 7.12375 15.7505 7.34995 15.8356 7.55552C15.9208 7.76109 16.065 7.93679 16.25 8.0604C16.435 8.18402 16.6525 8.25 16.875 8.25C17.1734 8.25 17.4595 8.13147 17.6705 7.9205C17.8815 7.70952 18 7.42337 18 7.125Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={settings && settings[0]?.facebook}>
                {/* facebook */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={settings && settings[0]?.youtube}>
                {/* youtube */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="24" height="24" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0_719_3" transform="scale(0.0104167)" />
                    </pattern>
                    <image
                      id="image0_719_3"
                      width="96"
                      height="96"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFAklEQVR4nO2cTWhcVRTHfyc12kxTjUK1RVGpbSlqUSwIaqQoLhTUlXUluhB1Z3Ej6KourF8LbXeKq7qsrty4MhTaCkJVsAsVbGMQa4nUNKZpbJocF/cOnYnN3Ptm7sz7Oj94MDO5774/559775t3zxwwDMMwDMMwDMMwDMMwDMMwDKPqSD86VdURYCOwCdgArANGgeuAhj/G/OcNYD1wLbDGdzEKDLd0eY1v12TI99XKOWC55f088G/L+0Vgzr9eAmaBf3y788CMfz3v+5rzn08Dp4E/ReRCXATi6ckAVR0CHgIeAHYAdwObccGsIrPASeAE8CPwDXBURJY7ntWBrgzwgX8ZeAO4tduLV4Qp4G3g026MyGyAqt4IfA48nPXcinMY2C0i01lOymSAD/4RYGuW82rEL8B4FhOGYhv6aecLLPid2AYc8rGKIrohbs4fzyypfuwCXoxtHDUFeUdPYQtuLJPAHTGLcuwIGMeCn4XbcbfnQWINsDue7ETFLNaAnT0IqSv3xTSKNeCeHoTUlXtjGgUXYVVdAywAV/WqqGYsAiMistSpUcwIuBkLfjcM4x5GdiTGgNt611JbgrGLMWBjAiF1JRi7GAPGEgipK8HYxRhwfQIhdSUYuxgDVu48DZo9wN85a+iW8o8AETkAbAEOAJfy1NIF5TcAQETOisge3LbnV3nryUCSKagwi7CI/CQiTwBPA7/mrSeCJCMg7zXgf4jIl7gEgDe5nOlQRJIYMJJASHJEZEFE3sHtQn1Ce0pKUVgbahBjwNUJhPQNETktIq8A9wNH89azgmDsSm9AExE5jnsG/yzwW85ymiQxYDjcpBiIiIrIIeBO4C0geSZbRuozAloRkXkR2YtbHz4DNCcpwX/eShrQRER+F5HngUeAH3KQUK8paDVE5DBuW/UF4MwAL13PKehKiMiyiBwEtgPv0Z453S+CsYvZklwiWwJXUkSkXyn0W3FJtbv70b9nSUQ67ibmFtiCkPuXzBgDLvZdxQBR1TFVfReX3/9kny8XjF3MZvtFIr5SFx2fXvkc8D5w04Aum8SAxQRCckVVdwEfEZmrk5CgAZWeglT1FlU9CEww+OBDwimoVKhqA3jdH3kutMHZo1JTkKoK8AzwAcXIZ6rPCFDVncB+ItPCB0T11wBV3aSqHwPfUqzgQ6IRkPcj3SuiqmuB13DbkqM5y1mNhVCDGANmEghJiqo+hbut3Jy3lgDBfKZSGaCq24EPgcfz1hJJMHYxa0DuWWmqeoOq7sc9PihL8KEKI0BVXwX2UoAEsS44F2pQeANwt5ZlJTgCSjEFlZgkBuQ9AspMkkV4kHuoVSMYuxgDipLkVEaCsbOfqfaPND9T9R1MpVJVI6ZCwYf4Tfk8kprKzvcxjWINON6DkLryXUyjWAOO9CCkrkTFLEvBppMUY5epDJwCtiQr2OQ72terqhqxL7aEZXTanx8FX+NqohmrMwE8ltwAAFXdgJvbtnUhrA78jCtb+VfsCZlyQ309zHFckVKjnQkyBh+6SM71JjyKK2M5mfX8CjIJvISbdjIFH9IU737QHzuAu3D7tIX7bXEiZnB3OCf8cQw4NvDi3SF8xkJr+foGrqL6ev96HW6Hq7Hib83nTSO0JwQP0575EFO+fo72pLILXM5SuIQrXT9Le/n68/5969+mgT+AMyISzHIwDMMwDMMwDMMwDMMwDMMwDMNYyX8yVSwYA8JG6wAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
              </Link>
            </HStack>
            <Box>
              <Text fontSize={'25px'} fontWeight="600" color="#fff">
                Contact
              </Text>
              <VStack mt="12px" spacing={'10px'} alignItems="baseline">
                <Link href="/">
                  <HStack direction={'row'} spacing="10px">
                    <Stack>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.99 6.547C21.9817 6.11797 21.9473 5.68985 21.887 5.265C21.8152 4.8871 21.6931 4.52052 21.524 4.175C21.1539 3.4443 20.5605 2.85057 19.83 2.48C19.4867 2.31171 19.1225 2.18997 18.747 2.118C18.3189 2.05648 17.8874 2.02142 17.455 2.013C17.272 2.006 17.035 2.003 16.925 2.003L7.077 2C6.967 2 6.73 2.003 6.547 2.01C6.11797 2.01827 5.68984 2.05266 5.265 2.113C4.8871 2.18484 4.52052 2.30692 4.175 2.476C3.44434 2.8462 2.85063 3.43956 2.48 4.17C2.31176 4.51332 2.19002 4.87752 2.118 5.253C2.0562 5.68109 2.0208 6.11257 2.012 6.545C2.006 6.728 2.002 6.965 2.002 7.075L2 16.923C2 17.033 2.003 17.27 2.01 17.453C2.01827 17.882 2.05266 18.3102 2.113 18.735C2.18485 19.1129 2.30693 19.4795 2.476 19.825C2.8462 20.5557 3.43956 21.1494 4.17 21.52C4.51332 21.6882 4.87753 21.81 5.253 21.882C5.6811 21.9435 6.11258 21.9786 6.545 21.987C6.728 21.994 6.965 21.997 7.075 21.997L16.923 21.999C17.033 21.999 17.27 21.996 17.453 21.989C17.882 21.9807 18.3102 21.9463 18.735 21.886C19.1129 21.8141 19.4795 21.692 19.825 21.523C20.556 21.153 21.1501 20.5596 21.521 19.829C21.6893 19.4857 21.811 19.1215 21.883 18.746C21.9448 18.3179 21.9802 17.8864 21.989 17.454C21.995 17.271 21.999 17.034 21.999 16.924L22 7.077C22 6.967 21.997 6.73 21.99 6.547ZM12.217 18.957H12.214C11.0237 18.9568 9.85235 18.6583 8.807 18.089L5.027 19.08L6.039 15.387C5.25545 14.0273 4.94237 12.4471 5.1483 10.8914C5.35423 9.33566 6.06765 7.89133 7.17797 6.78233C8.28829 5.67333 9.73347 4.96162 11.2894 4.75755C12.8454 4.55347 14.4252 4.86843 15.784 5.65359C17.1427 6.43876 18.2045 7.65026 18.8046 9.10026C19.4048 10.5503 19.5098 12.1578 19.1034 13.6735C18.697 15.1893 17.8018 16.5286 16.5568 17.4839C15.3117 18.4391 13.7863 18.9569 12.217 18.957Z"
                          fill="white"
                        />
                        <path
                          d="M12.2202 5.90139C11.1613 5.90108 10.1217 6.18447 9.20937 6.72208C8.29708 7.25969 7.54547 8.03189 7.03272 8.95838C6.51996 9.88487 6.26478 10.9318 6.29372 11.9903C6.32265 13.0489 6.63464 14.0803 7.19724 14.9774L7.33824 15.2014L6.73924 17.3874L8.98224 16.7994L9.19824 16.9274C10.1113 17.4682 11.153 17.7535 12.2142 17.7534H12.2172C13.789 17.7537 15.2966 17.1295 16.4082 16.0183C17.5198 14.907 18.1445 13.3997 18.1447 11.8279C18.145 10.2561 17.5209 8.74855 16.4096 7.63693C15.2984 6.52531 13.791 5.90066 12.2192 5.90039L12.2202 5.90139ZM15.7042 14.3714C15.5732 14.5879 15.3987 14.7749 15.1918 14.9206C14.985 15.0664 14.7502 15.1678 14.5022 15.2184C14.1279 15.2826 13.7437 15.2586 13.3802 15.1484C13.0355 15.041 12.6967 14.9155 12.3652 14.7724C11.135 14.155 10.0863 13.2283 9.32224 12.0834C8.90541 11.5534 8.6524 10.9132 8.59424 10.2414C8.58943 9.9641 8.64244 9.68886 8.74987 9.43319C8.85731 9.17751 9.01682 8.94702 9.21824 8.75639C9.27776 8.68848 9.35069 8.63362 9.43243 8.59524C9.51417 8.55687 9.60297 8.53581 9.69324 8.53339C9.81124 8.53339 9.93024 8.53339 10.0342 8.53939C10.1442 8.54439 10.2902 8.49739 10.4342 8.84539C10.5842 9.20139 10.9402 10.0784 10.9842 10.1674C11.0125 10.214 11.0286 10.267 11.0313 10.3215C11.0339 10.376 11.0229 10.4302 10.9992 10.4794C10.9544 10.5864 10.8944 10.6864 10.8212 10.7764C10.7312 10.8804 10.6342 11.0084 10.5542 11.0884C10.4642 11.1774 10.3722 11.2734 10.4752 11.4514C10.7428 11.9094 11.0767 12.3253 11.4662 12.6854C11.8889 13.0611 12.3738 13.3603 12.8992 13.5694C13.0772 13.6594 13.1812 13.6434 13.2852 13.5244C13.3892 13.4054 13.7302 13.0044 13.8492 12.8264C13.9682 12.6484 14.0862 12.6784 14.2492 12.7374C14.4122 12.7964 15.2892 13.2274 15.4672 13.3174C15.6452 13.4074 15.7642 13.4504 15.8082 13.5244C15.857 13.8108 15.8209 14.1053 15.7042 14.3714Z"
                          fill="white"
                        />
                      </svg>
                    </Stack>
                    <Text color="#FFFEFE" fontSize={'15px'} fontWeight="500">
                      {settings && settings[0]?.contact}
                    </Text>
                  </HStack>
                </Link>
                <Link href="/">
                  <HStack direction={'row'} spacing="10px">
                    <Stack>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25V8.25Z"
                          fill="white"
                        />
                      </svg>
                    </Stack>
                    <Text color="#FFFEFE" fontSize={'15px'} fontWeight="500">
                      {settings && settings[0]?.email}
                    </Text>
                  </HStack>
                </Link>
              </VStack>
            </Box>
          </Box>

          <Box width={{ base: 'auto', lg: '385px' }}>
            <Text fontSize={'26px'} fontWeight="600" color="#FFFEFE" mb="20px">
              FAQ
            </Text>
            <Accordion color="#fff" defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Apa itu dispopar ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Dinas yang bergerak di bidang kepemudaan, olahraga dan pariwisata di kab.enrekang
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Apakah TIC ini Aman ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Aman karena sudah menggunakan SSL adalah teknologi yang digunakan untuk
                  menciptakan koneksi yang lebih aman antara website dan browser.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
        <Center mt="60px">
          <HStack spacing={'10px'}>
            <Stack>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9375 0C4.89746 0 0 4.89746 0 10.9375C0 16.9775 4.89746 21.875 10.9375 21.875C16.9775 21.875 21.875 16.9775 21.875 10.9375C21.875 4.89746 16.9775 0 10.9375 0ZM10.9375 20.0195C5.92285 20.0195 1.85547 15.9521 1.85547 10.9375C1.85547 5.92285 5.92285 1.85547 10.9375 1.85547C15.9521 1.85547 20.0195 5.92285 20.0195 10.9375C20.0195 15.9521 15.9521 20.0195 10.9375 20.0195ZM11.0742 7.01416C12.3682 7.01416 13.2471 7.83936 13.3447 9.05029C13.352 9.15283 13.4375 9.23096 13.54 9.23096H14.9243C14.9878 9.23096 15.0391 9.17969 15.0391 9.11621C15.0391 6.99951 13.3691 5.51758 11.0669 5.51758C8.38379 5.51758 6.83594 7.3291 6.83594 10.3223V11.5991C6.83594 14.5703 8.38379 16.3574 11.0669 16.3574C13.3618 16.3574 15.0391 14.9219 15.0391 12.9053C15.0391 12.8418 14.9878 12.7905 14.9243 12.7905H13.5376C13.4351 12.7905 13.3521 12.8687 13.3423 12.9688C13.2397 14.0942 12.3633 14.8682 11.0718 14.8682C9.47754 14.8682 8.5791 13.6987 8.5791 11.6064V10.3223C8.58154 8.19824 9.48242 7.01416 11.0742 7.01416Z"
                  fill="white"
                />
              </svg>
            </Stack>
            <Text fontSize={'15px'} fontWeight="500" color="#FFFEFE">
              Dispopar Enrekang Copyright 2022
            </Text>
          </HStack>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
