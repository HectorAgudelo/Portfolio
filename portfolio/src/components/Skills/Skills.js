import React from 'react';
import styles from 'styled-components';
import { device } from '../DeviceScreens/DeviceScreens';
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiStorybook,
} from 'react-icons/si';

const Container = styles.div`
margin: ${(props) => props.margin};
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content:center;
gap: ${(props) => props.gap};



@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
  display: flex;
  gap: ${(props) => props.gapDesktopL};
  font-Size: ${(props) => props.fontSizeDesktopL};
  height:20vh;
}
`;

const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
}
`;

const Section = styles.section`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;
margin: ${(props) => props.margin};
gap: ${(props) => props.gap};
height:60vh;

@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
  font-Size: ${(props) => props.fontSizeDesktopL};
  gap: ${(props) => props.gapDesktopL};
  height:30vh;
}
`;

const Title = styles.h1`
font-size: ${(props) => props.fontSize};
margin: ${(props) => props.margin} ;
color: #393E41 !important;
text-align: ${(props) => props.titleAlign};
text-shadow: ${(props) => props.textShadow};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
}
`;

export const Skills = () => {
  return (
    <Section flexDirection='column' alignItems='center' marginDesktopL='0px 400px' gapDesktopL='10px'>
      <Section flexDirection='column' alignItems='center' gap='0px'>
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          margin='60px 0px 40px 0px'
          fontSizeDesktopL='80px'
        >
          Skills
        </Title>
        <Text
          margin='0px 0px 20px 0px'
          textAlign='center'
          fontSizeDesktopL='35px'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text
          margin='0px 0px 20px 0px'
          textAlign='center'
          fontSizeDesktopL='35px'
        >
          <a href='https://docs.google.com/document/d/1-WiqkWGrUnhsf7YyjKerPKAkakKRrd5j/edit?usp=sharing&ouid=109866500808769579371&rtpof=true&sd=true'>
            View My Resume
          </a>
        </Text>
      </Section>
      <Container flexDirection='row' gap='30px' alignItems='center' gapDesktopL='60px'>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiHtml5 className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            HTML
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiCss3 className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            CSS
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiJavascript className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            JavaScript
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiReact className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            React
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiBootstrap className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            Bootstrap
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiStyledcomponents className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            Style Components
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiNodedotjs className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            NodeJS
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiMongodb className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            MongoDB
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiNextdotjs className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            NextJS
          </Text>
        </Container>
        <Container flexDirection='column' alignItems='center' gap='0px' fontSizeDesktopL='2em'>
          <SiStorybook className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
       
            Storybook
          </Text>
        </Container>
      </Container>
    </Section>
  );
};
