import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';

import { device } from './mediaQueries';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      text-decoration: 0;
      outline: 0;
      box-sizing: border-box;
    }

    :root, html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
      font-family: 'Inter', sans-serif;
      background-color:${({ theme }) => theme.colors.textPrimary}
    }

    ${
      '' /* h1 {
      font-family: 'Playfair Display', serif;
    } */
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
    }

    button {
      cursor: pointer;
      outline: none;
      border: none;
      background-color: transparent;
    }

    a {
      color: inherit;
    }

    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      max-width: 100%;
    }

    li {
      list-style-type: none;
    }

    .icons {
      color: ${({ theme }) => theme.colors.textSecondary};
    }



    .toast-notification-style {
      margin: 0.4rem 0;
    }

    @media ${device.mobileL} {
      .toast-notification-style {
          width: 28rem;
      }
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }

    * {
      scrollbar-width: thin;
      scrollbar-color: blue orange;
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: .7rem;
      height: .7rem;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-top-left-radius: none;
      border-top-right-radius: none;
    }


    ${
      '' /* body .Toastify .Toastify__toast-container .Toastify__toast--success {
        width: 100%;
        background: rgba(255, 255, 255, 0.7);
        color: green;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        width: 70%;
        right: 0;
        background: rgba(255, 255, 255, 0.7);
        color: red;

    } */
    }
`;

export const defaultContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;
