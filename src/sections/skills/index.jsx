import React from 'react';
import Section from '../../components/section';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import configSvc from '../../services/config-svc';

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

const SkillLabel = styled(motion.p)`
`;

const SkillImageContainer = styled(motion.div)`
  width: 3em;

  svg {
    fill: ${(props) => props.fill}
  }
`;

export default function SkillsSection() {
  return (
    <Section title="Skills">
      <SkillsList variants={listVariant} animate="appear">
        {configSvc.skillsData.map((sd, indx) => (
          <SkillContainer
            y={10}
            scale={0}
            variants={listItemVariant}
            key={indx} 
          >
            <SkillImageContainer 
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring' }}
              dangerouslySetInnerHTML={{__html: sd.svg}}
              fill={`#${sd.hex}`}
            />
            <SkillLabel>{sd.label}</SkillLabel>
          </SkillContainer>
        ))}
      </SkillsList>
    </Section>
  )
}