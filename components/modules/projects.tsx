import * as React from 'react';
import Project from '../elements/project';
import WorkSection from '../elements/workSection';
import { projects } from '../../constants/index';

export default function Projects() {
  return (
    <WorkSection title="Projects" id="projects">
      <>
        {
                projects.map((proj) => {
                  const {
                    imgAttrs, project, color, tags,
                  } = proj;
                  return (
                    <Project
                      key={project.company}
                      project={project}
                      imgAttrs={imgAttrs}
                      color={color}
                      tags={tags}
                    />
                  );
                })
            }
      </>
    </WorkSection>
  );
}
