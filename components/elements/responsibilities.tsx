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

    // &:before {
    //     content: "";
    //     display: block;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     border-radius: 0 0 12px 12px;
        
    //     height: 100%;
    //     background: rgba(0,0,0,0.2);
    // }
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
