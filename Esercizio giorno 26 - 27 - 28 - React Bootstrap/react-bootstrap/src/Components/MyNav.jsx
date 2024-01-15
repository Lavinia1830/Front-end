import React from 'react'; /*questo import non è nesessario */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import {Container, Nav, Navbar} from 'react-bootstrap' è un'alternativa di quelli sopra*/ 

export default function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid> {/*mette il menu senza text-center in bootstrap" */}
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
