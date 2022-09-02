import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
        /* main colors */

        --color-primary:#EB8C5B;
        --color-secundary:#5A8BB7;
        --color-secundary-50:#84A4C1;

        --links:#0086FF;

        /* validation */

        --success: #1AAD0D;
        --error: #E60000;

        /* colors grey */

        --grey-0: #606060;
        --grey-1: #C7C7C7;
        --grey-2: #F2F2F2;

    }
    body{
      background-color: var(--color-gray-4);
      color: white;
    }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  ul,ol,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: #d7d4d8 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-gray-3);
    border-radius:0 4px 4px 0;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-2);
    border-radius: 10px;
    border: 3px solid var(--color-gray-3);
  }

  button{
    color:white;
  }
`;
export default GlobalStyle;
