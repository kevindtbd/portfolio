import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`

    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  
    & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://www.linkedin.com/in/kevin-tran-b3b22a188/" target="_blank" rel="noreferrer">LinkedIn</a>
    </StyledFooter>
  );
}
