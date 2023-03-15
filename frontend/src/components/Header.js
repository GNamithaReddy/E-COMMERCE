import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import '../css/nav.css'
const Header = () => {
  return (
    <header>
    <Navbar className='nav' variant='dark' expand="lg" collapseOnSelect>
      <Container>
      <Link to='/'>
      <Navbar.Brand>E-CART</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/cart'><i className="fas fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
            <Nav.Link as={Link} to='/login' ><i className="fas fa-solid fa-user"></i> Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header

