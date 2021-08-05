import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

/* eslint-disable react/jsx-props-no-spreading */

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  primary: '#6573FF',
  secondary: '#FF6B6B',
  accent: '#FFC64D',
  accent2: '#FF8797',
  accent3: '#414aa6',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
