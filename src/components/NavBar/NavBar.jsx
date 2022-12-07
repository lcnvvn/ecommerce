import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Categoría 1</Nav.Link>
            <Nav.Link href="#">Categoría 2</Nav.Link>
            <Nav.Link href="#">Categoría 3</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}
  
  export default NavBar
  