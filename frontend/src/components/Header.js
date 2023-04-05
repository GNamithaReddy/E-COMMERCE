import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import '../css/nav.css'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const profileHandler = () => {
   navigate('/profile')
  }
  return (
    <header>
    <Navbar className='nav1' variant='dark' expand="lg" collapseOnSelect>
      <Container>
      <Link to='/'>
      <Navbar.Brand>E-CART</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/cart'><i className="fas fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item onClick={profileHandler}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : <Nav.Link as={Link} to='/login' ><i className="fas fa-solid fa-user"></i> Sign In</Nav.Link>}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header

