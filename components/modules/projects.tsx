import * as React from 'react';
import Project from '../elements/project';
import WorkSection from './workSection';
import { projects } from '../../constants/experience';

export default function Projects() {
  return (
    <WorkSection title="Projects">
      <>
        {
                projects.map((project) => {
                  const {
                    imgAttrs, company, excerpt, color, tags,
                  } = project;
                  return (
                    <Project
                      excerpt={excerpt}
                      imgAttrs={imgAttrs}
                      company={company}
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
