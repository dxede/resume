import React from 'react';
import ProvisionedSection from '../../components/provisioned-section';
import ExperienceItem from '../../components/experience-item/';

export default function ExperienceSection() {
  return (
    <ProvisionedSection
      title="Experience"
      fetchFunctionName="fetchExperienceData"
      mapFunc={item => <ExperienceItem noAnimation key={item.dateString} item={item} />}
    />
  )
}