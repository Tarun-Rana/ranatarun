import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import MainPageComponent from './components/mainPage/MainPageComponent'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="conainer-fluid bg">
      {/* <video className="Video" autoPlay muted loop >
        <source src={Video} type="video/webm"></source>
      </video> */}
      <Router>
          <HeaderComponent />
          <MainPageComponent />
      </Router>
    </div>
  );
}

export default App;
