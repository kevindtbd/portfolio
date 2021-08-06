import React from 'react';
import styled from 'styled-components';

const StyledCaretButton = styled.button`
  border: 2px solid white;
  background: rgba(255,255,255,0.1);
  padding: 4px 8px;
  border-radius: 3px;
  color: white;
  background: transparent;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 25px;
  transition: background 0.3s ease;

  &:hover, &:active {
    background: rgba(255,255,255,0.3);
  }

`;

const StyledCaret = styled.span<{ open: boolean }>`
  cursor: pointer;
  width: 40px;
  height: 25px;
  position: absolute;
  top: 4px;
  left: 0;
  display: block;
  text-align: left;
  transition: .4s ease;
  transform: rotate(0) translateY(-20%);

  &:after,&:before {
    background-color:transparent;
    border-bottom: 10px solid #fff;
    box-sizing:content-box;
    content:'';
    display:inline-block;
    height:8px;
    left: 45%;
    position:absolute;
    top:5px;
    transition:.4s ease;
    width: 3px;
    transform: translateY(-20px);
  }
  &:before {
    transform:rotate(-135deg);
  }
  &:after {
    transform:rotate(135deg);
  }

  &:hover, &:active {
    transform: translateY(-30%);
  }

  &.open:hover, &.open:active {
    transform: translateY(-50%);
  }

  ${(props) => props.open && `
    &.open {
      transform:rotate(0) translateY(-40%);
      &:before {
        transform:rotate(-45deg);
      }
      &:after {
        transform:rotate(45deg);
      }
    }

  `}

`;

type DropDownProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function DropDown({ open, setOpen }: DropDownProps) {
  return (
    <StyledCaretButton onClick={() => setOpen(!open)} type="button">
      <StyledCaret open={open} className={open ? 'open' : ''} />
    </StyledCaretButton>
  );
}
