import React from 'react';
import styled, { css } from 'styled-components';
import Github from '../icons/github';
import LinkedIn from '../icons/linkedin';

const StyledFlexCss = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const background2 = css`
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,128L26.7,112C53.3,96,107,64,160,42.7C213.3,21,267,11,320,42.7C373.3,75,427,149,480,160C533.3,171,587,117,640,90.7C693.3,64,747,64,800,85.3C853.3,107,907,149,960,154.7C1013.3,160,1067,128,1120,133.3C1173.3,139,1227,181,1280,186.7C1333.3,192,1387,160,1413,144L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
background-size: cover;
background-position: top;
`;

const StyledFooter = styled.footer`
    position: relative;
    background: linear-gradient(to top right, ${(props) => props.theme.accent3}, ${(props) => props.theme.primary});
    width: 100%;
    height: 100%;
    ${StyledFlexCss}
    color: white;
    flex-direction: column;
    padding-top: 15rem;
    padding-bottom: 6rem;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ${background2}
    }

    & a {
    ${StyledFlexCss}
    flex-grow: 1;
    }

    & a:hover {
      cursor: pointer;
      fill: #dadada;
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
        fill: white;
    }

    & svg:hover {
      cursor: pointer;
      fill: #dadada;
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
        <a href="https://github.com/kevindtbd/portfolio" target="_blank" rel="noreferrer"><b>Designed and Built by Kevin Tran</b></a>
      </div>
    </StyledFooter>
  );
}
