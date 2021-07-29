import React from 'react';

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

export default function Skills() {
  return (
    <section>
      <h3>Skills</h3>
      <div>
        {
          skillset.map((skill) => <Skillcard src={skill.src} alt={skill.alt} />)
        }
      </div>
    </section>
  );
}
