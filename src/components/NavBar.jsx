import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from 'react-bootstrap';

const categories = data.map((product) => product.category);
const uniqueCategories = new Set(categories);
export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Cellular Vibe</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          {[...uniqueCategories].map((category) => (
            <NavLink as={NavLink} key={category} to={`/category/${category}`}>
              {category}
            </NavLink>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
);