"use client";
import pxTorem from "@/utils/pxToRem";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    // Fonts
  --font-poppins: 'poppins', sans-serif;
  --font-italianno: 'italianno', monospace;
  --extra-bold: 700;
  --bold: 600;
  --semi-bold: 500;
  --regular: 400;


  // Colors
  --col-000: #000000;
  --col-100: #ffffff;
  --col-200: #1D0E0E;
  --col-300: #FF2828;
  --col-400: #FF8001;
  --body-bg: #FFF0F0;

    // Others
  --border-radius: ${pxTorem(12)};
  --shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  --max-width: ${pxTorem(1200)};
  --centered: 0 auto;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;}

body {
    font-family: var(--font-poppins);
    background-color: var(--body-bg);
    color: var(--col-000);
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${pxTorem(16)};
}
a {
    text-decoration: none;
    color: unset;
    cursor: pointer;
}
ul, ol {
    list-style: none;
}
button{
    cursor: pointer;
    background: none;
    border: none;
}
button:disable, input:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
h1{
    font-size: ${pxTorem(40)};
    font-weight: var(--extra-bold);
    line-height: 1.2;
    text-transform: capitalize;
}
h2{
    font-size: ${pxTorem(28)};
    font-weight: var(--bold);
    line-height: 1.3;
    text-transform: capitalize;
}
h3{
    font-size: ${pxTorem(18)};
    font-weight: var(--bold);
    line-height: 1.4;
    text-transform: capitalize;
}
p, li{
    font-size: ${pxTorem(16)};
    font-weight: var(--regular);
    line-height: 1.6;
    opacity: 0.8;
}
`;

export default GlobalStyle;
