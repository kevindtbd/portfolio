import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${(props) => props.theme.primary};
    ${(props) => props.theme.button};
    padding: 16px 48px;
    font-size: 16px;
    border-radius: 5px;
    
`;

export default function Contact() {
  return (
    <section>
      <StyledButton>Contact Me</StyledButton>
    </section>
  );
}
