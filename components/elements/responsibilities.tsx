import React from 'react';
import styled from 'styled-components';

const StyledResContainer = styled.div<{ color: string }>`
    width: 100%;
    background: transparent;
      position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #fff;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
`;

const StyledList = styled.ul`
    max-width: 80%;

    & li {
        margin-bottom: 0.5rem;
    }
`;

type RespProps = {
  resp: Array<string>,
  color: string
};

export default function Responsibilities({ resp, color }: RespProps) {
  return (
    <StyledResContainer color={color}>
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
