import React from 'react';
import styled from 'styled-components';
import configSvc from '../services/config-svc';
import { motion } from 'framer-motion';
import DangerousHTML from './dangerousHTML';

const socialRowVariant = {
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.0025 }
  },
  hide: {
    opacity: 0,
    transition: { staggerChildren: 0.5, delayChildren: 0.0025 }
  }
};

const socialIconVariant = {
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      x: { stiffness: 1000, velocity: -100 }
    }
  }
};

const SocialRow = styled(motion.div)`
  display: flex;
  width: fit-content;
  margin: auto;
  opacity: 0;
`;

const SocialIconContainer = styled(motion.a)`
  margin: ${(props) => props.gap || '0.5em'};
  width: ${(props) => props.width || '1.2em'};
  opacity: 0;

  & > span > svg {
    fill: ${props => props.theme.colors.color};

    &:hover {
      fill: ${(props) => `#${props.logoColor}`};
      transition: fill 200ms;
    }
  }
`;

function SocialIcon ({ gap, linkTo, name, width }) {
  const { svg, hex } = configSvc.getIcon(name);
  
  return (
    <SocialIconContainer 
      y={-10}
      variants={socialIconVariant} 
      gap={gap} 
      href={linkTo}
      width={width}
      logoColor={hex}
    >
      <DangerousHTML>{svg}</DangerousHTML>
    </SocialIconContainer>
  )
}

export default function SocialSharing({ width, gap, animate = 'show', ...rest }) {
 return (
    <SocialRow variants={socialRowVariant} animate={animate} { ...rest }>
      {configSvc.socialSharing.map((social, indx) => 
        <SocialIcon key={indx} width={width} gap={gap} name={social.name} linkTo={social.linkTo} />)
      }
    </SocialRow>
  );
}