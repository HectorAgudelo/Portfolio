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

display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content:center;


@media ${device.laptopL}{

  display: flex;
  gap: ${(props) => props.gapLaptopL};
  font-Size: ${(props) => props.fontSizeLaptopL};
  height:20vh;
};

@media ${device.desktopL}{

  display: flex;
  gap: ${(props) => props.gapDesktopL};
  font-Size: ${(props) => props.fontSizeDesktopL};
  height:20vh;
};

`;

const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;

@media ${device.laptopL}{
  font-Size: ${(props) => props.fontSizeLaptopL};
};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
};

`;

const Section = styles.section`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;


height:60vh;

@media ${device.laptopL}{
  margin: ${(props) => props.marginLaptopL};
 
  gap: ${(props) => props.gapLaptopL};
  height:30vh;
};

@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
  
  gap: ${(props) => props.gapDesktopL};
  height:30vh;
};


`;

const Title = styles.h1`
font-size: ${(props) => props.fontSize};
margin: ${(props) => props.margin} ;
color: #393E41 !important;
text-align: ${(props) => props.titleAlign};
text-shadow: ${(props) => props.textShadow};

@media ${device.laptopL}{
  font-Size: ${(props) => props.fontSizeLaptopL};
  margin: ${(props) => props.marginLaptopL} ;
};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
  margin: ${(props) => props.marginDesktopL} ;
};


`;

export const Skills = () => {
  return (
    <Section
      flexDirection='column'
      alignItems='center'
      marginDesktopL='0px 400px'
      marginLaptopL='0px 200px'
      gapDesktopL='10px'
      gapLaptopL='0px'
    >
      <Section flexDirection='column' alignItems='center' gap='0px'>
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          marginDesktopL='60px 0px 40px 0px'
          marginLaptopL='60px 0px 20px 0px'
          fontSizeDesktopL='80px'
          fontSizeLaptopL='45px'
        >
          Skills
        </Title>
        <Text
          margin='0px 0px 20px 0px'
          textAlign='center'
          fontSizeDesktopL='35px'
          fontSizeLaptopL='20px'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text
          margin='0px 0px 20px 0px'
          textAlign='center'
          fontSizeDesktopL='35px'
          fontSizeLaptopL='20px'
        >
          <a href='https://docs.google.com/document/d/1-WiqkWGrUnhsf7YyjKerPKAkakKRrd5j/edit?usp=sharing&ouid=109866500808769579371&rtpof=true&sd=true'>
            View My Resume
          </a>
        </Text>
      </Section>
      <Container
        flexDirection='row'
        alignItems='center'
        gapDesktopL='60px'
        gapLaptopL='30px'
      >
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiHtml5 className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            HTML
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiCss3 className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            CSS
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiJavascript className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            JavaScript
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiReact className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            React
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiBootstrap className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            Bootstrap
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiStyledcomponents className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            Style Components
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiNodedotjs className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            NodeJS
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiMongodb className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            MongoDB
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
          <SiNextdotjs className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
          >
            NextJS
          </Text>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
        >
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
