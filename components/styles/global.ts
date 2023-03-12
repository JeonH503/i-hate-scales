import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin:0;
    height:100vh;
    background:#F6F6F6;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  a {
      margin:10px 20px;
      text-decoration: none;
  }
`;

export default GlobalStyle;