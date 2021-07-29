import * as React from 'react';
import WorkSection from './workSection';
import Project from '../elements/project';
import { previousJobs } from '../../constants/experience';

export default function Jobs() {
  return (
    <WorkSection title="Work Experience">
      <>
        {
                previousJobs.map((job) => {
                  const {
                    imgAttrs, company, excerpt, color, tags,
                  } = job;
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
