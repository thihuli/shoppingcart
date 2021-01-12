import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  html,
  body, 
  #root {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;

    background-color: #d1d8e5;
    font-family: 'Poppins', sans-serif;
  }

  input, button{
    outline: none;
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    scroll-behavior: smooth;
    text-decoration: none;

    font-family: 'Poppins', sans-serif;
  }

`