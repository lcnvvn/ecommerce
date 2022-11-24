import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
  return (
    <Container fluid className="NavBar">
      <Row>
        <Col><a href=''>E-commerce</a></Col>
        <Col><a href=''>Categoría 1</a></Col>
        <Col><a href=''>Categoría 2</a></Col>
        <Col><a href=''>Categoría 3</a></Col>
        <Col><a href=''><CartWidget /></a></Col>
      </Row>
    </Container>
  );
}

export default NavBar
