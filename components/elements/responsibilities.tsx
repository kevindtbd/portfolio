import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
    max-width: 90%;
    padding-top: 0;
    padding-bottom: 1.5rem;
    font-size: clamp(0.75rem, 1vw, 2rem);
  
    & li {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 769px) {
      & li {
        margin-bottom: 1rem;
      }
    }
`;

const StyledHeader = styled.h4`
    margin-bottom: 0;
    padding-left: 40px;
`;

type RespProps = {
  resp: Array<string>,
  color: string,
  open: boolean
};

const StyledResContainer = styled.div <Omit<RespProps, 'resp'>>`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    color: #e6e6e6;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    transition: all 0.4s ease;
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.open ? '1' : '0')};
    max-height: ${(props) => (props.open ? '400px' : '0px')};

    @media screen and (max-width: 768px) {
      max-height: ${(props) => (props.open ? '650px' : '0px')};
    }

`;

export default function Responsibilities({ resp, color, open }: RespProps) {
  return (
    <StyledResContainer color={color} open={open}>
      <StyledHeader>Responsibilties</StyledHeader>
      <StyledList>
        {
                    resp.map((res, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <li key={index}>{res}</li>
                    ))
                }
      </StyledList>
    </StyledResContainer>
  );
}
