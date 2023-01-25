import styled from 'styled-components';
import * as defaultStyles from '../../styles/defaultStyles';
import { device } from '../../styles/mediaQueries';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  background-color: rgba(20, 20, 20, 0.9);

  width: 45vw;
  height: 65vh;

  margin: 0 auto;
  padding: ${defaultStyles.padding};

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0 7px 10px 2px rgba(0, 0, 0, 0.3);

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

  hr {
    width: 75%;
    outline: none;
    border: 1px solid rgba(128, 110, 228, 0.6);
    border-radius: 0.5rem;
    margin: 0.6rem auto;
  }

  .create-account {
    margin-top: 1rem;
    padding: 0.5rem;

    a {
      text-decoration: underline;
      font-size: 1.3rem;

      &:hover {
        color: rgb(107, 208, 255);
      }
    }
  }

  @media ${device.laptop} {
    height: 75vh;
  }

  @media ${device.mobileL} {
    width: 90vw;
    height: 75vh;

    hr {
      width: 85%;
    }
  }

  @media ${device.mobileM} {
    height: 70vh;

    hr {
      width: 98%;
    }
  }

  @media ${device.mobileMS} {
    height: 65vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 65%;
  padding: 0.6rem;

  .field-label {
    margin-top: 0.8rem;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.3rem;
    align-items: flex-start;

    font-size: 1.4rem;

    color: white;

    input {
      background-color: rgba(255, 255, 255, 0.6);
      transition: all 0.2s ease-in;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.4rem;
      padding: 0.3rem;
      padding-left: 0.6rem;

      font-size: 1.2rem;

      &:focus {
        transition: all 0.3s ease-in-out;
        border: 1px solid rgba(128, 110, 228, 0.8);
        background-color: rgba(255, 255, 255, 1);
      }

      &::placeholder {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }

  button[type='submit'] {
    background-color: rgba(128, 110, 228, 0.4);
    color: rgba(255, 255, 255, 0.4);

    width: 80%;
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    margin: 0 auto;

    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: rgba(128, 110, 228, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: rgba(255, 255, 255, 0.9);
      transition: all 0.4s ease-in;
    }
  }

  @media ${device.mobileL} {
    margin: 2rem auto;
  }
  @media ${device.tablet} {
    align-items: center;
  }
`;
