import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import MainPageComponent from './components/mainPage/MainPageComponent';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="conainer-fluid">
      <Router>
          <HeaderComponent />
          <MainPageComponent />
          <AboutMe/>
          <Skills/>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
