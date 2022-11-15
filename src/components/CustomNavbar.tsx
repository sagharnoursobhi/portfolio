import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../asset/styles/navbar.scss';

export default function CustomNavbar() {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container>
        <Navbar.Toggle className="navbar-btn" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="brand">Saghar.</div>
          <Nav>
            <Nav.Link className="me-5" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="me-5" as={NavLink} to="/contact">contact</Nav.Link>
            <Nav.Link className="me-5" as={NavLink} to="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="me-5" as={NavLink} to="/Skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

