import styled from 'styled-components';
import backImage from './assets/images/background.jpeg';

import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(28rem, 1fr));
  align-items: center;
  justify-items: center;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent),
    url(${backImage});
  background-position: center;
  background-attachment: fixed;
  background-size: contain;

  width: 60vw;
  height: 75vh;
  padding: 2rem;

  margin: 0 auto;

  border-radius: 0.5rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);

  div.field-group {
    padding: 0.6rem;

    .field-label {
      text-transform: uppercase;
      font-size: 1.1rem;
      color: white;

      input {
        border-radius: 0.3rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-left: 0.5rem;
        padding: 0.25rem 0.5rem;

        &::placeholder {
          font-size: 1.2rem;
          font-weight: 200;
          color: ${colors.headerColor};
        }
      }
    }
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    align-items: center;

    div.field-group {
      .field-label {
        display: flex;
        flex-direction: column;
        justify-content: center;

        input {
          margin: 0.5rem;
          margin-left: 0;
        }
      }
    }
  }

  button[type='submit'] {
    grid-column: 1 / 3;
    width: 60%;
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.6rem;

    color: white;
    background-color: transparent;

    transition: all 0.5s ease-in;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.4);
      transition: all 0.5s ease-in-out;
    }

    @media ${device.tabletL} {
      & {
        grid-column: 1 / 3;
      }
    }
  }

  @media ${device.tablet} {
    width: 90vw;
    height: 95vh;
    margin: auto;

    flex-direction: column;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: 30% center;

    button[type='submit'] {
      width: 80%;
      margin: 2rem auto;
    }
  }

  @media ${device.mobileM} {
    height: 100vh;
  }

  @media ${device.media500} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
