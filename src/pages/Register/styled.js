import styled from 'styled-components';

import { device } from '../../styles/mediaQueries';
import * as colors from '../../styles/colors';

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);
  justify-content: center;

  width: 60%;
  height: 80vh;

  margin: 0 auto;
  background-color: rgba(20, 20, 20, 0.9);
  padding: 2rem;
  color: white;

  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  .form-header {
    width: 100%;
    height: 100%;
    grid-column: 1/3;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;

    border-bottom: 1px solid ${colors.headerColor};

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      text-align: center;
      padding: 0.8rem;
      font-weight: 100;
      font-style: normal;
      text-transform: uppercase;
      border-radius: 0.3rem;

      .cart-icon {
        margin-left: 1rem;
        text-align: center;
        color: rgba(128, 110, 228, 0.8);
      }
    }
  }

  .field-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .field-label {
      display: flex;
      flex-direction: row wrap;
      align-items: center;

      font-size: 1rem;
      text-transform: uppercase;

      margin: 2rem;

      span.label-container {
        width: 0;
        display: inline-block;
        opacity: 0;
        visibility: hidden;
        transition: 0.6s ease-in-out;
      }

      input {
        background-color: rgba(255, 255, 255, 0.4);
        margin-left: 0.6rem;
        border: 1px solid ${colors.headerColor};
        border-radius: 0.4rem;
        padding: 0.4rem;
        transition: 0.6s ease-in-out;

        &::placeholder {
          padding: 0.2rem;
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.7);
        }

        &:focus {
          transition: 0.6s ease-out;
          background-color: rgba(255, 255, 255, 0.9);

          &::placeholder {
            color: rgba(0, 0, 0, 1);
          }
        }
      }
    }

    .field-label.focus {
      span.label-container {
        width: 100%;
        opacity: 1;
        visibility: visible;
        transition: 0.6s ease-in;
      }
    }
  }

  button[type='submit'] {
    color: white;
    grid-column: 1 / 3;
    width: 70%;
    height: 3rem;
    padding: 0.5rem;
    margin-top: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.6rem;

    justify-self: center;

    background-color: transparent;

    transition: all 0.5s ease-in;

    box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid ${colors.headerColor};
      box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.1);

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
    margin: auto;

    flex-direction: column;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: 30% center;

    button[type='submit'] {
      width: 70%;
      margin: 2rem auto;
    }
  }

  @media ${device.mobileL} {
    background-position: 50% center;
  }

  @media ${device.media500} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
