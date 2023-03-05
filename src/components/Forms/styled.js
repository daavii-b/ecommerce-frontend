import styled from 'styled-components';
// import { device } from '../../styles/mediaQueries';
import * as colors from '../../styles/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  grid-gap: 1rem;

  width: fit-content;
  height: 100%;

  .field-container {
    width: 28rem;

    display: flex;
    flex-direction: column;
    grid-gap: 0.3rem;

    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 0.3rem;
    box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.04);

    padding: 0.8rem;

    .field-label {
      display: flex;
      flex-direction: column;

      grid-gap: 0.5rem;

      font-size: 1.4rem;

      span {
        padding: 0.3rem;

        color: white;

        border: 1px solid black;
        border-radius: 0.3rem;

        background-color: ${colors.defaultBlackColor};
      }

      .field-input {
        border: 1px solid rgba(0, 0, 0, 0.22);
        border-radius: 0.3rem;
        padding: 0.4rem;

        padding-left: 0.5rem;

        box-shadow: 1px 3px 7px 0 rgba(0, 0, 0, 0.07);

        transition: 0.3s ease-in;

        &:focus {
          transition: 0.3s ease-out;
          border-color: ${colors.secondMainColor};
        }

        &::placeholder {
          font-size: 1.2rem;
        }
      }
    }
  }

  p[role='alert'] {
    margin-top: 0.3rem;

    font-size: 1.4rem;
    font-weight: 100;

    padding: 0.4rem;

    color: ${colors.defaultBlackColor};

    border: 1px solid ${colors.secondMainColor};

    border-radius: 0.4rem;
  }

  button[type='submit'] {
    background-color: rgba(128, 110, 228, 0.65);

    padding: 0.5rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;

    letter-spacing: 0.1rem;

    transition: all 0.4s ease-in-out;

    font-size: 1.2rem;

    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: rgba(128, 110, 228, 1);
      border: 1px solid rgba(255, 255, 255, 0.4);
      transition: all 0.4s ease-in;
      box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.13);
    }
  }
`;
