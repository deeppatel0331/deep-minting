import Navbar from '@/components/Navbar'
import {styled,keyframes} from 'styled-components';

/*
* This page displays the background information about the website and goals.
*/

const hours = () => {

  return (
    <div>
        <Navbar />
        <ParentContainer>

            <ContentContainer>
            
                <HeadContainer>
                    About The Website
                </HeadContainer>
        
                <Description>
                    Welcome to the world of Non-Fungible Tokens, or NFTs, where each token is as unique as you are. With NFTs, you can own one-of-a-kind digital collectibles, prove your ownership, and experience the innovation of tokenization firsthand.
                </Description>

                <Description>
                    At Deep-Minting, we invite you to explore this exciting realm and unleash your creativity with our "Create NFT" feature. 
                </Description>

                <Description>
                    So, why wait? Connect your wallet and immerse yourself in a world filled with breathtaking art!
                </Description>

            </ContentContainer>

        </ParentContainer>
    </div>
  )

}

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

//animation for cool effects
const fade2 = keyframes`
    from{
        opacity: 0;
        transform: translateY(100%);
    }

    to{
        opacity: 1;
        transform: translateY(0%);
    }
`

//Entire sub-space
const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85.65vh;
    background-color: black;
`

//The conents that will be stored including header and paragraph
const ContentContainer = styled.div`
    padding: 20px;
    align-items: center;
    animation: ${fade} 1.5s ease;
`

//Container for the Header
const HeadContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 50px;
    font-family: Sans Seriff;
    text-decoration: underline;
    color: #00BFFF;
    animation: ${fade} 1s ease;
`

//paragraph container to dislay the website information
const Description = styled.p`
    margin: 15px auto;
    font-size: 25px;
    font-family: Merriweather;
    color: white;
    text-align: center;
    padding: 10px;
    animation: ${fade2} 1s ease;
`;

export default hours