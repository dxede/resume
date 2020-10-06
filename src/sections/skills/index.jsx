import React from 'react';
import Section from '../../components/section';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import configSvc from '../../services/config-svc';

const SkillsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SkillContainer = styled(motion.div)`
  display: grid;
  margin: 0 1em 1em;
  justify-items: center;
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
      <SkillsList>
        {configSvc.skillsData.map((sd, indx) => (
          <SkillContainer
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