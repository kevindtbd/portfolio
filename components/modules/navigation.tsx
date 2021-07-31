import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Burger from '../elements/burger';

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
        display: none;
        color: #dadada;
        margin-left: 2rem;
    }

    @media screen and (min-width: 800px) {
      & a {
        display: block;
      }

      & button {
        display: none;
      }
    }

`;

type NavigationProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function Navigation({ open, setOpen }: NavigationProps) {
  return (
    <StyledNavigation>
      <StyledHeaderContainer>
        <StyledHeaderSection>
          <span>Logo</span>
          <StyledLinkContainer>
            <Burger open={open} setOpen={setOpen} />
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
