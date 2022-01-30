import React from 'react';
import {
    AboutContainer,
    AboutHeading,
    AboutDescription,
    AboutWrapper
} from './About.styled';
const About = () => {
  return (
      <AboutWrapper>
  <AboutContainer>

        <AboutHeading>Hey there👋🏻!</AboutHeading>
        <AboutDescription> 
            ....and this is my <strong><i>Social Circle</i></strong> 🌟. 
            <br/><br/>
            This is a fun little Dapp that I made to learn blockchain development.<br/> 
            You are welcome to connect and drop a message ✉️. 
            
        </AboutDescription>
        <AboutDescription>Made with </AboutDescription>
    </AboutContainer>
</AboutWrapper>
  );
};

export default About;
