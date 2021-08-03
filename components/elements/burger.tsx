import * as React from 'react';
import styled from 'styled-components';

type BurgerProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const StyledButton = styled.button<{ open: boolean }>`
    background:transparent;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 2rem;
    height: 2rem;
    z-index: 9;

    &: focus {
        outline: none;
    }

    div {
        width: 1.5rem;
        height: 0.2rem;
        border-radius: 4px;
        border-bottom: 3px solid white;
        transition: all 0.3s linear;
        position: relative;
    }

    div:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    div:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    div:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg) translate(14px, -14px)' : 'rotate(0) translateY(0)')};
    }
`;

export default function Burger({ open, setOpen }: BurgerProps) {
  return (
    <StyledButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledButton>
  );
}
