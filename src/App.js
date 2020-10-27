import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  MotionConfig,
  AnimationFeature
} from "framer-motion";
import { Sun, Moon } from 'phosphor-react';
import Nav from './components/nav';
import Banner from './components/banner';
import SkillsSection from './sections/skills';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';
import ViewOnGithub from './components/view-on-github';
import useAppServices from './hooks/use-app-services';

const GlobalStyles = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.50s linear;
  }

  footer {
    margin: 1em 0 0;
    padding: 1em;
    background: ${({ theme }) => theme.footer};
  }
`;

const ThemeToggleButton = styled.button`
  position: fixed;
  bottom: 1em;
  left: 1em;
  border: none;
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }
  
  svg {
    color: ${({ theme }) => theme.togglerColor};
    width: 1.5em;
    opacity: 0.5;

    &:hover {
      opacity: 1;
      transform: scale(1.2);
      transition: scale 200ms;
    }
  }
`;

function App() {
  const { stylesSvc } = useAppServices();
  const [theme, setTheme] = useState(stylesSvc.activeTheme);
  const isLightTheme = theme.name === 'light';

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ThemeToggleButton 
          title="Change the theme"
          onClick={() => setTheme(stylesSvc.toggleActiveTheme())}
        >
          {isLightTheme ? 
            <Moon size="1.5em" /> : <Sun size="1.5em" />
          }
        </ThemeToggleButton>
        
        <MotionConfig features={[AnimationFeature]}>
          <Nav />
          <Banner />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <footer> 
            <div style={{
              display: 'grid',
              justifyItems: 'center',
            }}>
              <ViewOnGithub
                linkTo="https://github.edede.ca/resume"
                name="github"
              />
            </div>
          </footer>
        </MotionConfig>
      </ThemeProvider>
    </div>
  );
}

export default App;
