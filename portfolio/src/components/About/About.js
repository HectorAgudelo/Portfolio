import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import myself from '../../images/selfImage.jpeg';
import './About.css';

export const About = () => {
  return (
    <Container
      style={{ margin: '15% 0% auto 0%', padding: '50px' }}
      fluid
    >
      <Row className='justify-content-center align-items-center'>
        <Col sm='auto' md='6' lg='auto'>
          <Container fluid>
            <Image  src={myself} roundedCircle width='100%' height='100%'/>
          </Container>
        </Col>
        <Col sm='12' md='6' lg='5'>
          <p style={{ color: 'white', textAlign: 'justify', hyphens: 'auto' }}>
            I am a very passionate, diligent and easygoing person that enjoys
            team work and collaborative environments. I enjoy reading about
            advancements in technology and space exploration. I consider myself
            a Junior Front-End Web Developer eager to learn more and apply my
            skills in a corporate setting. I have experience in building
            web-applications in Vanilla JavaScript, Jquery, and Ajax. I also
            have some knowledge of node.js and APIs integration. During my free
            time I enjoy the outdoors. Connecting with nature has helped me
            balance hours of computer training.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
