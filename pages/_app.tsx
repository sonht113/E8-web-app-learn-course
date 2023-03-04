import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
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
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ActiveMenuContextProvider>
          <NavbarMobileContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </NavbarMobileContextProvider>
        </ActiveMenuContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
