import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import CanvasBackground from '../../images/markus-spiske-GXBF7vaC6L8-unsplash.jpeg';
import NavigationBAr from './NavigationBar.css'

export const NavigationBar = () => {
  return (
    <Navbar bg='transparent' expand={false}>
      <Container fluid>
        <Navbar.Brand href='#' style={{ color: 'white' }}>
          Hector Agudelo-Carmona
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='offcanvasNavbar'
          style={{
            backgroundColor: 'white',
            borderColor: 'green',
            color: 'green',
          }}
        />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
          style={{
            backgroundImage: `url(${CanvasBackground})`,
            backgroundSize: 'cover',
          }}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title
              id='offcanvasNavbarLabel'
              style={{ color: 'white' }}
            >
              Hector Agudelo-Carmona
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link className='navLinks' href='#action1'>
                Home
              </Nav.Link>
              <Nav.Link className='navLinks' href='#action2'>
                About
              </Nav.Link>
              <Nav.Link className='navLinks' href='#action2'>
                Portfolio
              </Nav.Link>
              <Nav.Link className='navLinks' href='#action2'>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
