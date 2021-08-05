import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    margin-top: 3rem;
    padding: 3rem 3rem;
`;

const StyledHeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;

  & h2 {
    padding-bottom: 1rem;
  }

  &:after {
    content: '';
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 10px;
    display: block;
    border-bottom: 3px solid ${(props) => props.theme.secondary};
  }
`;

export default function About() {
  return (
    <StyledSection>
      <StyledHeaderWrapper>
        <h2>About Me</h2>
      </StyledHeaderWrapper>
      <span>
        I&apos;m a web developer specializing in React and Node.JS.
        I graduated from the University of Washington-Tacoma in 2019
        with a degree in Computer Engineering and a degree in Computer Science.
      </span>
    </StyledSection>
  );
}
