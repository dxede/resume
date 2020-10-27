import styled from 'styled-components';
import { m as motion } from 'framer-motion';

export const SkillsList = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SkillContainer = styled(motion.div)`
  display: grid;
  margin: 0 1em 1em;
  justify-items: center;
  opacity: ${({ skeleton }) => skeleton ? 1 : 0};
  padding: ${({ skeleton }) => skeleton ? '0.4em 0' : null};
  border-radius: ${({ skeleton }) => skeleton ? '2px' : null};
`;

export const SkillLabel = styled(motion.p)`
  padding: ${({ skeleton }) => skeleton ? '0.5em 2em' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  border-radius: ${({ skeleton }) => skeleton ? '2px' : null};
`;

export const SkillImageContainer = styled(motion.div)`
  width: 3em;
  padding: ${({ skeleton }) => skeleton ? '2em 0.8em' : null};
  background: ${({ skeleton, theme }) => skeleton ? theme.skeletonBase : null};
  border-radius: ${({ skeleton }) => skeleton ? '2px' : null};

  svg {
    fill: ${(props) => props.fill}
  }
`;