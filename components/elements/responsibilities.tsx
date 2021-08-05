import React from 'react';
import styled from 'styled-components';

const StyledResContainer = styled.div<{ color: string }>`
    width: 100%;
    background: transparent;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    color: #e6e6e6;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
`;

const StyledList = styled.ul`
    max-width: 90%;
    padding-top: 0;
    padding-bottom: 1.5rem;
  
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
  color: string
};

export default function Responsibilities({ resp, color }: RespProps) {
  return (
    <StyledResContainer color={color}>
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
