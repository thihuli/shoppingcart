import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;

    background-color: #d1d8e5;
  }

  input, button{
    outline: none;
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: 'Poppins', sans-serif;
  }

`