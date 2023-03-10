import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextPageWithLayout } from 'types/layout.type';
import '../styles/index.css';
import { NavbarMobileContextProvider } from 'context/NavbarMobileContext';
import { theme } from '../config/theme.config';
import { ActiveMenuContextProvider } from 'context/ActiveMenuContext';
import { AuthenContextProvider } from 'context/AuthenContext';

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
        <AuthenContextProvider>
          <ActiveMenuContextProvider>
            <NavbarMobileContextProvider>
              {getLayout(
                <React.Fragment>
                  <Head>
                    <title>E8 Learn EL to work</title>
                    <link rel="shortcut icon" href="/static/images/icon.png" />
                    <meta
                      property="og:title"
                      content="E8 Learn EL to work"
                      key="title"
                    />
                  </Head>
                  <Component {...pageProps} />{' '}
                </React.Fragment>
              )}
            </NavbarMobileContextProvider>
          </ActiveMenuContextProvider>
        </AuthenContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
