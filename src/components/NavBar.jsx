import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#inicio">Cellular Vibe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/C">Celulares Modelo C</Nav.Link>
            <Nav.Link href="/category/J">Celulares Modelo J</Nav.Link>
            <Nav.Link href="/category/G">Celulares Modelo G</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    
);