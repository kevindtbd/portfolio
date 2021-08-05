import React from 'react';
import styled, { css } from 'styled-components';

import Github from '../icons/github';
import LinkedIn from '../icons/linkedin';

const StyledFlexCss = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFooter = styled.footer`

    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    ${StyledFlexCss}
    flex-direction: column;
    margin-bottom: 1rem;

    & a {
    ${StyledFlexCss}
    flex-grow: 1;
  }
  
`;

const StyledLinkContainer = styled.div`
    ${StyledFlexCss}
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100px;

    & svg {
        width: 30px;
        height: 30px;
    }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLinkContainer>
        <a href="https://www.linkedin.com/in/kevin-tran-b3b22a188/" target="_blank" rel="noreferrer" aria-label="linked-in">
          <LinkedIn />
          {' '}
        </a>
        <a href="https://github.com/kevindtbd" target="_blank" rel="noreferrer" aria-label="github">
          <Github />
          {' '}
        </a>
      </StyledLinkContainer>
      <div>
        <a href="https://github.com/kevindtbd/portfolio" target="_blank" rel="noreferrer">Designed and Built by Kevin Tran</a>
      </div>
    </StyledFooter>
  );
}
