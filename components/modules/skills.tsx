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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledHeader = styled.h3`
  text-align: center;
  &:after {
    content: ''
  }
`;

export default function Skills() {
  return (
    <section>
      <StyledHeader>Skills</StyledHeader>
      <StyledSkillContainer>
        {
          skillset.map((skill) => <Skillcard key={skill.alt} src={skill.src} alt={skill.alt} />)
        }
      </StyledSkillContainer>
    </section>
  );
}
