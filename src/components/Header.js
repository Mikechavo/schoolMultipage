import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-background">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 style={{ color: 'red' }}>Welcome to Texas</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" className="App-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/capital" className="App-link">
            Capital of Texas
          </Nav.Link>
          <Nav.Link as={Link} to="/dallas" className="App-link">
            Dallas
          </Nav.Link>
          <Nav.Link as={Link} to="/houston" className="App-link">
            Houston
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="App-link">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

