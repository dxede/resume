import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav';
import Banner from './components/banner';
import './App.css';
import SkillsSection from './sections/skills';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';

const Footer = styled.footer`
  margin: 1em 0 0;
  padding: 1em;
  background: #05233e;
`;

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />

      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
