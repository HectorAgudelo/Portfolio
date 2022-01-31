import React from 'react';
import styles from 'styled-components';
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
margin: 0px 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
gap: 10px;
height:0vh;
width: auto;
`;

const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;
`;

const Section = styles.section`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;
margin: ${(props) => props.margin};
gap: ${(props) => props.gap};
flex-wrap: ${(props) => props.wrap}
`;

const Title = styles.h1`
font-size: ${(props) => props.fontSize};
margin: ${(props) => props.margin} ;
color: #393E41 !important;
text-align: ${(props) => props.titleAlign};
text-shadow: ${(props) => props.textShadow};
`;

export const Skills = () => {
  return (
    <Container>
      <Section flexDirection='column' alignItems='center' gap='0px'>
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          margin='60px 0px 40px 0px'
        >
          Skills
        </Title>
        <Text margin='0px 0px 20px 0px' textAlign='center' fontSize='40px'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <a href='https://docs.google.com/document/d/1-WiqkWGrUnhsf7YyjKerPKAkakKRrd5j/edit?usp=sharing&ouid=109866500808769579371&rtpof=true&sd=true'>
          View My Resume
        </a>
      </Section>
      <Section
        flexDirection='row'
        alignItems='center'
        gap='30px'
        wrap='wrap'
        margin='30px 200px'
      >
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiHtml5 className='icon' size={'3em'} /> <Text>HTML</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiCss3 className='icon' size={'3em'} /> <Text>CSS</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiJavascript className='icon' size={'3em'} /> <Text>JavaScript</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiReact className='icon' size={'3em'} /> <Text>React</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiBootstrap className='icon' size={'3em'} /> <Text>Bootstrap</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiStyledcomponents className='icon' size={'3em'} />{' '}
          <Text>Style Components</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiNodedotjs className='icon' size={'3em'} /> <Text>NodeJS</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiMongodb className='icon' size={'3em'} /> <Text>MongoDB</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiNextdotjs className='icon' size={'3em'} /> <Text>NextJS</Text>
        </Section>
        <Section flexDirection='column' alignItems='center' gap='0px'>
          <SiStorybook className='icon' size={'3em'} /> <Text>Storybook</Text>
        </Section>
      </Section>
    </Container>
  );
};
