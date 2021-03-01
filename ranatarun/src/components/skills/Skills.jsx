import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Skills.css'

class Skills extends Component {
  render () {
    return (
      <div className="skills-container">
        <div className='row'>
          <div className='col-4'>
            <div className='text'>
            Component Skills
            </div>
          </div>
          <div className='col-8'>
            <div className='font'>
                Style 2
            </div>
          </div>
        </div>
          
      </div>
    )
  }
}

export default withRouter(Skills)
