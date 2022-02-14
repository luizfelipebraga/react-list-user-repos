import styled, { createGlobalStyle } from "styled-components";
import SimpleBar from 'simplebar-react';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html.sr .load-hidden {
      visibility: hidden;
  }
  [data-simplebar]:not(.simplebar-dragging) .simplebar-content-wrapper {
    scroll-behavior: smooth;
  }
  :root {
      
  }
  
  html, body, #root {
    height: 100%;
    width : 100%;
    scroll-behavior: smooth;
    background-image: linear-gradient(91.18deg, rgb(13, 13, 14) 32.63%, rgb(20, 20, 22) 62.22%);
  }

  h1, h2, h3, h4, h5, span, button, p  {
    font-family: 'Inter', sans-serif;
    color: #949494;
  }

  b, strong {
      color: #ffb464;
  }

  textarea {
    resize: none; 
  }

  textarea, select, input, input:focus, textarea:focus, select:focus{
    border: 0;
    outline: none;
  }

  a {
    list-style: none;
    text-decoration: none;
    cursor: pointer;
  }

  button, input {
    text-decoration: none;
  }

  
`;

export const ScrollStyled = styled(SimpleBar)`
  max-height: 99.9999999vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;
