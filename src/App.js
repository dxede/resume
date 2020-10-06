import React from 'react';
import Nav from './components/nav';
import Banner from './components/banner';
import './App.css';
import SkillsSection from './sections/skills';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />

      <header className="App-header">
        <Banner />
      </header>
    </div>
  );
}

export default App;
