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
  --col-200: #6A00FF;
  --col-200-light: #6A00FFe1;
  --col-300: #FF2828;
  --col-400: #0099ffff;
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
    font-size: clamp(${pxTorem(28)},${pxTorem(32)},${pxTorem(40)});
    font-weight: var(--extra-bold);
    line-height: 1.2;
    text-transform: capitalize;
}
h2{
    font-size: clamp(${pxTorem(24)},${pxTorem(28)},${pxTorem(32)});
    font-weight: var(--bold);
    line-height: 1.3;
    text-transform: capitalize;
}
h3{
    font-size: clamp(${pxTorem(16)},${pxTorem(18)},${pxTorem(24)});
    font-weight: var(--bold);
    line-height: 1.4;
    text-transform: capitalize;
}
p, li{
    font-size: ${pxTorem(16)};
    font-weight: var(--regular);
    line-height: 1.4;
}
`;

export default GlobalStyle;
