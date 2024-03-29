import React from 'react';
import styled from 'styled-components';

import SkillCard, { SkillCardProps } from '../elements/skillCard';
import ReactLogo from '../../public/react.svg';
import Typescript from '../../public/typescript.svg';
import Javascript from '../../public/javascript.svg';
import Python from '../../public/python.svg';
import Figma from '../../public/figma.svg';
import NodeJS from '../../public/nodejs.svg';

const skillset: Array<SkillCardProps> = [
  {
    src: ReactLogo,
    alt: 'React',
  },
  {
    src: Typescript,
    alt: 'Typescript',
  },
  {
    src: Javascript,
    alt: 'Javascript',
  },
  {
    src: Python,
    alt: 'Python',
  },
  {
    src: Figma,
    alt: 'Figma',
  },
  {
    src: NodeJS,
    alt: 'NodeJS',
  },

];

const StyledSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 500px) [
  
  ]
`;

const StyledHeaderWrapper = styled.section`
  position: relative;
  margin-bottom: 2rem;
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

const StyledHeader = styled.h2`
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
`;

const StyledSection = styled.section`
  margin-bottom: 2rem;
`;

export default function Skills() {
  return (
    <StyledSection id="skills">
      <StyledHeaderWrapper>
        <StyledHeader>Skills</StyledHeader>
      </StyledHeaderWrapper>
      <StyledSkillContainer>
        {
          skillset.map((skill) => <SkillCard key={skill.alt} src={skill.src} alt={skill.alt} />)
        }
      </StyledSkillContainer>
    </StyledSection>
  );
}
