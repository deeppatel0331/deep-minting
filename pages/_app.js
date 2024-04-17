import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import {
  ThirdwebProvider,
} from "thirdweb/react";


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
      <ThirdwebProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}