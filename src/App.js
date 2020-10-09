import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  MotionConfig,
  AnimationFeature
} from "framer-motion"

import Nav from './components/nav';
import Banner from './components/banner';
import SkillsSection from './sections/skills';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';
import StyleSvc from './services/style-svc';

const Footer = styled.footer`
  margin: 1em 0 0;
  padding: 1em;
  background: ${props => props.theme.colors.footer};
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={new StyleSvc()}>
        <MotionConfig features={[AnimationFeature]}>
          <Nav />
          <Banner />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <Footer />
        </MotionConfig>
      </ThemeProvider>
    </div>
  );
}

export default App;
