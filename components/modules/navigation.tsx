import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNavigation = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center; 
    color: white; 
`;

const StyledHeaderContainer = styled.div`
    width: 100%;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 1200px){
        & {
            max-width: 1140px;
        }
    }

    @media screen and (min-width: 992px){
        & {
            max-width: 960px;
        }
    }

    @media screen and (min-width: 446px){
        & {
            max-width: calc(100)
        }
    }
`;

const StyledHeaderSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
`;

const StyledLinkContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;

    & a {
        margin-left: 2rem;
    }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledHeaderContainer>
        <StyledHeaderSection>
          <span>Logo</span>
          <StyledLinkContainer>
            <Link href="/#about">About</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#projects">Project</Link>
            <Link href="/#contact">Contact</Link>
          </StyledLinkContainer>
        </StyledHeaderSection>
      </StyledHeaderContainer>
    </StyledNavigation>
  );
}
