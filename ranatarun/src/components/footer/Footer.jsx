import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer-container'>
        <div className='bg'>
          <div className='text'>Footer</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer)
