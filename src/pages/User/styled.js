import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries/index';

export const Section = styled.section`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 2rem;

  header {
    display: flex;
    align-items: center;
    grid-gap: 2rem;

    position: relative;

    width: fit-content;
    height: 3.4rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      &.user-header-info {
        width: 19rem;
        height: 100%;
        justify-content: flex-start;

        border-right: 1px solid rgba(0, 0, 0, 0.12);
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 5px 3px 2px 1px rgba(0, 0, 0, 0.03);

        h2 {
          width: 100%;
          font-size: 2.1rem;
          font-weight: 100;
          text-align: center;
        }

        span {
          width: 5rem;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          color: ${colors.secondMainColor};

          border-right: 1px solid rgba(0, 0, 0, 0.2);

          background-color: ${colors.defaultBlackColor};

          border-top-left-radius: 0.4rem;
          border-bottom-left-radius: 0.4rem;
        }
      }
    }
  }

  article {
    grid-column: 1;

    display: flex;

    width: max-content;
    height: max-content;

    ul {
      display: flex;
      flex-direction: column;

      grid-gap: 0.8rem;

      border-left: 1px solid ${colors.defaultBlackColor};

      padding: 0.7rem;
      padding-left: 1.2rem;

      .field-data {
        display: flex;
        align-items: center;
        grid-column-gap: 1rem;
        position: relative;

        width: fit-content;
        height: fit-content;

        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        border-left: 1px solid rgba(0, 0, 0, 0.25);

        box-shadow: -2px 2px 1px 1px rgba(0, 0, 0, 0.04);

        padding: 0.5rem;

        p {
          span {
            font-size: 1.3rem;
            text-transform: uppercase;
            color: ${colors.mainPurlpleColor};
            letter-spacing: 0.3px;
          }
        }
        .edit-user {
          button.edit-button {
            display: flex;
            align-items: center;
            justify-content: center;

            z-index: 5;

            width: 100%;
            height: 100%;
            transition: 0.3s ease-in-out;

            svg {
              z-index: 1;
            }

            &:hover {
              color: ${colors.secondMainColor};
              border-color: ${colors.secondMainColor};
              box-shadow: -2px 2px 1px 1px rgba(0, 0, 0, 0.05);
              transition: 0.3s ease-in;
            }

            @media ${device.tabletL} {
              position: relative;
            }
          }
        }

        .email-feedback {
          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          &[data-feedback]:after {
            opacity: 0;
            transition: all 0.3s ease 0.5s;
            visibility: hidden;

            content: attr(data-feedback);
            color: black;

            position: absolute;
            right: -16rem;

            width: fit-content;
            height: fit-content;
            transition: 0.3s ease-out;

            white-space: nowrap;
            z-index: 6;

            font-size: 1.3rem;

            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 0.8rem;
            box-shadow: 3px 2px 2px 1px rgba(0, 0, 0, 0.08);

            padding: 0.4rem;
          }

          &[data-feedback='Email not verified']:after {
            background-color: rgba(254, 158, 0, 1);
          }

          &[data-feedback='Email verified']:after {
            background-color: rgba(109, 224, 1, 1);
            right: -13rem;
          }

          &:hover::after {
            opacity: 1;
            transition: all 0.3s ease 0.5s;
            visibility: visible;
          }

          .verified {
            color: rgba(100, 200, 1, 1);
          }
          .not-verified {
            color: rgba(254, 158, 0, 1);
          }
        }
      }
    }
  }

  .edit-section {
    width: 100%;

    .edit-form {
      display: flex;
      flex-direction: column;

      align-items: flex-start;
      justify-content: center;
      grid-gap: 0.8rem;

      width: 0;
      height: 0;

      border-left: 1px solid rgba(0, 0, 0, 0.2);

      visibility: hidden;
      opacity: 0;

      transition: 0.42s ease-out;

      overflow: hidden;

      &.enabled {
        width: 100%;
        height: fit-content;

        padding: 0.7rem;
        padding-left: 1.2rem;

        visibility: visible;
        opacity: 1;

        transition: 0.42s ease-in;
      }

      .field-container {
        @keyframes append-animate {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes remove-animate {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        width: 100%;
        height: fit-content;

        display: flex;
        align-items: center;

        grid-column-gap: 0.7rem;

        padding: 0.5rem;
        border-left: 2px solid ${colors.secondMainColor};
        transition: 0.3s ease-in;

        animation: remove-animate 0.4s linear;

        &.enabled {
          display: flex;
          transition: 0.3s ease-in;
          animation: append-animate 0.4s linear;
        }

        .field-label {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: row nowrap;
          align-items: center;
          justify-content: center;
          grid-gap: 0.5rem;

          text-transform: uppercase;
          font-size: 1.2rem;
          letter-spacing: 0.6px;

          overflow: hidden;

          white-space: nowrap;

          .field-input {
            width: 100%;
            height: 100%;
            padding: 0.2rem;
            padding-left: 0.5rem;
            border: 1.7px solid rgba(0, 0, 0, 0.26);
            border-radius: 0.4rem;

            box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.04);

            transition: 0.4s ease-in-out;

            &:focus {
              transition: 0.4s ease;
              border-color: ${colors.secondMainColor};
            }

            &::placeholder {
              width: 100%;
              font-size: 1.2rem;
            }
          }
        }

        .close-button-container {
          .close-button {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.8rem;

            color: ${colors.defaultBlackColor};
            transition: 0.3s ease;

            &:hover {
              transition: 0.3s ease;
              color: red;
            }
          }
        }
      }

      .submit-button {
        width: 0;
        height: 0;
        border: 0;
        border-radius: 0;

        font-size: 1.3rem;

        visibility: hidden;
        opacity: 0;

        transition: 0.4s ease-out;
        letter-spacing: 1.3px;
      }

      &.enabled .submit-button {
        width: 12rem;
        height: fit-content;

        visibility: visible;
        opacity: 1;

        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.4rem;

        box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.015);

        padding: 0.6rem;
        transition: 0.4s ease-out;

        &.enabled {
          border: 1px solid rgba(0, 0, 0, 0.2);
          box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.04);

          padding: 0.6rem;
          transition: 0.4s ease-out;

          &:hover {
            background-color: rgba(0, 255, 33, 0.4);
            border-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }

  .change-password-footer {
    width: fit-content;
    height: fit-content;

    .change-password-link {
      display: block;

      padding: 0.8rem;

      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 1.4rem;
      box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.04);

      background-color: rgba(0, 0, 0, 0.02);
      transition: 0.4s ease-out;

      &:hover {
        transition: 0.4s ease;
        color: ${colors.secondMainColor};
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 0.5rem;

        font-size: 1.4rem;

        span {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.4rem;
        }
      }
    }
  }
`;
