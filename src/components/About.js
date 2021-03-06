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

        <AboutHeading>Hey there๐๐ป!</AboutHeading>
        <AboutDescription> 
            ....and this is my <strong><i>Social Circle</i></strong> ๐. 
            <br/><br/>
            This is a fun little Dapp that I made to learn blockchain development.<br/> 
            You are welcome to connect and drop a message โ๏ธ. 
            
        </AboutDescription>
        <AboutDescription>Made with </AboutDescription>
    </AboutContainer>
</AboutWrapper>
  );
};

export default About;
