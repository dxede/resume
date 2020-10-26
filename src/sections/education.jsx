import React from 'react';
import ProvisionedSection from '../components/provisioned-section';
import ExperienceItem from '../components/experience-item/';

export default function EducationSection() {
  return (
    <ProvisionedSection
      title="Education"
      fetchFunctionName="fetchEducationData"
      mapFunc={item => <ExperienceItem key={item.title} center noAnimation item={item} imageWidth='5em' />}
      skeletonCount={1}
      useCenteredSkeleton={true}
    />
  )
}