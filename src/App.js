import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './components/nav';
import Banner from './components/banner';
import './App.css';
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
        <Nav />
        <Banner />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />

        <Footer>
          
        </Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
