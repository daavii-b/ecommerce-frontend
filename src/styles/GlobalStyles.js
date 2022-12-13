import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

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

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: rgba(255, 255, 255, 0.3);
        color: green;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: rgba(255, 255, 255, 0.7);
        color: red;

    }
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;
