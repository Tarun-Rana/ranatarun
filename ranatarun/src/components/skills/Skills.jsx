import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Skills.css'

class Skills extends Component {
  render () {
    return (
      <div className=" container-fluid skills-container">
        <div className='row'>
          <div className='col-lg-8 col-md-8  col-sm-6 col-xs-4 text'>
            
          </div>
          <div className='col-lg-4 col-md-8 col-sm-6 col-xs-8 mt-5'>
            <div className='font'>
                Did I told you I'm a big time F1 enthusiast???
            </div>
            <div className='text'>
              Ps. Ask me about KERS and DRS.
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Skills)
