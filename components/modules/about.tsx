import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    margin-top: 3rem;
    padding: 3rem 3rem;
`;

export default function About() {
  return (
    <StyledSection>
      <h2>About Me</h2>
      <span>
        I&apos;m a web developer specializing in React and Node.JS.
        I graduated from the University of Washington-Tacoma in 2019
        with a degree in Computer Engineering and a degree in Computer Science.
      </span>
    </StyledSection>
  );
}
