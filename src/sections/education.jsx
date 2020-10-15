import React from 'react';
import ExperienceItem from '../components/experience-item';
import Section from '../components/section';
import useAppServices from '../hooks/use-app-services';

export default function EducationSection() {
  const { dataSvc } = useAppServices();
  return (
    <Section title="Education">
      <ExperienceItem center noAnimation item={dataSvc.educationData} imageWidth='5em' />
    </Section>
  )
}