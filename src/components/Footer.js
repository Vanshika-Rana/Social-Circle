import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return(
      <FooterContainer>
          <FooterText>built by ❤️ <a href="https://twitter.com/aahiknsv">@aahiknsv</a></FooterText>
      </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 7vh;
    width: 100%;
    background-image: linear-gradient(to bottom right, #4776E6, #8E54E9);
    @media (max-width: 900px) {
        min-height: 5vh;
    }
`;
const FooterText = styled.p`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    letter-spacing: 0.5px;
    @media (max-width: 900px) {
        font-size: 0.8rem;
    }
    a {
        color: #ffffff;
        text-decoration: none;
    }
`;
