import React from 'react';
import styled from 'styled-components';
import { email } from '../../constants/experience';

const StyledButton = styled.a`
    background: ${(props) => props.theme.secondary};
    color: white;
    padding: 16px 48px;
    font-size: 16px;
    border-radius: 5px;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    &:after {
      content: "";
      display: inline-block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: transparent;
      z-index: 3;
      transition: background-color .3s ease-in-out;
    }

    &:hover:after, &:active:after {
      cursor: pointer;
      border-radius: 5px;
      transition: background .3s ease-in-out;
      background: rgba(0,0,0,0.1);
    }
`;

const StyledSection = styled.section`
    text-align: center;
    margin-bottom: 4rem;
    max-width: 80%;

    & h3 {
        font-size: 28px;
    }

    & div {
      margin-bottom: 3rem;
    }
`;

export default function Contact() {
  return (
    <StyledSection id="contact">
      <h3>Get in Touch</h3>
      <div>
        <span>
          Don&apos;t be afraid to reach out about anything.
          I&apos;m always down for a conversation.
        </span>
      </div>
      <StyledButton href={`mailto:${email}`}>Contact Me</StyledButton>
    </StyledSection>
  );
}
