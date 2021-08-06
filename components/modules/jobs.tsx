import * as React from 'react';
import WorkSection from './workSection';
import Project from '../elements/project';
import { previousJobs } from '../../constants/experience';

export default function Jobs() {
  return (
    <WorkSection title="Work Experience" id="work">
      <>
        {
                previousJobs.map((job) => {
                  const {
                    imgAttrs, project, color, tags,
                  } = job;
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
