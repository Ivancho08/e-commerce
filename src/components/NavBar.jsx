import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Cellular Vibe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/C">Celulares Modelo C</Nav.Link>
            <Nav.Link as={Link} to="/category/J">Celulares Modelo J</Nav.Link>
            <Nav.Link as={Link} to="/category/G">Celulares Modelo G</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    
);