import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

type MenuProps = {
  open: boolean
};

const boxShadow = css`
  rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`;

const StyledMenu = styled.nav<MenuProps>`
    height: 100vh;
    width: 250px;
    background: #e6e6e6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: ${({ open }) => (open ? 'none' : boxShadow)};
    border-top-right-radius: 5px;
    borer-bottom-right-radius: 5px;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    z-index: 9;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};

    & a {
      margin-bottom: 1rem;
      font-weight: bolder;
    }

`;

export default function Menu({ open }: MenuProps) {
  return (
    <StyledMenu open={open}>
      <Link href="/#about">About</Link>
      <Link href="/#skills">Skills</Link>
      <Link href="/#work">Work</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#contact">Contact</Link>
    </StyledMenu>
  );
}
