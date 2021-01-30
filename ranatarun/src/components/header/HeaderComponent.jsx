import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, NavDropdown } from 'react-bootstrap'
import './HeaderComponent.css'
import Logo from './tr.png'

class HeaderComponent extends Component {
  render () {
    return (
      <header>
        <Navbar className="header"> 
          <Navbar.Brand><img className="logo-size" src={Logo}/></Navbar.Brand>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item >Action</NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <a>About</a>
        </Navbar>
      </header>
    )
  }
}

export default withRouter(HeaderComponent)
