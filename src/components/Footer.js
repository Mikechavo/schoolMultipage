import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Footer = () => {
  return (
   <Navbar expand="lg" className="navbar-background">
   <Container>
     <Navbar.Brand as={Link} to="/">
       <h4 style={{ color: 'red' }}>To learn more click one of the following links:</h4>
     </Navbar.Brand>
     <Nav>
       <Nav.Link as={Link} to="/freq" className="App-link">
       Frequently Requested Information
       </Nav.Link>
       <Nav.Link as={Link} to="/people" className="App-link">
         People & Data Survey
       </Nav.Link>
     </Nav>
   </Container>
 </Navbar>
  );
}

export default Footer;