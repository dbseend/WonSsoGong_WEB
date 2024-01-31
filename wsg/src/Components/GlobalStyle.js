import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-top : 120px;
    padding: 0;
    background: #5379c2;
    /* z-index: auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export default GlobalStyle;
