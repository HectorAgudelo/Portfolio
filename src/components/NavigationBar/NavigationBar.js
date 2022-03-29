import React, { useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css';

export const NavigationBar = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };
  useRef(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='light'
      fixed='top'
      className={backgroundColor ? 'backgroundColor active' : 'backgroundColor'}
    >
      <Container>
        <Navbar.Brand className='navText' href='#home' onClick={props.home}>
          Hector Agudelo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            className='justify-content-end'
            style={{ width: '100%', alignItems: 'center' }}
          >
            <Nav.Link className='navText' href='#Home' onClick={props.home}>
              Home
            </Nav.Link>
            <Nav.Link className='navText' href='#About' onClick={props.about}>
              About
            </Nav.Link>
            <Nav.Link
              className='navText'
              href='#Projects'
              onClick={props.projects}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className='navText'
              href='#Contact'
              onClick={props.contact}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
