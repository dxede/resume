import React from 'react';
import logo from './logo.svg';
import Nav from './components/nav';
import Banner from './components/banner';
import Section from './components/section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Section title="Skills" />
      <Section title="Experience" />
      <Section title="Education" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
