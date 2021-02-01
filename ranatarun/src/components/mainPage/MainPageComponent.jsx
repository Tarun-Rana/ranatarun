import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './MainComponent.css'

class MainPageComponent extends Component {
  render () {
    return (
      <div className="text bg">
      Hi the website is in progress. Thanks for coming Cheers!
      </div>
    )
  }
}

export default withRouter(MainPageComponent)
