import React from 'react';
import Section from '../../components/section';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import configSvc from '../../services/config-svc';

const SkillsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SkillImageContainer = styled.div`
  width: 3em;
  margin: 0 1em 1em;

  svg {
    fill: ${(props) => props.fill}
  }
`;

export default function SkillsSection() {
  return (
    <Section title="Skills">
      <SkillsContainer>
        {configSvc.skillsData.map((sd, indx) => (
          <SkillImageContainer 
            key={indx} 
            dangerouslySetInnerHTML={{__html: sd.svg}}
            fill={`#${sd.hex}`}
          />
        ))}
      </SkillsContainer>
    </Section>
  )
}