import React from 'react';
import myself from '../../images/Self.jpg';
import styles from 'styled-components';
import './About.css';

const Image = styles.img`
margin: 0px;
height: 400px;
width: auto;
`;

const Section = styles.section`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${props=>props.alignItems};
justify-content: center;
margin: ${(props) => props.margin};
gap: 0px;
`;

const Title = styles.h1`
font-size: ${props=>props.fontSize};
margin: 0px 0px 10px 0px;
color: #393E41 !important;
text-align: ${props=>props.titleAlign};
text-shadow: ${props=>props.textShadow};
`;

const Text = styles.p`
text-align: ${props=>props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;
`;

const Container = styles.div`
margin: 0px 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
gap: 10px;
height: 100vh;
width: auto;
`;

export const About = () => {
  return (
    <Container>
      <Section flexDirection='column'  alignItems='center'>
        <Title titleAlign='center' textShadow='2px 5px 0 rgba(0,0,0,0.2)'>About</Title>
        <Text margin='0px 0px 20px 0px' textAlign='center' fontSize='40px'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Section>
      <Section flexDirection='row' alignItems='flex-start' margin='0px' >
        <Image src={myself} />
        <Section flexDirection='column' margin='0px 40px' alignItems='flex-start'>
          <Title titleAlign='left' fontSize='25px' textShadow='none'>Frontend Developer</Title>
          <Text textAlign='left' margin='0px 0px '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            enim neque volutpat ac. Nibh cras pulvinar mattis nunc sed blandit
            libero. Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
            Faucibus ornare suspendisse sed nisi lacus sed viverra. Porta nibh
            venenatis cras sed felis eget velit aliquet sagittis. Urna molestie
            at elementum eu. Tempus quam pellentesque nec nam aliquam sem et
            tortor. Consectetur a erat nam at lectus urna duis. Nunc sed velit
            dignissim sodales. Cras pulvinar mattis nunc sed blandit libero.
            Ipsum consequat nisl vel pretium lectus quam. Pretium quam vulputate
            dignissim suspendisse in est. Donec ac odio tempor orci dapibus
            ultrices in.
          </Text>
        </Section>
      </Section>
    </Container>
  );
};
