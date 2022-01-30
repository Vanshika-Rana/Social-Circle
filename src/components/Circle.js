import React, {useState,useEffect} from 'react';
import { ethers } from "ethers";
import { SOCIAL_CIRCLE_ADDRESS,abi } from '../constants/index';
import {
    CircleContainer,
    JoinButton,
    WalletButton,
    MessageWrapper,
    MessageContainer,
    MessageDescription,
    MessageSender,
    MessageTime,
    MessageTitle,
    MessageInput,
    WalletButtonConnected
 
} from './Circle.styled';

const Circle = () => {
    
    const[currentAccount, setCurrentAccount] = useState("");
    const [message, setMessage] = useState("");
    const[allMembers, setAllMembers] = useState([]);


    const getAllMembers = async () => {
        try{
            const {ethereum} = window;
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const socialCircleContract = new ethers.Contract(SOCIAL_CIRCLE_ADDRESS, abi, signer);   
            
            const members = await socialCircleContract.getAllMembers();

            let membersArray = [];
            members.forEach(members => {
                membersArray.push({
                    address: members.memberaddress,
                    timestamp: new Date(members.timestamp * 1000),
                    message: members.message
                });
            });

            setAllMembers(membersArray);
            } else{
                console.log("Ethereum object doesn't exist!");
            }
            
        }catch(err){
            console.log(err);
        }
    }
    const checkWalletConnected = async () => {
        try{
            const {ethereum} = window;
            if (ethereum) {
                console.log('ethereum is connected : ', ethereum.isConnected());
                
            } else {
                console.log('ethereum is not connected; get metamask');
            }
        
            const accountList = await ethereum.request({method: 'eth_accounts'});
            if(accountList.length!==0){
                const account = accountList[0];
                setCurrentAccount(account);
                getAllMembers();
                
            }else{
                console.log('no account found');
            }
        }catch(err){
            console.log(err);
        }
    }
     useEffect(() => {
        let socialCircleContract;
        const oneNewMember = (from, timestamp, message) => {
            console.log(from, timestamp, message);
            setAllMembers(prevState => [...prevState, {
                address: from,
                timestamp: new Date(timestamp * 1000),
                message: message
            },
        ]);
    };

    if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        socialCircleContract = new ethers.Contract(SOCIAL_CIRCLE_ADDRESS, abi, signer);
        socialCircleContract.on('NewMember', oneNewMember);

    }

    return () => {
        if(socialCircleContract){
            socialCircleContract.off('NewMember', oneNewMember);
        }
    };
    }, []);
    const connectWallet = async () => {
        try{
            const {ethereum} = window;
            if(!ethereum){
                alert('Please! Connect Metamask');
                return;
            }
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }catch(err){
            console.log(err);
        }
    }

    const joining = async () => {
        try{
            const {ethereum} = window;
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const socialCircleContract = new ethers.Contract(SOCIAL_CIRCLE_ADDRESS, abi, signer);
                
                let memberCount = await socialCircleContract.getTotalMembers();
                memberCount = memberCount.toNumber();
                console.log("Total members: ", memberCount);

                const memberTxn = await socialCircleContract.addMember(message,{gasLimit: 300000});

                await memberTxn.wait();
                console.log("Member added");

                console.log("Total members: ", await socialCircleContract.getTotalMembers());
            } else{
                console.log("Ethereum object does not exist");
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        checkWalletConnected();
    },[]);
    
  return (
    <CircleContainer>
        <MessageInput
        type="text" 
        value={message}
        placeholder="Write a message and join the circle !!"
        onChange={(e) => setMessage(e.target.value)}
       />
    <JoinButton onClick={joining}>Join the Circle ⭕</JoinButton>
    {!currentAccount && <WalletButton onClick={connectWallet}>Connect Wallet</WalletButton>}
   {currentAccount && <WalletButtonConnected>Wallet Connected</WalletButtonConnected>} 
    <MessageTitle> All Your Messages Here! </MessageTitle>
    <MessageWrapper>
    {allMembers.map((member,index) => {
            return(
            <MessageContainer key={index} >
                <MessageDescription>{member.message}</MessageDescription>
                <MessageSender>{member.address}</MessageSender>
                <MessageTime>{member.timestamp.toString()}</MessageTime>
            </MessageContainer>)
        
        })} 
    </MessageWrapper>
     
    </CircleContainer>
    );
};

export default Circle;
