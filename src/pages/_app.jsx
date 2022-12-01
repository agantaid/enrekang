import { ChakraProvider } from '@chakra-ui/react';
// import "../components/explore/Module.cardInpiration.css"

const App = ({ Component, pageProps: { ...pageProps } }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
