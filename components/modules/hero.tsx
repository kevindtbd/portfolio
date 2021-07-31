import React from 'react';
import styled from 'styled-components';

const StyledHeroContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 50vh;
  background: #00798C;
  color: white; 
`;

export default function Hero() {
  return (
    <StyledHeroContainer>
      <h1>Graphic Design Is My Passion</h1>
    </StyledHeroContainer>
  );
}
