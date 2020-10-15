import React from 'react';
import styled from 'styled-components';

const SectionHeaderContainer = styled.div`
  font-size: 2em;
  font-family: ${props => props.theme.fonts.headerFont};
  padding-bottom: 0.5em;
  border-bottom: ${props => `solid 0.5px ${props.theme.separator || ''}`};
  margin: auto; 
`;

export default function SectionHeader({ children }) {
  return <SectionHeaderContainer>{children}</SectionHeaderContainer>;
}