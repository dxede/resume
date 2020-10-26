import React from 'react';
import { SkillContainer, SkillImageContainer, SkillsList, SkillLabel } from './styles';
import { listItemVariant, listVariant } from './variants.js'
import DangerousHTML from '../../components/dangerousHTML';
import ProvisionedSection from '../../components/provisioned-section';

export default function SkillsSection() {
  return (
    <ProvisionedSection
      title="Skills"
      fetchFunctionName="fetchSkillsData"
      mapFunc={(sd, indx) => (
        <SkillContainer
          y={10}
          scale={0}
          variants={listItemVariant}
          key={indx} 
        >
          <SkillImageContainer 
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring' }}
            fill={`#${sd.hex}`}
          >
            <DangerousHTML>{sd.svg}</DangerousHTML>
          </SkillImageContainer>
          <SkillLabel>{sd.label}</SkillLabel>
        </SkillContainer>
      )}
      WrapperComponent={({ children }) => 
        <SkillsList variants={listVariant} animate="appear">
          {children}
        </SkillsList>}
      skeletonCount={7}
      useSkillsSkeletons={true}
    />
  )
}