import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/NavigationBar.css'


const NavigationBar = () => {
  return (
    <Navbar bg='light' expand="md"> 
      {/* <Navbar.Brand href='/'> Portfolio </Navbar.Brand> */}
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          {/* as={NavLink} applies Bootstrap styling */}
          {/* Otherwise acts as normal link */}
          <Nav.Link as={NavLink} to="/" activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>

          
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavigationBar
