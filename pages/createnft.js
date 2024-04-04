import { useRef, useEffect } from 'react'
import React from 'react'
import Navbar from "@/components/Navbar";
import {styled,keyframes} from 'styled-components';

/*
* This page is for users to create their own custome NFT
*/

const adminPage = () => {

    const Input1Ref = useRef();
    const Input2Ref = useRef();
    const Input3Ref = useRef();

    const Enter = () => {
        const input1 = Input1Ref.current.value;
        const input2 = Input2Ref.current.value;
        const input3 = Input3Ref.current.value;
        console.log(input1);
        console.log(input2);
        console.log(input3);
    }

    return (
        <Wrapper>
          <Navbar />
          <CenteringContainer>
          <Description>Enter 3 words that you want to be represented as an NFT</Description>
            <Container>
            <Title>Create A Custom NFT</Title>

            <InputLabel>Word 1:</InputLabel>
            <TimeInput ref={Input1Ref} placeholder='Enter keyword' />

            <InputLabel>Word 2:</InputLabel>
            <TimeInput ref={Input2Ref} placeholder='Enter keyword' />

            <InputLabel>Word 3:</InputLabel>
            <TimeInput ref={Input3Ref} placeholder='Enter keyword' />

            <Spacer />

            <UpdateButton onClick={Enter}>CREATE</UpdateButton>
            </Container>
            </CenteringContainer>
        </Wrapper>
        );
    };


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