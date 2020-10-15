import React from 'react';
import styled from 'styled-components';
import DangerousHTML from './dangerousHTML';
import useAppServices from '../hooks/use-app-services';

const ViewGithubContainer = styled.a`
  color: ${props => props.theme.footerColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin: ${(props) => props.gap || '0.5em'};
  width: fit-content;
  margin: auto;

  &:hover {
    opacity: 0.8;
  }

  & > span > svg,
  svg {
    width: ${(props) => props.width || '1em'};
    margin-left: 0.5em;
    fill: ${props => props.theme.footerColor};

    &:hover {
      transition: fill 200ms;
    }
  }
`;

const StyledDangerousHTML = styled(DangerousHTML)`
  display: grid;
  align-items: center;
`

export default function ViewOnGithub ({ caption, linkTo }) {
  const { dataSvc } = useAppServices();
  const { svg } = dataSvc.getSimpleIcon('github') || {};
  
  return (
    <ViewGithubContainer 
      href={linkTo}
      target='_blank'
    >
      {caption || 'View Source'}
      <StyledDangerousHTML>{svg}</StyledDangerousHTML>
    </ViewGithubContainer>
  )
}