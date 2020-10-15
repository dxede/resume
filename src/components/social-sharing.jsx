import React, { lazy } from 'react';
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
import DangerousHTML from './dangerousHTML';
import CustomSuspense from './custom-suspense';
import useAppServices from '../hooks/use-app-service';

const DownloadIcon = lazy(() => import('./dowload-icon'));

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

  & > span > svg,
  svg {
    fill: ${props => props.theme.colors.color};

    &:hover {
      fill: ${(props) => `#${props.logoColor}`};
      transition: fill 200ms;
    }
  }
`;

function SocialIcon ({ gap, linkTo, name, width, svgOverride = null, svgOverrideHex = null }) {
  const { dataSvc } = useAppServices();
  const { svg, hex } = dataSvc.getIcon(name) || {};
  
  return (
    <SocialIconContainer 
      y={-10}
      variants={socialIconVariant} 
      gap={gap} 
      href={linkTo}
      width={width}
      logoColor={svgOverrideHex || hex}
      target='_blank'
    >
      {svgOverride || <DangerousHTML>{svg}</DangerousHTML>}
    </SocialIconContainer>
  )
}

export default function SocialSharing({ width, gap, isForNav, animate = 'show', ...rest }) {
  const { dataSvc } = useAppServices();

  return (
    <SocialRow variants={socialRowVariant} animate={animate} { ...rest }>
      {!isForNav &&
        <SocialIcon 
          width={width}
          gap={gap}
          name='download'
          svgOverride={<CustomSuspense><DownloadIcon /></CustomSuspense>}
          svgOverrideHex='a9a9a9'
          linkTo='https://s3.amazonaws.com/resume.edede/Resume.pdf'
        />
      }
      {dataSvc.socialSharing.map((social, indx) => 
        <SocialIcon key={indx} width={width} gap={gap} name={social.name} linkTo={social.linkTo} svgOverrideHex={social.hex} />)
      }
    </SocialRow>
  );
}