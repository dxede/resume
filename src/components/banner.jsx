import React from 'react';
import styled from 'styled-components';
import EdedeAvatar from './edede-avatar';
import SocialSharing from './social-sharing';

const BannerContainer = styled.div`
  padding: 3em;
`;

export default function Banner() {
  return (
  <BannerContainer>
    <EdedeAvatar />
    <p>I focus on using my diverse skill set to deliver effective solutions to problems at any level of the application stack.</p>
    <SocialSharing />
  </BannerContainer>)
}