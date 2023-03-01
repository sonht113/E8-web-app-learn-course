import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPageWithLayout } from 'types/layout.type';
import '../styles/index.css';
import { NavbarMobileContextProvider } from 'context/NavbarMobileContext';
import { theme } from '../config/theme.config';
import { ActiveMenuContextProvider } from 'context/ActiveMenuContext';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <ActiveMenuContextProvider>
        <NavbarMobileContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </NavbarMobileContextProvider>
      </ActiveMenuContextProvider>
    </ChakraProvider>
  );
}
