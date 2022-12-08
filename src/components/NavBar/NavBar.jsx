import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <NavLink to="/" className='btn btn-outline-light'>E-commerce</NavLink> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/category/tazas" className='btn btn-dark'>Tazas</NavLink>
            <NavLink to="/category/vasos" className='btn btn-dark'>Vasos</NavLink>
          </Nav>
          <Nav>
            <NavLink href="#"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}
  
  export default NavBar
  