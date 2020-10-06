import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useScrollPosition from '../../hooks/useScrollPosition';
import styleSvc from '../../services/style-svc';
import EdedeAvatar from '../edede-avatar';
import SocialSharing from '../social-sharing';

const navContainerVariant = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hide: {
    y: '-100%',
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
};

/**
 * This bar is used when the page is scrolled.
 */
const NavContainer = styled(motion.div)`
  padding: 0.5em;
  font-family: ${styleSvc.fonts.headerFont};
  font-size: 3em;
  display: grid;
  text-align: left;
  align-items: center;
  grid-template-columns: 80% 19%;
  background: #fbfbfb;
  gap: 1%;
  position: fixed;
  top: 0;
  width: calc(100vw - 1em);
  display: ${(props) => props.vanish ? 'grid' : 'grid'};
`;

const NavRightContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0;
  }
`;

/**
 * This bar is used when the page is not scrolled.
 */
const BannerNavContainer = styled(motion.div)`
  height: 64px;
  padding: 0.8em;
  font-family: ${styleSvc.fonts.headerFont};
  font-size: 3em;
  display: grid;
  align-items: center;
  display: ${(props) => props.vanish ? 'none' : 'grid'};
`;

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollPosition(
    ({ currentPosition: { y } }) => setIsScrolled(y > 10)
  );

  return (
    <Fragment>
      <BannerNavContainer>
        Edede Oiwoh
      </BannerNavContainer>
      
      <NavContainer 
        y='-100%'
        animate={isScrolled ? 'show' : 'hide'}
        variants={navContainerVariant}
      >
        Edede Oiwoh
        <NavRightContainer>
          <SocialSharing width="0.5em" gap="0.18em" />
          <EdedeAvatar width="1.2em" />
        </NavRightContainer>
      </NavContainer>
    </Fragment>
  )
}