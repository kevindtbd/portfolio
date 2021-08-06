import React from 'react';
import styled, { css } from 'styled-components';

const FlexContainer = css`
  display: flex;
  align-items: center;

`;

const HeroBackground = css`
  background-color: #414aa6;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%236a77fd' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23f58795' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d762dd' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23fa82ac' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23fe5fb0' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ee7cc1' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f5747e' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23cd64ca' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23fb9d5b' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23a268d9' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23f9c24d' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%236874ef' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-size: cover;
`;

const StyledHeroContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 900px;
  ${HeroBackground}
  color: white; 
  ${FlexContainer}
  justify-content: start;

  @media screen and (min-wiodth: 393px) {
    & {
      height: 100vh;
    }
  }

`;

const StyledBannerContainer = styled.div`
  ${FlexContainer}
  justify-content: start;
  flex-wrap: wrap;
  max-width: 90%;
`;

const StyledNameSpan = styled.span`
  &#name {
    color: ${(props) => props.theme.accent};
  }
`;

const StyledHeroTextContainer = styled.div`
  padding: 3rem 3rem;

  & h1 {
    font-size: clamp(35px, 4.5vw, 80px);
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  & h3 {
    color: #dadada;
    font-size: clamp(1rem, 1.5vw, 2rem);
  }

  & span {
    color: #dadada;
    font-size: clamp(1rem, 1.5vw, 2rem);
  }
  & span.sub-description {
    color: #dadada;
    font-size: clamp(0.9rem, 1.2vw, 2rem);
  }

  @media screen and (min-width: 769px){
    & {
      max-width: 70%;
    }
  }
`;

const HeroBanner = () => (
  <StyledHeroTextContainer>
    <StyledNameSpan id="name">Hi. My name is Kevin Tran and...</StyledNameSpan>
    <h1>Graphic Design Is My Passion</h1>
    <h3>(Ok not really)</h3>
    <span className="sub-description">
      I&apos;m actually a software engineer who loves to build websites,
      with an interest in front-end development and software architecture.
    </span>
  </StyledHeroTextContainer>
);

export default function Hero() {
  return (
    <StyledHeroContainer>
      <StyledBannerContainer>
        <HeroBanner />
        {/* <Image src={Frog} width={Frog.width} height={Frog.height} alt="clipart" /> */}
      </StyledBannerContainer>
    </StyledHeroContainer>
  );
}
