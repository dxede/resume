import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useScrollPosition from '../../hooks/useScrollPosition';
import EdedeAvatar from '../edede-avatar';
import SocialSharing from '../social-sharing';

const navContainerVariant = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
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

const imageVariant = {
  hidden: {
    y: `-250%`,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    }
  },

  shown: {
    y: 0,
    opacity: 1,
    transition: {
      style: 'spring',
      opacity: {
        delay: 0.01
      }
    }
  }
};

/**
 * This bar is used when the page is scrolled.
 */
const NavContainer = styled(motion.div)`
  padding: 0.5em;
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 3em;
  display: grid;
  text-align: left;
  align-items: center;
  grid-template-columns: 50% 50%;
  gap: 1%;
  position: fixed;
  top: 0;
  width: calc(100vw - 1em);
  display: ${(props) => props.vanish ? 'grid' : 'grid'};
  z-index: ${props => props.theme.z.nav};

  @media (max-width: 1200px) {
    background: ${props => props.theme.colors.nav};
  }

  @media (max-width: 390px) {
    grid-template-columns: auto;
    grid-template-rows: 1em;
    justify-items: center; 
  }
`;

const NavRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 3em;
  display: grid;
  align-items: center;
  display: ${(props) => props.vanish ? 'none' : 'grid'};
`;

export default function Nav() {
  const [isScrolledPastName, setNameScrolled] = useState(false);
  const [isScrolledPastImage, setImageScrolled] = useState(false);
  const [isScrolledPastSocialIcons, setSocialIconsScrolled] = useState(false);

  useScrollPosition(
    ({ currentPosition: { y } }) => {
      setNameScrolled(y > 25);
      setImageScrolled(y > 350);
      setSocialIconsScrolled(y > 420);
    }
  );

  return (
    <Fragment>
      <BannerNavContainer>
        Edede Oiwoh
      </BannerNavContainer>
      
      <NavContainer 
        y='-100%'
        animate={isScrolledPastName ? 'show' : 'hide'}
        variants={navContainerVariant}
      >
        Edede Oiwoh
        <NavRightContainer>
          <SocialSharing 
            width="0.4em" 
            gap="0.18em"
            animate={isScrolledPastSocialIcons ? 'show' : 'hide'}
          />
          <EdedeAvatar 
            width="1.2em"
            animate={isScrolledPastImage ? 'shown' : 'hidden'}
            variants={imageVariant}
          />
        </NavRightContainer>
      </NavContainer>
    </Fragment>
  )
}