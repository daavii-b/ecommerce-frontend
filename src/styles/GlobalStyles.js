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

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
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

    .icons {
        color: ${colors.iconsColor};
    }
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;
