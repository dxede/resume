import React from 'react';
import styled from 'styled-components';
import configSvc from '../services/config-svc';
import { motion } from 'framer-motion';

const socialRowVariant = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.0025 }
  }
};

const socialIconVariant = {
  open: {
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
  opacity: 0;
`;

const SocialIconImage = styled.img`
  width: ${(props) => props.width || '1.2em'};
`;

function SocialIcon ({ gap, linkTo, name, width }) {
  const imageSrc = configSvc.makeSimpleIconURL(name);
  
  return (
    <SocialIconContainer 
      y={10}
      x={2} 
      variants={socialIconVariant} 
      gap={gap} 
      href={linkTo}
    >
      <SocialIconImage src={imageSrc} width={width} />
    </SocialIconContainer>
  )
}

export default function SocialSharing({ width, gap }) {
 return (
    <SocialRow variants={socialRowVariant} animate="open">
      {configSvc.socialSharing.map((social, indx) => 
        <SocialIcon key={indx} width={width} gap={gap} name={social.name} linkTo={social.linkTo} />)
      }
    </SocialRow>
  );
}