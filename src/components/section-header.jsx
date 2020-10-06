import React from 'react';
import styled from 'styled-components';
import styleSvc from '../services/style-svc';

const SectionHeaderContainer = styled.div`
  font-size: 2em;
  font-family: ${styleSvc.fonts.headerFont};
  padding-bottom: 1em;
  border-bottom: solid;
  margin: auto; 
`;

export default function SectionHeader({ children }) {
  return <SectionHeaderContainer>{children}</SectionHeaderContainer>;
}