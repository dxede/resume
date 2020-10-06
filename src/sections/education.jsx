import React from 'react';
import ExperienceItem from '../components/experience-item';
import Section from '../components/section';
import configSvc from '../services/config-svc';

export default function EducationSection() {
  return (
    <Section title="Education">
      <ExperienceItem center noAnimation item={configSvc.educationData} />
    </Section>
  )
}