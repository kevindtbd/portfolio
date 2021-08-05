import React, { useState } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/modules/navigation';
import Menu from '../components/elements/menu';
import Hero from '../components/modules/hero';
import About from '../components/modules/about';
import Jobs from '../components/modules/jobs';
import Skills from '../components/modules/skills';
import Projects from '../components/modules/projects';
import Contact from '../components/modules/contact';
import Footer from '../components/modules/footer';
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
  background: rgba(0,0,0,0.2);
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const StyledHome = styled.main<{ open: boolean }>`
  height: 100%;
  width: 100%;
  overflow: ${({ open }) => (open ? 'hidden' : 'auto')};
`;

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <StyledHome open={open} className={styles.container}>
      <Head>
        <title>Kevin Tran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header open={open} setOpen={setOpen} />
      <Menu open={open} />
      <StyledMask open={open} />
      <main className={styles.main}>
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
