import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  .modal-container {
    padding: 0.6rem;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.8);

    height: 100vh;

    z-index: 10000;

    .modal {
      color:${({ theme }) => theme.colors.textPrimary}

      hr {
        margin: 1rem 0;
        border-color: #ff964f;
      }

      hr ~ hr {
        margin-top: 2rem;
      }
      .products-not-available {
        display: flex;
        flex-direction: column;
        grid-gap: 1rem;
      }

      .modal-header {
        display: flex;
        align-items: center;

        border-top: 1px solid white;
        border-bottom: 1px solid white;
        padding: 1rem;

        h2 {
          width: 100%;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          color:${({ theme }) => theme.colors.textPrimary}
        }

        .close-container {
          width: fit-content;
          height: fit-content;

          .close-button {
            display: flex;
            align-items: center;
            justify-content: center;

            color: white;

            border: 1px solid white;
            border-radius: 0.6rem;

            padding: 1rem;
          }
        }
      }

      .explanation-container {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 1rem;

        border: 1px solid #ff964f;
        border-radius: 0.5rem;

        padding: 0.5rem;

        background-color:${({ theme }) => theme.colors.textTetiary};

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: fit-content;
          height: fit-content;

          padding: 0.4rem;

          font-size: 1.6rem;

          color: #ff964f;
        }

        .explanation-text {
          width: fit-contet;
          strong {
            font-weight: 400;
          }
        }
      }

      .wrapper {
        max-height: 45vh;
        overflow-y: auto;
      }

      .dont-available-list {
        display: flex;
        flex-direction: column;
        grid-gap: 1rem;

        padding: 1rem;

        li {
          width: fit-content;

          padding: 0.5rem;
          border-bottom: 1px solid${({ theme }) => theme.colors.textPrimary}

          &::marker {
            content: '-';
          }
        }
      }

      .actions {
        /* border: 1px solid white; */
        padding: 0.5rem;

        /* grid-row-gap: 1rem; */

        p {
          padding: 0.5rem;
          padding-left: 0;
        }

        .options {
          display: flex;
          grid-gap: 1rem;

          button {
            width: 12rem;

            display: block;
            color: black;
            padding: 0.5rem;

            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.6rem;
            background-color: ${({ theme }) => theme.colors.secondary};

            font-weight: 600;

            transition: 0.3s ease-in-out;
            &:hover {
              transition: 0.3s ease-in-out;
              filter: brightness(1.2);
            }
          }
        }
      }
    }
  }

  .checkout-review-header {
    padding: 1rem;
    /* color: ${({ theme }) => theme.colors.secondary};; */
    color:${({ theme }) => theme.colors.textPrimary}
    background-color: ${({ theme }) => theme.colors.primary};

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;

    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      font-weight: 500;
    }
  }

  .order-notice {
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid #ff964f;
    border-radius: 0.2rem;

    box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.05);
    background: #ff964f;

    .icon {
      padding: 0.7rem;
      width: fit-content;
      height: 100%;

      font-size: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      align-self: center;
      justify-self: center;

      color: black;
    }

    p {
      font-size: 1.4rem;
      padding: 0.5rem;

      strong {
        font-weight: 400;
      }
    }

    font-size: 1.5rem;
  }

  .order-review {
    display: flex;
    flex-direction: column;
    grid-gap: 0.6rem;

    border-radius: 0.4rem;

    border: 2px dotted black;

    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

    padding: 1rem;

    h3 {
      font-weight: 400;
    }

    .wrapper {
      width: 100%;
      height: 60vh;
      overflow-y: auto;
    }

    .order-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
      /* display: flex;
      flex-direction: column; */
      grid-gap: 0.7rem;

      padding: 0.4rem;
      padding-left: 1rem;

      .order-item {
        display: flex;
        flex-direction: row wrap;
        align-items: center;
        grid-gap: 0.4rem;

        width: 100%;
        height: fit-content;

        list-style-type: disc;
        list-style-position: inside;

        border: 1px solid black;
        border-radius: 0.4rem;

        box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.04);

        overflow: hidden;

        background-color:${({ theme }) => theme.colors.textPrimary}

        h4 {
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          display: block;
          font-size: 1.4rem;
          font-weight: 500;
          padding: 0.8rem;
          text-overflow: ellipsis;
        }

        .order-item-information {
          background-color: #69bdea;
          width: fit-content;
          height: 100%;

          display: flex;
          grid-gap: 0.8rem;
          font-size: 1.4rem;

          border-left: 1px solid rgba(0, 0, 0, 0.5);
          padding: 0.8rem;

          p {
            height: 100%;
          }

          strong {
            font-weight: 500;
            height: 100%;
          }

          .old span {
            text-decoration: line-through;
            text-decoration-color: red;

            strong {
              font-weight: 300;
            }
          }
        }
      }
    }
  }

  .order-information {
    display: flex;
    align-items: center;
    grid-gap: 1.2rem;

    p {
      display: flex;
      align-items: center;
      padding: 0.8rem;

      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.4rem;

      box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.04);

      text-transform: uppercase;

      font-size: 1.4rem;

      strong {
        font-weight: 300;
      }
    }
  }

  .order-item-qty {
    width: fit-content;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;

    border-left: 1px solid rgba(0, 0, 0, 0.3);

    font-size: 1.4rem;

    strong {
      font-weight: 300;
    }
  }

  form {
    .checkout-button {
      width: 35rem;

      display: block;

      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.4rem;

      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

      padding: 0.8rem;

      font-size: 1.4rem;
      font-weight: 700;

      background-color: #4ffe96;

      transition: 0.4s ease;
      &:hover {
        transition: 0.4s ease;
        filter: brightness(1.1);
      }
    }
  }

  @media ${device.mobileL} {
    .order-notice {
      text-align: left;
      line-height: 1.2;

      p {
        border-left: 1px solid black;
      }
    }
    .order-review {
      .order-list {
        width: 100%;
        padding-left: 0;

        .order-item {
          width: 100%;

          display: grid;
          grid-template-columns: 1fr max-content;
          align-items: flex-start;
          justify-content: center;
          grid-gap: 0;

          .order-item-information {
            width: 100%;
            align-items: center;
            justify-content: space-around;

            border: none;
            grid-column: 1 / 4;
          }

          .order-item-qty {
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;

            border: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 50%;

            padding: 1rem;

            grid-column: 3;

            color: ${({ theme }) => theme.colors.textSecondary};

            font-size: 1.4rem;

            strong {
              font-weight: 400;
            }
          }
        }
      }
    }

    form {
      button.checkout-button {
        width: 100%;
        &:hover {
          transition: 0.4s ease;
          filter: brightness(1.1);
        }
      }
    }
  }
`;
