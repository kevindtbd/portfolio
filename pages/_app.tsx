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
  primary: '#00798C',
  secondary: '#FF6B6B',
  button: `border: none;
  color: white;
  `,
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
