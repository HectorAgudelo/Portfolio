import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Container>
      <Navbar
        className='justify-content-center'
        expand='lg'
        variant='light'
        bg='transparent'
        fixed='bottom'
      >
        <p style={{ color: 'gray', fontSize: 'small', textAlign: 'center' }}>
          Copyright © 2021 Hector Agudelo-Carmona
        </p>
      </Navbar>
    </Container>
  );
};
