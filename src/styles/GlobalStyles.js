import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './colors';
import { device } from './mediaQueries';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.5rem;
        font-family: monospace;
    }

    h1 {
      font-family: 'Playfair Display', serif;
    }

    h2, h3, h4, h5, h6 {
        font-family: 'David Libre', serif;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style-type: none;
    }

    a {
        color: inherit;
    }

    img {
        max-width: 100%;
    }

    .icons {
        color: ${colors.iconsColor};
    }



    .toast-notification-style {
        margin: 0.4rem 0;
    }

    @media ${device.mobileL} {
        .toast-notification-style {
            width: 28rem;
        }
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
