import store from '@/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
// import "../components/explore/Module.cardInpiration.css"

const App = ({ Component, pageProps: { ...pageProps } }) => (
  <ChakraProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
);

export default App;
