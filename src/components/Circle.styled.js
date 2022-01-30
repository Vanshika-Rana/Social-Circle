import styled from 'styled-components';

export const CircleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #ffffff;
    width: 100%;
    box-size: border-box;
    
`

export const JoinButton = styled.button`
    background-color: #ffffff;
    border: 1px solid #141f27;
    border-radius: 5px;
    color: #141f27;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    width: 30%;
    margin-top: 2rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: scale(0.9);
    }
    @media (max-width: 900px) {
        width: 60%;
    }
`;
export const WalletButton = styled(JoinButton)`
    background-image: linear-gradient(to bottom right, #4776E6, #8E54E9);
    color: #ffffff;
    border: none;
    margin-top: 1rem;
`;
export const WalletButtonConnected = styled(WalletButton)`
    cursor: default;
`;
export const MessageTitle = styled.h1`
background: linear-gradient(#4776E6, #8E54E9);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 2rem;
font-weight: bold;
text-align: center;
margin-top: 5rem;
padding: 0;
@media (max-width: 900px) {
    font-size: 1.7rem;
    
}

`;
export const MessageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    width: 80%;
    height: 100%;

`;
export const MessageContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 1rem 1rem;
        padding: 1rem;
        border-radius: 5px;
        
`;
export const MessageDescription = styled.p`
    background-color: OldLace;
    color: #141f27;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: left;
    margin: 0;
    width: 100%;
    padding: 1rem 3rem;
    border-radius: 8px;
    letter-spacing: 0.5px;
    @media (max-width: 900px) {
        font-size: 1rem;
    }
`;
export const MessageSender = styled.p`
    color: #141f27;
    font-size:0.7rem;
    font-weight: bold;
    text-align: left;
    margin: 0;
    padding: 0.5rem 1rem;
    letter-spacing: 0.5px;
    @media (max-width: 900px) {
        padding: 1rem 2rem;
    }
`;
export const MessageTime = styled.p`
    color: #141f27;
    font-size: 0.7rem;
    font-weight: 400;
    text-align: left;
    margin: 0;
    padding: 0.5rem 2rem;
    letter-spacing: 0.5px;
`;

export const MessageInput = styled.input`
    background-color: #ffffff;
    border: 1px solid #141f27;
    border-radius: 5px;
    color: #141f27;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 10px;
    width: 50%;
    margin-top: 4rem;
    @media (max-width: 900px) {
        width: 80%;
    }
`;

