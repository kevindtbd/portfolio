import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import {
  About, Contact, Footer, Hero, Jobs, Navigation, Projects, Skills,
} from '../components/modules';
import Menu from '../components/elements/menu';
import styles from '../styles/Home.module.css';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: clamp(1rem, 2rem, 4rem);
  }
`;

const StyledMask = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 8;
  background: rgba(0,0,0,0.5);
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const StyledHome = styled.main`
  height: 100%;
  width: 100%;
`;

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const bodyStyle = document.getElementsByTagName('body')[0].style;
    bodyStyle.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <StyledHome className={styles.container}>
      <Head>
        <title>Kevin Tran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Navigation open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />

      <main className={styles.main}>
        <StyledMask open={open} />
        <Hero />
        <About />
        <Skills />
        <Jobs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </StyledHome>
  );
}
