import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${(props) => props.theme.primary};
    ${(props) => props.theme.button};
    padding: 16px 48px;
    font-size: 16px;
    border-radius: 5px;
    
`;

const StyledSection = styled.section`
    text-align: center;
    margin-bottom: 4rem;
    max-width: 80%;

    & h3 {
        font-size: 28px;
    }
`;

export default function Contact() {
  return (
    <StyledSection>
      <h3>Get in Touch</h3>
      <p>
        Don&apos;t be afraid to reach out about anything.
        I&apos;m always down for a conversation.
      </p>
      <StyledButton>Contact Me</StyledButton>
    </StyledSection>
  );
}
