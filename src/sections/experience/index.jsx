import React from 'react';
import Section from '../../components/section';
import ExperienceItem from '../../components/experience-item';
import configSvc from '../../services/config-svc';

export default function ExperienceSection() {
  const data = configSvc.experienceData;
  return (
    <Section title="Experience">
      {Object.keys(data).map((key, indx) => <ExperienceItem key={indx} item={data[key]} />)}
    </Section>
  )
}