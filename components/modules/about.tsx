import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Profile from '../../public/profile.JPG';

const background = css`
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-repeat: repeat-y;
background-size: 300px 300px;
background-position: left;
`;

const StyledAboutWrapper = styled.div`
  max-width: calc(95vw);
  margin-top: 3rem;
  padding: 3rem 3rem;

  @media screen and (min-width: 426px) {
    & {
      max-width: calc(100vw - 80px);
    }
  }


  @media screen and (min-width: 900px) {
    & {
      max-width: 80vw;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
        max-width: 1100px;
    }
  }
`;

const StyledSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 500px) {
    ${background}
  }
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 630px) {
    flex-wrap: nowrap;
  }
`;

const StyledHeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;

  & h2 {
    padding-bottom: 1rem;
  }

  &:after {
    content: '';
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 10px;
    display: block;
    border-bottom: 3px solid ${(props) => props.theme.secondary};
  }
`;

const StyledImageContainer = styled.div`
  border-radius: 30px;
  position: relative;
  height: 80%;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  &:before {
    transition: all 0.3s ease;
    content: "";
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: ${(props) => props.theme.secondary};
  }

  &:hover:before {
    transform: translate(-10px, -10px);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 10px;

`;

const StyledTextContainer = styled.div`
  padding: 1rem 0;
  border-radius: 10px;
  color: #4e4e4e;
  font-size: clamp(0.75rem, 1vw, 2rem);

  @media screen and (min-width: 630px) {
    & {
      padding: 1rem 2rem;
      margin-right: 2rem;
      max-width: 50%;
    }
  }
`;

export default function About() {
  return (
    <StyledSection id="about">
      <StyledAboutWrapper>
        <StyledHeaderWrapper>
          <h2>About Me</h2>
        </StyledHeaderWrapper>
        <StyledFlexContainer>
          <StyledTextContainer>
            <p>
              Hi! My name is Kevin Tran and I&apos;m a web developer specializing in React and
              Node JS. I graduated from the University of Washington-Tacoma in 2019
              with a degree in Computer Engineering and a degree in Computer Science.
              My interest in web development started in college when I was introduced to Python for
              web scraping and image recognition.
              <br />
              <br />
              I&apos;ve had the opportunity to work for some great startups and am always looking
              for new things to learn.
            </p>
          </StyledTextContainer>
          <StyledImageContainer>
            <StyledImage src={Profile} width={Profile.width} height={Profile.height} alt="profile" />
          </StyledImageContainer>
        </StyledFlexContainer>
      </StyledAboutWrapper>
    </StyledSection>
  );
}
