import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='transparent'
      variant='dark'
      sticky='top'
    >
      <Container>
        <Navbar.Brand href='#home'>Hector Agudelo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            className='justify-content-end'
            style={{ width: '100%', alignItems: 'center' }}
          >
            <Nav.Link href='#Home'>Home</Nav.Link>
            <Nav.Link href='#About'>About</Nav.Link>
            <Nav.Link href='#Work'>Work</Nav.Link>
            <Nav.Link href='#Contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
