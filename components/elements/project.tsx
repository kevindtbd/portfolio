import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Responsibilities from './responsibilities';
import ProjectCard from './projectCard';
import { ProjectProps } from '../../types';
import lightenDarkenColor from '../../utils';

const StyledProjectContainer = styled.div<{ color: string }>`
  max-width: calc(100vw - 80px);
  position: relative;
  border-radius: 16px;
  background-color: ${({ color }) => lightenDarkenColor(color, -30)};
  margin-bottom: 3rem; 

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: max-height 0.3s ease-in-out;

  & span {
    color: #e6e6e6;
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

const Project: FC<ProjectProps> = ({
  imgAttrs, project, color, tags,
}) => {
  const { responsibilities } = project;

  const [open, setOpen] = useState<boolean>(Boolean(responsibilities));

  return (
    <StyledProjectContainer color={color}>
      <ProjectCard
        imgAttrs={imgAttrs}
        project={project}
        color={color}
        tags={tags}
        open={open}
        setOpen={setOpen}
      />
      {
      responsibilities && <Responsibilities color={color} resp={responsibilities} open={open} />
      }
    </StyledProjectContainer>
  );
};

export default Project;
