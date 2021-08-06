import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

type MenuProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const boxShadow = css`
  rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`;

const StyledMenu = styled.nav<Omit<MenuProps, 'setOpen'>>`
    height: 100vh;
    width: 250px;
    background: ${(props) => props.theme.accent3};
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: ${({ open }) => (open ? 'none' : boxShadow)};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    z-index: 9;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};

    & button {
      border: none;
      padding-top: 4px;
      padding-bottom: 4px;
      background: none;
      color: #fff;
      margin-bottom: 1rem;
      text-align: center;
    }

    & button:hover, & button:active {
      color: #dadada;
      background: rgba(0,0,0,0.1);
    }

`;

export default function Menu({ open, setOpen }: MenuProps) {
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <StyledMenu open={open} passHref>
      <Link href="/#about">
        <button onClick={onClick} type="submit">
          About
        </button>
      </Link>
      <Link href="/#skills" passHref>
        <button onClick={onClick} type="submit">
          Skills
        </button>
      </Link>
      <Link href="/#work" passHref>
        <button onClick={onClick} type="submit">
          Experience
        </button>
      </Link>
      <Link href="/#projects" passHref>
        <button onClick={onClick} type="submit">
          Projects
        </button>
      </Link>
      <Link href="/#contact" passHref>
        <button onClick={onClick} type="submit">
          Contact
        </button>
      </Link>
    </StyledMenu>
  );
}
