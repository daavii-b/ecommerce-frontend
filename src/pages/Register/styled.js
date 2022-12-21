import styled from 'styled-components';

import { device } from '../../styles/mediaQueries';

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(28rem, 1fr));
  grid-gap: 0.2rem;
  align-items: center;
  justify-items: center;
  background-color: rgba(20, 20, 20, 0.9);

  width: 60vw;
  height: 75vh;
  padding: 2rem;

  margin: 0 auto;

  border-radius: 0.5rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);

  div.field-group {
    padding: 0.6rem;

    .field-label {
      display: flex;
      flex-direction: column;

      text-transform: uppercase;
      font-size: 1.1rem;
      color: rgba(250, 250, 250, 1);

      color: white;

      input {
        width: 28rem;

        margin-top: 0.2rem;

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
          width: 20rem;
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

    justify-self: center;

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

  @media ${device.mobileL} {
    height: 90vh;
    background-position: 50% center;
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
