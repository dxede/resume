import React from 'react';
import { m as motion } from 'framer-motion';
import styled from 'styled-components';
import SectionHeader from './section-header';

const SectionContainer = styled(motion.div)`
  padding: 1em 2em;
  max-width: 85%;
  margin: auto;

  @media (max-width: 992px) {
    max-width: 90%;
  }

  @media (min-width: 1200px) {
    max-width: 800px;
  }
`;

const SectionBody = styled.div`
  margin-top: 2em;
`;

export default function Section ({ title, children }) {
  return (
    <SectionContainer
      transition={{
        maxWidth: { type: 'spring' }
      }}
    >
      <SectionHeader>{title}</SectionHeader>
      {children ? <SectionBody>{children}</SectionBody> : null}
    </SectionContainer>
  )
}