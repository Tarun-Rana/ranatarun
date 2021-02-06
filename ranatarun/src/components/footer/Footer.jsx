import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="footer-container text">
          Footer
      </div>
    )
  }
}

export default withRouter(Footer)
