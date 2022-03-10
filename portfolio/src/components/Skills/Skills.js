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
flex-wrap: wrap;
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content:center;

@media ${device.mobileS}{
  display: flex;
  gap: ${(props) => props.gapMobileS};
  font-Size: ${(props) => props.fontSizeMobileS};
  height: 10vh;
  
};

@media ${device.mobileM}{
  display: flex;
  gap: ${(props) => props.gapMobileM};
  font-Size: ${(props) => props.fontSizeMobileM};
  height: 10vh;
  
};

@media ${device.mobileL}{
  display: flex;
  gap: ${(props) => props.gapMobileL};
  font-Size: ${(props) => props.fontSizeMobileL};
  height: 10vh;
  
};

@media ${device.tablet}{
  display: flex;
  gap: ${(props) => props.gapTablet};
  font-Size: ${(props) => props.fontSizeTablet};
  height:20vh;
};

@media ${device.laptop}{
  display: flex;
  gap: ${(props) => props.gapLaptop};
  font-Size: ${(props) => props.fontSizeLaptop};
  height:20vh;
};

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

@media ${device.mobileS}{
  font-Size: ${(props) => props.fontSizeMobileS};
};

@media ${device.mobileM}{
  font-Size: ${(props) => props.fontSizeMobileM};
};

@media ${device.mobileL}{
  font-Size: ${(props) => props.fontSizeMobileL};
};

@media ${device.tablet}{
  font-Size: ${(props) => props.fontSizeTablet};
};

@media ${device.laptop}{
  font-Size: ${(props) => props.fontSizeLaptop};
};

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


@media ${device.mobileS}{
  margin: ${(props) => props.marginMobileS};
  padding: 10px;
 
  gap: ${(props) => props.gapMobileS};
  height:30vh;
  width: 125vmin;
};

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
  padding: 10px;
 
  gap: ${(props) => props.gapMobileM};
  height:30vh;
  width: 125vmin;
};

@media ${device.mobileL}{
  margin: ${(props) => props.marginMobileL};
  padding: 10px;
 
  gap: ${(props) => props.gapMobileL};
  height:30vh;
  width: 125vmin;
};

@media ${device.tablet}{
  margin: ${(props) => props.marginTablet};
 
  gap: ${(props) => props.gapTablet};
  height:40vh;
  width: auto;
};

@media ${device.laptop}{
  margin: ${(props) => props.marginLaptop};
 
  gap: ${(props) => props.gapLaptop};
  height:30vh;
};

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


@media ${device.mobileS}{
  font-Size: ${(props) => props.fontSizeMobileS};
  margin: ${(props) => props.marginMobileS} ;
};

@media ${device.mobileM}{
  font-Size: ${(props) => props.fontSizeMobileM};
  margin: ${(props) => props.marginMobileM} ;
};

@media ${device.mobileL}{
  font-Size: ${(props) => props.fontSizeMobileL};
  margin: ${(props) => props.marginMobileL} ;
};

@media ${device.tablet}{
  font-Size: ${(props) => props.fontSizeTablet};
  margin: ${(props) => props.marginTablet} ;
};

@media ${device.laptop}{
  font-Size: ${(props) => props.fontSizeLaptop};
  margin: ${(props) => props.marginLaptop} ;
};

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
      marginLaptop='0px 100px'
      marginTablet='0px 50px'
      marginMobileL='0px 0px'
      marginMobileM='0px 0px'
      marginMobileS='0px 0px'
      gapDesktopL='10px'
      gapLaptopL='0px'
      gapLaptop='0px'
      gapTablet='0px'
      gapMobileL='0px'
      gapMobileM='0px'
      gapMobileS='0px'
    >
      <Section flexDirection='column' alignItems='center' gap='0px'>
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          marginDesktopL='60px 0px 40px 0px'
          marginLaptopL='60px 0px 20px 0px'
          marginLaptop='60px 0px 10px 0px'
          marginTablet='0px 0px 5px 0px'
          marginMobileL='0px 0px 5px 0px'
          marginMobileM='0px 0px 5px 0px'
          marginMobileS='0px 0px 5px 0px'
          fontSizeDesktopL='80px'
          fontSizeLaptopL='45px'
          fontSizeLaptop='40px'
          fontSizeTablet='35px'
          fontSizeMobileL='35px'
          fontSizeMobileM='30px'
          fontSizeMobileS='25px'
        >
          Skills
        </Title>
        <Text
          margin='0px 0px 20px 0px'
          textAlign='center'
          fontSizeDesktopL='35px'
          fontSizeLaptopL='20px'
          fontSizeLaptop='15px'
          fontSizeTablet='15px'
          fontSizeMobileL='15px'
          fontSizeMobileM='15px'
          fontSizeMobileS='15px'
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
          fontSizeLaptop='15px'
          fontSizeTablet='15px'
          fontSizeMobileL='15px'
          fontSizeMobileM='15px'
          fontSizeMobileS='15px'
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
        gapLaptop='20px'
        gapTablet='10px'
        gapMobileL='20px'
        gapMobileM='20px'
        gapMobileS='15px'
      >
        <Container
          flexDirection='column'
          alignItems='center'
          gap='0px'
          fontSizeDesktopL='2em'
          fontSizeLaptopL='1em'
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiHtml5 className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
            fontSizeMobileL='15px'
            fontSizeMobileM='15px'
            fontSizeMobileS='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiCss3 className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
            fontSizeMobileL='15px'
            fontSizeMobileM='15px'
            fontSizeMobileS='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiJavascript className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiReact className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiBootstrap className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiStyledcomponents className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiNodedotjs className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiMongodb className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiNextdotjs className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
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
          fontSizeLaptop='0.9em'
          fontSizeTablet='0.7em'
          fontSizeMobileL='0.7em'
          fontSizeMobileM='0.7em'
          fontSizeMobileS='0.7em'
        >
          <SiStorybook className='icon' size={'3em'} />
          <Text
            margin='0px 0px 20px 0px'
            textAlign='center'
            fontSizeDesktopL='25px'
            fontSizeLaptop='15px'
          >
            Storybook
          </Text>
        </Container>
      </Container>
    </Section>
  );
};
