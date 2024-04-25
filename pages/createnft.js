import { useRef, useEffect, useState } from 'react'
import React from 'react'
import Navbar from "@/components/Navbar";
import {styled,keyframes} from 'styled-components';
import { useStorage, useAddress, useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { myContract } from '@/constants';
import contractabi from '@/contractabi.json';

/*
* This page is for users to create their own custom NFT
* This page is meant to interact with my functioning smart contract

* This is where my project does 2 writes to the blockchain:
    1.) it writes the name of the NFT
    2.) it writes the URI to thirdweb storage for the NFT
*/

// STEPS FOR INTERACTING WITH SMART CONTRACT
//put the inputs into a json
//upload the json to a decentralized storage (thirdweb storage)
//give the uri to the mint function of the contract

const adminPage = () => {

  const [mintedMessage, setMintedMessage] = useState("");
    //const signer = useSigner();
    const Input1Ref = useRef();
    const Input2Ref = useRef();
    const Input3Ref = useRef();

    const signer = useSigner();

    const Enter = async () => {
        const input1 = Input1Ref.current.value;
        const input2 = Input2Ref.current.value;
        const input3 = Input3Ref.current.value;
        const nftjson = {
          address: input1,
          projectUrl: input3,
          projectName: input2,
        }
        
        //executes the safeMint function from my smart contract
        try {
          if (!signer) {
            console.error("Signer not available");
            setMintedMessage("ERROR: Please connect your wallet");
            return;
          }
          const contract = new ethers.Contract(myContract, contractabi, signer);
          const func = await contract.safeMint(input1, input3, input2);
          await func.wait();

          console.log("DONE SUCCESSFULLY");
          setMintedMessage("NFT minted successfully!"); //displays a message when the user successfully mints an NFT
        }catch (error){
          console.error("Error", error);
          setMintedMessage("ERROR: Make sure the fields are filled in with the proper requirements");
        }
    }

    return (
        <Wrapper>
          <Navbar />
          <CenteringContainer>
          <Description> Your guide to a brand new work of art</Description>
            <Container>
            <Title>Create A Custom NFT</Title>

            <InputLabel>Address:</InputLabel>
            <TimeInput ref={Input1Ref} placeholder='Enter wallet address' />

            <InputLabel>NFT Name:</InputLabel>
            <TimeInput ref={Input3Ref} placeholder='Enter NFT name' />

            <InputLabel>Image URL:</InputLabel>
            <TimeInput ref={Input2Ref} placeholder='Enter image url' />

            <Spacer />

            <UpdateButton onClick={Enter}>CREATE</UpdateButton>

            {mintedMessage && <MintedMessage>{mintedMessage}</MintedMessage>}
            </Container>
            </CenteringContainer>
        </Wrapper>
        );
    };

const MintedMessage = styled.p`
  color: green;
  font-size: 16px;
  margin-top: 10px;
  `;

//animation for cool effects
const fade2 = keyframes`
    from{
        opacity: 0;
        transform: translateY(-100%);
    }

    to{
        opacity: 1;
        transform: translateY(0%);
    }
`
// main container
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

//helped with aligning the navbar with the main content
const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85.65vh;
  background: black;
`

//holds the title, input boxes, and button background:
const Container = styled.main`
  width: 400px;
  padding: 20px;
  background: linear-gradient(to bottom, #2C3E50, #000000);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${fade2} 1s ease;
`;

// title styling
const Title = styled.h1`
  font-size: 30px;
  font-family: 'Sans-Serif';
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

// label stylings
const InputLabel = styled.p`
  margin: 10px 0 5px 0;
  font-size: 18px;
  font-family: 'Sans-Serif';
  color: white;
`;

// input boxes
const TimeInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

// styling for the create button
const UpdateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00BFFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.05);
        background: red;
        color: black;
    }
`;

// empty div for spacing
const Spacer = styled.div`
  height: 20px;
`;

//paragraph container to display the hours
const Description = styled.p`
  margin: 15px auto;
  font-size: 25px;
  font-family: Merriweather;
  color: #00BFFF;
  text-align: center;
  padding: 10px;
  animation: ${fade2} 3s ease;
`;

export default adminPage