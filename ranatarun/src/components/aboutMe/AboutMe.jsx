import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AboutMe.css'

class AboutMe extends Component {
  render () {
    return (
      <div className="about-container text">
          Component About me
      </div>
    )
  }
}

export default withRouter(AboutMe)
