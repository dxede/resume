import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceItemContainer = styled.div`
  display: grid;
  grid-template-areas: "header header" ". description";
  grid-template-columns: ${(props) => props.center ? null : '4em auto'};
  text-align: ${(props) => props.center ? 'center' : 'left'};
  margin: 2em auto;
  cursor: ${(props) => props.noAnimation ? null : 'pointer'};
`;

export const ExperienceItemHeader = styled(motion.div)`
  display: grid;
  grid-template-areas: ${(props) => props.center ? `"image" "text"` : `"image text"`};
  grid-area: header;
  grid-template-columns: ${(props) => props.center ? null : `4em auto`};
  align-items: center;
  justify-items: ${(props) => props.center ? 'center' : null};
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
  margin-bottom: ${(props) => props.center ? '1em' : null};
`;

export const ExperienceItemCompanyLogoImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ExperienceItemDescriptionItemsContainer = styled(motion.div)`
  grid-area: description;
  height: ${(props) => props.noAnimation ? null : 0};
  opacity: ${(props) => props.noAnimation ? null : 0};
  display: ${(props) => props.noAnimation ? null : 'none'};
`;

export const ExperienceItemDescriptionItemsList = styled.ul`
  padding-inline-start: 1em;
`;

export const ExperienceItemDescriptionItemListEntry = styled.li`
  line-height: 1.5;
  opacity: 0.95;
`;