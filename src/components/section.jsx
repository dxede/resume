import React from 'react';
import styled from 'styled-components';
import SectionHeader from './section-header';

const SectionContainer = styled.div`
  padding: 4em 2em;
`;

export default function Section ({ title, children }) {
  return (
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </SectionContainer>
  )
}