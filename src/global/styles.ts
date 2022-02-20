import styled, { createGlobalStyle } from "styled-components";
import SimpleBar from "simplebar-react";

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

    -ms-overflow-style: none;
    scrollbar-width: 1rem;

    &::-webkit-scrollbar {
      /* display: none; */
    }
  }

  body {
    &::-webkit-scrollbar {
        width: .5rem;
      }

    &::-webkit-scrollbar-track {
      background: #0d0d0e;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      width: 1rem;
      border-radius: 1rem;
      border: 1px solid #000;
    }
  }

  h1, h2, h3, h4, h5, span, button, p  {
    font-family: 'Inter', sans-serif;
    color: #949494;
  }

  b, strong {
      color: #fff;
  }

  textarea {
    resize: none; 
  }

  textarea, select, input, input:focus, textarea:focus, select:focus{
    border: 0;
    outline: none;
  }

  input {
    width: 100%;
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
