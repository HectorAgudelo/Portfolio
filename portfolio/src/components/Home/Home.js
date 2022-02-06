import React from 'react';
import styles from 'styled-components';
import Img from '../../images/emile-perron-xrVDYZRGdw4-unsplash.jpeg';
import Typewriter from 'typewriter-effect';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import './Home.css';
import { device } from '../DeviceScreens/DeviceScreens';

const Section = styles.section`

display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.6)), url(${Img});;
background-size: cover;
height: 100vh;
width: auto;

@media ${device.desktopL}{

};

@media ${device.laptopL}{

}
`;

const Title = styles.h1`
margin: 2px 40px;
color: #393E41;

@media ${device.laptopL}{
  font-size: 40px;
  margin: 4px 200px;
};

@media ${device.desktopL}{
font-size: 80px;
margin: 4px 400px;
}


`;

const Text = styles.h3`
display: inline-flex;
margin: 2px 40px;
gap: 8px;
color: #393E41 !important;
  
@media ${device.laptopL}{
    font-size: 20px;
    margin: 4px 200px;
  }

  @media ${device.desktopL}{
  font-size: 40px;
  margin: 4px 400px;
  };

`;

const Container = styles.div`
margin: 20px 40px;
display: flex;
flex-direction: row;
align-items: start;
justify-content:center;
gap: 30px;

@media ${device.laptopL}{
  font-size: 1em;
  margin: 20px 200px;
}

@media ${device.desktopL}{
  font-size: 2em;
  margin: 40px 400px;
  };


`;

export const Home = () => {
  return (
    <Section>
      <Title>Hector Agudelo-Carmona</Title>
      <Text>
        I am a
        <Typewriter
          options={{
            strings: [
              'Frontend Developer',
              'Software Engineer',
              'Software Developer',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Text>
      <Container>
        <a
          href='https://www.linkedin.com/in/hector-agudelo-34aa62119/'
          rel='noreferrer'
          target='_blank'
        >
          <BsLinkedin className='icon' size={'1.5em'} />
        </a>
        <a
          href='https://github.com/HectorAgudelo'
          rel='noreferrer'
          target='_blank'
        >
          <BsGithub className='icon' size={'1.5em'} />
        </a>
        <a
          href='https://twitter.com/DevAgudelo'
          rel='noreferrer'
          target='_blank'
        >
          <BsTwitter className='icon' size={'1.5em'} />
        </a>
      </Container>
    </Section>
  );
};
