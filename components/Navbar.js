import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router";

/*
* This is the code for the Navigation Bar that is found on all of the pages of the website.
* It is used to display the name of the website and provide buttons to navigate to different parts of the website.
*/

export const Navbar = () => {

    //gives the buttons the functionality to go to the corresponding page when clicked
    const router = useRouter();

    function goToHome(){
        router.push("/");
    }

    function goToInformationPage(){
        router.push("/information")
    }

    function goToCreateNFTPage(){
        router.push("/createnft")
    }

    function goToConnectPage(){
        router.push("/connectwallet")
    }


    //layout of the navigation bar
    return (
    <Container>

        <LogoBox>
            Deep-Minting
        </LogoBox>
        
        <NavigationButtonHolder>

            <NavigationElement onClick={goToHome}>
                Home
            </NavigationElement>
            
            <NavigationElement onClick={goToInformationPage}>
                Information
            </NavigationElement>

            <NavigationElement onClick={goToCreateNFTPage}>
                Create NFT
            </NavigationElement>

            <NavigationElement onClick={goToConnectPage}>
                Connect Wallet
            </NavigationElement>

        </NavigationButtonHolder>

    </Container>
    )
}

//holds the navigation bar background-image:
const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-director: row;
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 6vw;
    padding-top: 2vw;
    background: black;
`
//essentially the title of the logo box/website
const LogoBox = styled.div`
    font-size: 5.5vw;
    font-weight: bold;
    font-family: sans seriff;
    background: #00BFFF;
    -webkit-background-clip: text;
    color: transparent;
`

//the background of the buttons
const NavigationButtonHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    gap: 1vw
`

//the buttons themselves
const NavigationElement = styled.button`
    padding: 0.80vw;
    background: #00BFFF;
    color: black;
    font-family: 'Roboto', sans-serif;
    border-radius: 0.5vw;
    border: none;
    cursor: pointer;

    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.15);
        background: red;
        color: black;
    }
`

export default Navbar;