import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding: 0;
    width: 1512px;
    height: 1964px;
    background: #5379c2;
    /* z-index: auto; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
`;

export default GlobalStyle;
