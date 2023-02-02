import styled from 'styled-components';
import * as colors from '../../styles/colors';
// import { device } from '../../styles/mediaQueries';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 60% 1fr;

  overflow-x: hidden;

  .products-session,
  .products-details-session {
    & > header {
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 1rem;

      & > h2 {
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: lowercase;
        letter-spacing: 0.2rem;

        &::first-letter {
          text-transform: uppercase;
          color: ${colors.productColor};
          font-weight: bold;
        }
      }
    }

    margin-right: 0.2rem;
  }

  .product-list {
    height: 80vh;
    padding: 0 1rem;
    margin-top: 0.2rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    overflow-y: auto;

    li {
      margin: 0.8rem 0;
    }
  }

  .products-session {
    margin-right: 0.2rem;
  }

  .products-details-session {
    margin-left: 0.2rem;

    .details-content {
      height: 100%;
      max-height: 60vh;
      margin-top: 0.4rem;
      padding: 0.6rem;

      border: 1px solid rgba(0, 0, 0, 0.2);

      .product-list-name {
        overflow-y: auto;

        li {
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.5rem;
          padding: 0.4rem;
          margin: 0.4rem 0;

          h3 {
            font-size: 1.2rem;
            font-weight: 200;
            text-transform: uppercase;
          }
        }
      }
    }

    .details-footer {
      .cart-amount {
        padding: 0.5rem;

        p {
          border: 1px solid rgba(0, 0, 0, 0.4);
        }
      }

      .cart-actions {
        display: flex;
        flex-direction: row wrap;

        button {
          width: 80%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent;

          font-size: 1.1rem;

          margin: 0 0.3rem;
          padding: 0.5rem;

          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.4rem;
          box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.1);
          text-transform: uppercase;

          span {
            margin: 0 0.3rem;

            .icon {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          &.ready-to-pay {
            span {
              color: green;
            }

            border-color: green;
          }

          &.clear-cart {
            span {
              .icon {
                color: red;
              }
            }
            border-color: red;
          }

          &:active {
            box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;

export const Article = styled.article``;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 8rem 20rem 1fr;
  align-items: center;
  justify-items: center;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.04);

  transform: scale(1);
  transition: 0.2s ease-in;

  position: relative;

  overflow: hidden;

  button {
    outline: none;
    border: none;
  }

  &:hover {
    transform: scale(1.015);
    transition: 0.2s ease-out;
    border: 1px solid ${colors.productColor};
    box-shadow: 2.5px 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .product-cover {
    width: 7rem;
    height: 7rem;
    border-radius: 0.6rem;
    overflow: hidden;

    position: relative;

    justify-self: flex-start;

    img {
      width: 100%;
    }

    .stock {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.3rem;
      font-weight: 200;
      text-align: center;
      padding: 0.2rem 0.6rem;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  .product-header {
    justify-self: flex-start;

    h3 {
      font-size: 1.5rem;
      font-weight: 200;
    }
  }

  .product-footer {
    display: flex;
    align-items: center;
    justify-self: flex-start;

    width: fit-content;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 0.8rem;
    padding: 0.5rem 0.7rem;

    .price.old {
      text-decoration: line-through;
      text-decoration-color: red;
      font-weight: lighter;
      font-size: 1.1rem;

      color: rgba(255, 0, 0, 0.8);
    }

    .price.promotional {
      font-size: 1.3rem;
    }

    .price {
      font-size: 1.3rem;
      text-transform: uppercase;
    }

    span {
      margin: 0 0.4rem;
    }
  }

  .cart-controls {
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;

    border-radius: 0.6rem;
    border: 1px solid ${colors.productColor};
    overflow: hidden;

    &:active {
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.13);
      transition: 0.1s ease-in-out;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 0.2rem;
      padding: 0.4rem;
      background-color: transparent;
      transition: 0.1s ease-in-out;

      &:active {
        color: ${colors.productColor};
      }
    }
    .fav-button {
      & > .remove {
        color: red;
      }
    }
    .fav-button:hover {
      & > .add {
        color: ${colors.productColor};
      }
    }
  }

  .per-des {
    @keyframes per-der-animation {
      from {
        filter: brightness(0.8);
      }

      to {
        filter: brightness(1);
      }
    }

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: absolute;
    top: 0;
    right: 0;

    border-bottom-left-radius: 0.6rem;
    padding: 0.6rem;
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: 0.07rem;
    background-color: rgba(255, 251, 30, 0.8);
    transform: scale(1);
    animation: per-der-animation 2.8s infinite;
  }
`;
