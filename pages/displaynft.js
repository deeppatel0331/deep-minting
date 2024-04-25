import { useEffect, useState } from 'react';
import { useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { myContract } from '@/constants';
import contractabi from '@/contractabi.json';
import { styled, keyframes } from 'styled-components';
import Navbar from "@/components/Navbar";

const TokensPage = () => {
    const [ownedTokens, setOwnedTokens] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const signer = useSigner();

    useEffect(() => {
        if (signer) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    }, [signer]);

    useEffect(() => {
        const fetchOwnedTokenNames = async () => {
            try {
                if (!signer) {
                    console.error("Signer not available");
                    return;
                }
                const contract = new ethers.Contract(myContract, contractabi, signer);
                const address = await signer.getAddress();
                const tokenIds = await contract.getOwnedTokens(address);
                const tokenNames = await Promise.all(tokenIds.map(async (tokenId) => {
                    return await contract.tokenName(tokenId);
                }));
                setOwnedTokens(tokenNames);
            } catch (error) {
                console.error("Error fetching owned tokens:", error);
            }
        };
        fetchOwnedTokenNames();
    }, [signer]);

    return (
        <Wrapper>
            <Navbar />
            <CenteringContainer>
                <Title>Owned Tokens</Title>
                {isSignedIn ? (
                    <TokenList>
                        {ownedTokens.map((tokenName, index) => (
                            <TokenItem key={index}>{tokenName}</TokenItem>
                        ))}
                    </TokenList>
                ) : (
                    <InfoMessage>Please connect your wallet to see your collection</InfoMessage>
                )}
                {isSignedIn && (
                    <InfoMessage>
                        Visit the following website to see all proper information about your collection and paste your wallet address into the search bar:
                        <a href="https://testnet.bscscan.com/" target="_blank" rel="noopener noreferrer">https://testnet.bscscan.com/</a>
                    </InfoMessage>
                )}
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

// Styling components...
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

//allows the contents to be centered for visual appeal
const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  background: black;
  height: 85.56vh;
`;

//the title of the page
const Title = styled.h1`
  font-size: 30px;
  font-family: 'Sans-Serif';
  font-weight: bold;
  color: red;
  text-align: center;
  margin-bottom: 20px;
  animation: ${fade2} 1s ease;
`;

//displays my message that informs the user to visit a website to see all information
const InfoMessage = styled.p`
  font-size: 20px;
  font-family: 'Sans-Serif';
  color: #00BFFF;
  text-align: center;
  margin-top: 20px;
  animation: ${fade2} 1s ease;

  a {
    color: #00BFFF;
    text-decoration: underline;
  }
`;

const TokenList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  animation: ${fade2} 1s ease;
`;

const TokenItem = styled.li`
  font-size: 18px;
  font-family: 'Sans-Serif';
  color: white;
  text-align: center;
`;

export default TokensPage;