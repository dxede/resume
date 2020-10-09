import React, { lazy } from 'react';
import CustomSuspense from '../../components/custom-suspense';
import configSvc from '../../services/config-svc';

const Section = lazy(() => import('../../components/section'));
const ExperienceItem = lazy(() => import('../../components/experience-item/'));

export default function ExperienceSection() {
  const data = configSvc.experienceData;
  return (
    <CustomSuspense>
      <Section title="Experience">
        <CustomSuspense>
          {Object.keys(data).map((key, indx) => <ExperienceItem noAnimation key={indx} item={data[key]} />)}
        </CustomSuspense>
      </Section>
    </CustomSuspense>
  )
}