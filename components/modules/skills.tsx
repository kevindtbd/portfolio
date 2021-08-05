import React from 'react';
import styled from 'styled-components';

import Skillcard, { SkillCardProps } from '../elements/skillCard';
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
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledHeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  &:after {
    content: '';
    width: 70px;
    position: absolute;
    right: 44%;
    bottom: 0;
    height: 10px;
    display: block;
    border-bottom: 3px solid ${(props) => props.theme.primary};
}
`;

const StyledHeader = styled.h2`
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
`;

export default function Skills() {
  return (
    <section>
      <StyledHeaderWrapper>
        <StyledHeader>Skills</StyledHeader>
      </StyledHeaderWrapper>
      <StyledSkillContainer>
        {
          skillset.map((skill) => <Skillcard key={skill.alt} src={skill.src} alt={skill.alt} />)
        }
      </StyledSkillContainer>
    </section>
  );
}
