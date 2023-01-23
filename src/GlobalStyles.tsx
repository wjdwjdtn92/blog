import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-size: 16px;
    font-family: 'Karla', sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {

  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

`;

export default GlobalStyles;
