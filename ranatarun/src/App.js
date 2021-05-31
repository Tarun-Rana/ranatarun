import React from 'react'
import './App.css'
import HeaderComponent from './components/header/HeaderComponent'
import MainPageComponent from './components/mainPage/MainPageComponent'
import AboutMe from './components/aboutMe/AboutMe'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <HeaderComponent />
        <Switch>
          <Route path="/" exact component={MainPageComponent} />
          <Route path="/journey" exact component={AboutMe} />
          <Route path="/aboutMe" exact component={Skills} />
          <Route path="/skills" exact component={Skills} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
