import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
    overflow-x: hidden;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head><link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' /></Head>
    <GlobalStyle />
      <ThirdwebProvider clientId="7147dfaf6751959fc9941897d57bf10a">
      <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}