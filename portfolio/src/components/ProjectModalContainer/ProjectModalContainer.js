import React from 'react';
import styles from 'styled-components';
import { ProjectModalRender } from '../ProjectModalRender/ProjectModalRender';
import { device } from '../DeviceScreens/DeviceScreens';
import AntidoteRestaurant from '../../images/A.png';
import Chat from '../../images/ChatRoom.png';
import { Button } from 'react-bootstrap';
import './ProjectModalContainer.css'

const Container = styles.div`
flex-wrap: wrap;
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content:center;
width: inherit;

@media ${device.mobileS}{
 
  gap: ${(props) => props.gapMobileS};
  font-Size: ${(props) => props.fontSizeMobileS};
  height: auto;
  
};

@media ${device.mobileM}{
  display: flex;
  gap: ${(props) => props.gapMobileM};
  font-Size: ${(props) => props.fontSizeMobileM};
  height: auto;
  
};

@media ${device.mobileL}{
  display: flex;
  gap: ${(props) => props.gapMobileL};
  font-Size: ${(props) => props.fontSizeMobileL};
  height: auto;
  
};

@media ${device.tablet}{
  display: flex;
  gap: ${(props) => props.gapTablet};
  font-Size: ${(props) => props.fontSizeTablet};
  height:auto;
};

@media ${device.laptop}{
  display: flex;
  gap: ${(props) => props.gapLaptop};
  font-Size: ${(props) => props.fontSizeLaptop};
  height:auto;
};

@media ${device.laptopL}{
 display: flex;
  gap: ${(props) => props.gapLaptopL};
  font-Size: ${(props) => props.fontSizeLaptopL};
  height:auto;
};

@media ${device.desktopL}{

  display: flex;
  gap: ${(props) => props.gapDesktopL};
  font-Size: ${(props) => props.fontSizeDesktopL};
  height:auto;
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
  height:150vh;
  width: 125vmin;
  height: ${(props) => props.viewHeightMobileS};
};

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
  padding: 10px;
 
  gap: ${(props) => props.gapMobileM};
  height:170vh;
  width: 125vmin;
  height: ${(props) => props.viewHeightMobileM};
};

@media ${device.mobileL}{
  margin: ${(props) => props.marginMobileL};
  padding: 10px;
 
  gap: ${(props) => props.gapMobileL};
  height:170vh;
  width: 125vmin;
  height: ${(props) => props.viewHeightMobileL};
};

@media ${device.tablet}{
  margin: ${(props) => props.marginTablet};
 
  gap: ${(props) => props.gapTablet};
  height:130vh;
  width: auto;
};

@media ${device.laptop}{
  margin: ${(props) => props.marginLaptop};
 
  gap: ${(props) => props.gapLaptop};
  height:140vh;
 
};

@media ${device.laptopL}{
  margin: ${(props) => props.marginLaptopL};
 
  gap: ${(props) => props.gapLaptopL};
  height:90vh;
};

@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
  
  gap: ${(props) => props.gapDesktopL};
  height:65vh;
  height: ${(props) => props.viewHeightDesktopL};
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

export const ProjectModalContainer = () => {
  return (
    <Section
      flexDirection='column'
      alignItems='center'
      marginDesktopL='0px 200px'
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
      <Section
        flexDirection='column'
        alignItems='center'
        gap='0px'
        viewHeightMobileS='30vh'
        viewHeightMobileM='30vh'
        viewHeightMobileL='30vh'
        viewHeightDesktopL='25vh'
      >
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          marginDesktopL='0px 0px 40px 0px'
          marginLaptopL='0px 0px 20px 0px'
          marginLaptop=' 0px 0px 10px 0px'
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
          Projects
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
        <ProjectModalRender
          img={AntidoteRestaurant}
          tittle={'Restaurant Website'}
          codeButton={<Button variant="light" className='w-25 customColor'  href='https://github.com/HectorAgudelo/AntidoteRestaurant.git' target="_blank" rel="noreferrer noopener">Code</Button>}
          appButton={<Button variant="light" className='mx-2 w-25 customColor'  href='https://antidoteny.com/' target="_blank" rel="noreferrer noopener" >App</Button>}
        />
        <ProjectModalRender
          img={Chat}
          tittle={'Chat App'}
          codeButton={<Button variant="light" className='w-25 customColor'  href='https://github.com/HectorAgudelo/ChatRoom.git' target="_blank" rel="noreferrer noopener"  >Code</Button>}
        />
      </Container>
    </Section>
  );
};
