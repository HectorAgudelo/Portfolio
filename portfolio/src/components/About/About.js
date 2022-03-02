import React from 'react';
import myself from '../../images/Self.jpg';
import styles from 'styled-components';
import './About.css';
import { device } from '../DeviceScreens/DeviceScreens';

const Image = styles.img`
margin: 0px;
height: 350px;
width: auto;

@media ${device.mobileM}{
  margin: 0px;
  height: 400px;
  width: auto;
};

@media ${device.mobileL}{
  margin: 0px;
  height: 500px;
  width: auto;
};

@media ${device.tablet}{
  margin: 0px;
  height: 350px;
  width: auto;
};

@media ${device.laptop}{
  margin: 0px;
  height: 400px;
  width: auto;
};

@media ${device.laptopL}{
  margin: 0px;
  height: 400px;
  width: auto;
};

@media ${device.desktopL}{
  margin: 0px;
  height: 800px;
  width: auto;
};


`;

const Section = styles.section`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;
margin: ${(props) => props.margin};
gap: 10px;

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
  flex-direction: ${(props) => props.flexDirectionMobileM};
  align-items: ${(props) => props.alignItemsMobileM};
};

@media ${device.mobileL}{
  margin: ${(props) => props.marginMobileL};
  flex-direction: ${(props) => props.flexDirectionMobileL};
  align-items: ${(props) => props.alignItemsMobileL};
};

@media ${device.tablet}{
  margin: ${(props) => props.marginTablet};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
};

@media ${device.laptop}{
  margin: ${(props) => props.marginLaptop};
  
};

@media ${device.laptopL}{
  margin: ${(props) => props.marginLaptopL};
 
};

@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
 
};


`;

const Title = styles.h1`
font-size: ${(props) => props.fontSize};
color: #393E41 !important;
text-align: ${(props) => props.titleAlign};
text-shadow: ${(props) => props.textShadow};

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
}

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
  margin: ${(props) => props.marginDesktopL} ;
};


`;

const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;

@media ${device.mobileM}{
  font-Size: ${(props) => props.fontSizeMobileM}
  padding: ${(props) => props.paddingMobileM}
};

@media ${device.mobileL}{
  font-Size: ${(props) => props.fontSizeMobileL}
  padding: ${(props) => props.paddingMobileL}
};

@media ${device.tablet}{
  font-Size: ${(props) => props.fontSizeTablet}
};

@media ${device.laptop}{
  font-Size: ${(props) => props.fontSizeLaptop}
};

@media ${device.laptopL}{
  font-Size: ${(props) => props.fontSizeLaptopL}
};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL}
};


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


@media ${device.mobileM}{
  gap: 5px;
  margin: 0px 0px;
  height: 130vh;
  width: 125vmin;
};


@media ${device.mobileL}{
  gap: 5px;
  margin: 0px 0px;
  height: 130vh;
  width: 125vmin;
};

@media ${device.tablet}{
  gap: 5px;
  margin: 0px 20px;
  height: 100vh;
  width: auto;
};

@media ${device.laptop}{
  gap: 10px;
  margin: 0px 30px;
};

@media ${device.laptopL}{
  gap: 10px;
};

@media ${device.desktopL}{
gap: 30px;
};


`;

export const About = () => {
  return (
    <Container>
      <Section flexDirection='column' alignItems='center'>
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          marginDesktopL='0px 0px 40px 0px'
          marginLaptopL='0px 0px 20px 0px'
          marginLaptop='0px 0px 10px 0px'
          marginTablet='0px 0px 5px 0px'
          marginMobileL='0px 0px 5px 0px'
          marginMobileM='0px 0px 5px 0px'
          fontSizeDesktopL='80px'
          fontSizeLaptopL='45px'
          fontSizeLaptop='40px'
          fontSizeTablet='35px'
          fontSizeMobileL='35px'
          fontSizeMobileM='30px'
        >
          About
        </Title>
        <Text
          margin='0px 0px 20px 0px'
          textAlign='center'
          fontSizeDesktopL='35px'
          fontSizeLaptopL='20px'
          fontSizeLaptop='15px'
          fontSizeTablet='15px'
          fontSizeMobileL='15px'
          paddingMobileL='10px'
          paddingMobileM='10px'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Section>
      <Section
        flexDirection='row'
        flexDirectionMobileL='column'
        flexDirectionMobileM='column'
        alignItems='flex-start'
        alignItemsMobileL='center'
        alignItemsMobileM='center'
        margin='0px'
        marginDesktopL='0px 400px'
        marginLaptopL='0px 200px'
        marginLaptop='0px 100px'
        marginTablet='0px 50px'
        marginMobileL='0px 50px'
        marginMobileM='0px 50px'
      >
        <Image src={myself} />
        <Section
          flexDirection='column'
          marginDesktopL='0px 40px'
          marginLaptopL='0px 20px'
          marginLaptop='0px 10px'
          marginTablet='0px 5px'
          marginMobileL='0px 5px'
          marginMobileM='0px 5px'
          alignItems='flex-start'
        >
          <Title
            titleAlign='left'
            fontSize='25px'
            fontSizeDesktopL='50px'
            fontSizeLaptopL='30px'
            fontSizeLaptop='20px'
            fontSizeTablet='20px'
            fontSizeMobileL='20px'
            fontSizeMobileM='20px'
            textShadow='none'
            margin='0px 0px 10px 0px'
          >
            Frontend Developer
          </Title>
          <Text
            textAlign='left'
            margin='0px 0px'
            fontSizeDesktopL='35px'
            fontSizeLaptopL='20px'
            fontSizeLaptop='15px'
            fontSizeTablet='15px'
            fontSizeMobileL='15px'
            fontSizeMobileM='15px'
          >
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
