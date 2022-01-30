import styled from 'styled-components';


export const AboutWrapper = styled.div`
min-height: 60vh;
background-image: linear-gradient(to bottom right, #4776E6, #8E54E9);
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4rem;
    
   
`;

export const AboutHeading = styled.h1`
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left;
    margin: 0;
    padding: 0;
    @media (max-width: 900px) {
        font-size: 2rem;
    }
`;

export const AboutDescription = styled.p`
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: left;
    margin: 0;
    letter-spacing: 0.5px;
    @media (max-width: 900px) {
        font-size: 1rem;
    }
`;

