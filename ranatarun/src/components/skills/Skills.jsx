import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Skills.css'

class Skills extends Component {
  render () {
    return (
      <div className="skills-container text">
          Component Skills
      </div>
    )
  }
}

export default withRouter(Skills)
