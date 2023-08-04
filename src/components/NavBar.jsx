import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#inicio">Cellular Vibe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#celulares">Celulares</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#st">Servicio Técnico</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    
);