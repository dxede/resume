import React from 'react';
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
import DangerousHTML from '../../components/dangerousHTML';
import ProvisionedSection from '../../components/provisioned-section';

const listVariant = {
  appear: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.0025 }
  }
};

const listItemVariant = {
  appear: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      x: { stiffness: 1000, velocity: -100 },
      scale: {
        type: 'spring',
        velocity: 5,
      }
    }
  }
};

const SkillsList = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SkillContainer = styled(motion.div)`
  display: grid;
  margin: 0 1em 1em;
  justify-items: center;
  opacity: 0;
`;

const SkillLabel = styled.p``;

const SkillImageContainer = styled(motion.div)`
  width: 3em;

  svg {
    fill: ${(props) => props.fill}
  }
`;

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
    />
  )
}