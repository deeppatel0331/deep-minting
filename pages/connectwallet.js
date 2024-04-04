import React, { useRef } from 'react'
import {styled,keyframes} from 'styled-components';
import Navbar from "@/components/Navbar";

/*
* This page allows users to connect their wallet and interact with the blockchain
*/

const Login = () => {

// layout of the connect wallet functionality
return (
    <Wrapper>
        <Navbar />
        <CenteringContainer>
      <Container>
        <Title>Connect Wallet</Title>
        <Button>CONNECT</Button>
      </Container>
      </CenteringContainer>
    </Wrapper>
  );
};

//animation for cool effects
const fade = keyframes`
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

//helps with centering the navbar and main content
const CenteringContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85.67vh;
    background-color: black;
`

// the box that holds the input box, title, and description
const Container = styled.div`
  width: 400px;
  padding: 20px;
  background: linear-gradient(to bottom, #2C3E50, #000000);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${fade} 1.5s ease;
`;

// for the title
const Title = styled.h1`
  font-size: 30px;
  font-family: 'Sans-Serif';
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

// connect button
const Button = styled.button`
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

export default Login