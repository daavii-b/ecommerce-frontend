import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-gap: 3rem;

  header {
    width: 100%;
    box-shadow: 3px 1px 2px 4px rgba(0, 0, 0, 0.02);

    h2 {
      width: 100%;

      text-align: center;

      font-family: 'Playfair Display', serif;
      font-weight: 100;

      letter-spacing: 1px;
      border: 1px solid rgba(0, 0, 0, 0.07);

      padding: 0.85rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const Form = styled.form`
  width: 30vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  grid-gap: 1.4rem;

  padding: 1.5rem;

  border-left: 1.4px solid rgba(0, 0, 0, 0.1);
  border-top: 1.4px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.4px solid rgba(0, 0, 0, 0.1);

  border-radius: 0.5rem;

  box-shadow: 3px 1px 2px 4px rgba(0, 0, 0, 0.02);

  .password-icon {
    text-align: center;
    width: 100%;
    font-size: 2.7rem;
  }

  .field-container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .field-label {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      grid-gap: 0.6rem;

      white-space: nowrap;

      letter-spacing: 0.3px;

      font-size: 1.3rem;

      padding: 0.5rem;

      .field-input {
        width: 100%;

        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 0.4rem;

        padding: 0.2rem;
        padding-left: 0.4rem;

        &:focus {
          border-color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    .show-password {
      display: flex;
      align-items: center;
      justify-content: center;

      justify-self: center;
      align-self: center;

      font-size: 1.8rem;

      width: fit-content;
      height: 100%;
      z-index: 5;

      svg {
        z-index: 1;
      }
    }
  }

  .submit-button {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;

    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.04);

    padding: 0.6rem;

    transition: 0.4s ease-in-out;
    letter-spacing: 1px;

    &:hover {
      transition: 0.4s ease;
      background-color: rgba(0, 255, 0, 0.6);
    }
  }
`;
