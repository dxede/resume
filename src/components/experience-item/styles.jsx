import styled from 'styled-components';
import { m as motion } from 'framer-motion';

export const ExperienceItemContainer = styled(motion.div)`
  display: grid;
  grid-template-areas: ${(props) => props.center ? '"image" "header"' : '"image header" "image description"'};
  grid-template-columns: ${(props) => props.center ? 'auto' : '15em auto'};
  text-align: ${(props) => props.center ? 'center' : 'left'};
  margin: 2em auto;
  justify-content: ${(props) => props.center ? 'center' : null};
  cursor: ${(props) => props.noAnimation ? null : 'pointer'};

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => props.center ? 'auto' : '4em auto'};
    grid-column-gap: ${(props) => props.center ? null : '1em'};
    grid-template-areas: ${(props) => props.center ? '"image" "header"' : '"image header" ". description"'};
  }
`;

export const ExperienceItemHeader = styled(motion.div)`
  grid-area: header;
  align-items: center;
  justify-items: ${(props) => props.center ? 'center' : null};
`;

export const ExperienceItemHeaderText = styled(motion.div)`
  grid-area: text;
`;

export const ExperienceItemTitle = styled(motion.p)`
  font-weight: bold;
  font-size: 1.15em;
  margin: ${({ skeleton, center }) => skeleton ? `0.2em ${center ? 'auto' : '0'}` : 0};
  padding: ${({ skeleton }) => skeleton ? '0.5em 0' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  border-radius: ${({ skeleton }) => skeleton ? '2px' : null};
  max-width: ${({ skeleton, center }) => skeleton ? center ? '90%' : '60%' : null};
`;

export const ExperienceItemCompany = styled(motion.p)`
  font-weight: 300;
  line-height: 1.5;
  margin: ${({ skeleton, center }) => skeleton ? `0.2em ${center ? 'auto' : '0'}` : 0};
  padding: ${({ skeleton }) => skeleton ? '0.4em 0' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  border-radius: ${({ skeleton }) => skeleton ? '2px' : null};
  max-width: ${({ skeleton }) => skeleton ? '50%' : null};
`;

export const ExperienceItemDate = styled(motion.p)`
  font-weight: 300;
  font-size: 0.9em;
  margin: ${({ skeleton, center }) => skeleton ? `0.2em ${center ? 'auto' : '0'}` : 0};
  padding: ${({ skeleton }) => skeleton ? '0.4em 0' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  border-radius: ${({ skeleton }) => skeleton ? '2px' : null};
  max-width: ${({ skeleton }) => skeleton ? '40%' : null};
`;

export const ExperienceItemCompanyLogoContainer = styled(motion.div)`
  grid-area: image;
  width: ${(props) => props.width || '8em'};
  margin: auto;
  margin-bottom: ${(props) => props.center ? '1em' : null};
  padding: ${({ skeleton }) => skeleton ? '3em 0' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  border-radius: ${({ skeleton }) => skeleton ? '4px' : null};

  @media (max-width: 768px) {
    width: ${(props) => props.width || '3em'};
  }
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

export const ExperienceItemDescriptionItemsList = styled(motion.ul)`
  padding-inline-start: ${({ skeleton }) => skeleton ? '0em' : '1em'};
`;

export const ExperienceItemDescriptionItemListEntry = styled(motion.li)`
  line-height: ${({ skeleton }) => skeleton ? 0.8 : 1.5};
  opacity: 0.95;
  color: ${({ skeleton }) => skeleton ? 'transparent' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  margin: ${({ skeleton }) => skeleton ? '0.5em 0' : null};
  border-radius: ${({ skeleton }) => skeleton ? '4px' : null};
  max-width: ${({ skeleton }) => skeleton ? '95%' : null};
`;