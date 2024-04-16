import { createGlobalStyle } from "styled-components";
import {
  ThirdwebProvider,
} from "thirdweb/react";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>

      <ThirdwebProvider>
      <GlobalStyle />
      <Component {...pageProps} />

      </ThirdwebProvider>
    </>
  );
}