import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceItemContainer = styled.div`
  text-align: left;
  margin: 2em auto;
  cursor: ${(props) => props.noAnimation ? null : 'pointer'};
`;

export const ExperienceItemHeader = styled(motion.div)`
  display: grid;
  grid-template-areas: "image text";
  grid-template-columns: 4em auto;
  align-items: center;
`;

export const ExperienceItemHeaderText = styled.div`
  grid-area: text;
`;

export const ExperienceItemTitle = styled.p`
  font-weight: bold;
  font-size: 1.15em;
  margin: 0;
`;

export const ExperienceItemCompany = styled.p`
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
`;

export const ExperienceItemDate = styled.p`
  font-weight: 300;
  font-size: 0.9em;
  margin: 0;
`;

export const ExperienceItemCompanyLogoContainer = styled.div`
  grid-area: image;
  width: ${(props) => props.width || '3em'};
`;

export const ExperienceItemCompanyLogoImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ExperienceItemDescriptionItemsContainer = styled(motion.div)`
  height: ${(props) => props.noAnimation ? null : 0};
  opacity: ${(props) => props.noAnimation ? null : 0};
  display: ${(props) => props.noAnimation ? null : 'none'};
`;

export const ExperienceItemDescriptionItemsList = styled.ul`
  padding-inline-start: 5em;
`;

export const ExperienceItemDescriptionItemListEntry = styled.li`
  line-height: 1.5;
  opacity: 0.95;
`;