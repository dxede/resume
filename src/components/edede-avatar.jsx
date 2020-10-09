import React from 'react';
import styled from 'styled-components';
import { m as motion } from 'framer-motion';

const AvatarImageContainer = styled(motion.div).attrs(props => {
  const avatarSize = props.width || '10em';
  return {
    width: avatarSize,
    height: avatarSize,
  };
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: auto;
  border-radius: ${(props) => props.square ? undefined : '60%'};
  overflow: hidden;
`;

const AvatarImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export default function EdedeAvatar({ width, height, ...rest }) {
  return (
    <AvatarImageContainer { ...rest } width={width} height={height}>
      <AvatarImage rel="preload" alt='Edede Oiwoh' src={process.env.REACT_APP_AVATAR_URL} />
    </AvatarImageContainer>
  )
}