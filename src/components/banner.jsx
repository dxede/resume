import React from 'react';
import styled from 'styled-components';
import EdedeAvatar from './edede-avatar';
import SocialSharing from './social-sharing';

const BannerContainer = styled.div`
  padding: 3em;
`;

const BannerText = styled.div`
  max-width: 85%;
  margin: 1em auto;

  @media (max-width: 992px) {
    max-width: 90%;
  }

  @media (min-width: 1200px) {
    max-width: 40%;
  }
`;

export default function Banner() {
  return (
  <BannerContainer>
    <EdedeAvatar />
    <BannerText>
      I focus on using my diverse skill set to deliver effective solutions to problems at any level of the application stack.
    </BannerText>
    <SocialSharing />
  </BannerContainer>)
}