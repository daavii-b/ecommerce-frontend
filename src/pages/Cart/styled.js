import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';

export const Section = styled.section`
  width: 80%;
  height: 100%;

  margin: 0 auto;

  @media ${device.tabletL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .products-session,
    .products-details-session {
      width: 100%;
    }

    .products-session {
      display: flex;
      .product-list {
        width: 100%;
        height: 0rem;

        /* display: grid; */
        /* grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr)); */

        display: flex;
        flex-direction: row nowrap;
        align-items: center;
        justify-items: center;

        grid-gap: 0.6rem 2rem;

        overflow: auto hidden;

        transition: 0.6s ease-in-out;

        &.show {
          height: 35rem;
          transition: 0.4s ease-in;
        }
      }
      .show-products-button {
        width: 100%;
        height: 2.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        grid-gap: 0.5rem;

        margin-top: 0.3rem;

        white-space: nowrap;

        font-size: 1.7rem;

        transition: 0.6s ease;

        visibility: visible;
        opacity: 1;
        transition: 0.3s ease-out;

        &:hover {
          filter: brightness(1.3);
          transition: 0.6s ease;
        }

        .angle-icon {
          padding: 0.4rem;
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: inherit;
          color: ${colors.mainPurlpleColor};
          background-color: ${colors.defaultBlackColor};
          border: 1px solid ${colors.mainPurlpleColor};
          border-radius: 0.5rem;
          box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  /* @media ${device.tabletL} {
    grid-template-columns: none;
    grid-template-rows: repeat(2, minmax(1fr, 1fr));
    grid-row-gap: 4rem;

  } */

  .products-session,
  .products-details-session {
    & > header {
      background-color: ${colors.thirdMainColor};
      color: ${colors.defaultWhiteColor};
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 1rem;

      & > h2 {
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: lowercase;
        letter-spacing: 0.2rem;

        &::first-letter {
          text-transform: uppercase;
          font-weight: bold;
          color: ${colors.secondMainColor};
        }
      }
    }
  }

  .products-session {
    display: flex;
    flex-direction: column;
    grid-row-gap: 0.05rem;
  }

  .product-list {
    height: fit-content;
    max-height: 40rem;
    padding: 0 1rem;
    margin-top: 0.2rem;

    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: -2px 3px 4px 1px rgba(0, 0, 0, 0.04);
    overflow-y: auto;

    li {
      margin: 0.8rem 0;
    }
  }

  .show-products-button {
    height: 0rem;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-out;
  }
  .product-session-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 0.5rem;

    border-radius: 0.4rem;

    .cart-info {
      display: flex;
      align-items: center;
      margin: 0.4rem 0;
      padding: 0.5rem;

      p {
        width: fit-content;
        text-transform: uppercase;
        font-size: 1.3rem;
        border: 1px solid ${colors.mainPurlpleColor};
        border-radius: 1rem;
        padding: 0.5rem;
      }

      .cart-amount {
        margin-right: 0.6rem;
      }
    }

    .cart-actions {
      display: flex;
      flex-direction: row wrap;
      margin-top: 0.3rem;
      width: 100%;

      button {
        width: 80%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: transparent;

        font-size: 1.1rem;

        margin: 0 0.3rem;
        padding: 0.5rem;

        border: 1px solid rgba(0, 0, 0, 0.07);
        border-radius: 0.4rem;
        box-shadow: 2px 0px 8px 1px rgba(0, 0, 0, 0.1);
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
          &:active {
            box-shadow: -2px 0px 8px 1px rgba(0, 0, 0, 0.1);
            background-color: rgba(0, 255, 0, 0.6);
          }

          span {
            color: green;
          }

          border-color: green;

          transition: 0.1s ease-out;
        }

        &.clear-cart {
          &:active {
            box-shadow: -2px 0px 8px 1px rgba(0, 0, 0, 0.1);
            background-color: rgba(255, 0, 0, 0.6);
          }

          span {
            .icon {
              color: red;
            }
          }
          border-color: red;
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

  border: 1px solid ${colors.defaultBlackColor};
  border-radius: 0.6rem;
  box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.04);

  transform: scale(1);
  transition: 0.2s ease-in;

  position: relative;

  overflow: hidden;

  @media ${device.tabletL} {
    width: 23rem;
    height: 31rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
    grid-gap: 0.5rem;

    padding: 0.4rem;

    box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.2);

    & .product-header {
      width: 85%;
      height: 6.5rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      text-overflow: ellipsis;

      border-left: 1px solid ${colors.defaultBlackColor};
      padding-left: 0.4rem;

      h3 {
        width: fit-content;
        text-align: center;
      }
    }

    & div.product-cover {
      width: 100%;
      height: 100%;

      .stock {
        padding: 0.8rem 1rem;
        left: 0;
        right: unset;
      }
    }

    div.cart-controls {
      display: flex;
      flex-direction: column;
      /* padding: 0.3rem;

      button {
        padding: 0.5rem;
      } */
    }
  }

  button {
    outline: none;
    border: none;
  }

  &:hover {
    transform: scale(1.015);
    transition: 0.2s ease-out;
    border: 1px solid ${colors.secondMainColor};
    box-shadow: 2.5px 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .product-cover {
    width: 7rem;
    height: 7rem;
    border-radius: 0.6rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

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
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .product-header {
    justify-self: flex-start;

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .product-footer {
    display: flex;
    align-items: center;
    justify-self: flex-start;

    background-color: ${colors.defaultBlackColor};
    color: ${colors.secondMainColor};

    width: fit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 0.8rem;
    padding: 0.5rem 0.7rem;

    .price.old {
      text-decoration: line-through;
      text-decoration-color: red;
      font-weight: lighter;
      font-size: 1.1rem;
      color: ${colors.defaultWhiteColor};
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
    border: 1px solid ${colors.secondMainColor};
    overflow: hidden;

    background-color: ${colors.defaultBlackColor};

    &:active {
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.13);
      transition: 0.1s ease-in-out;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.secondMainColor};

      margin: 0 0.2rem;
      padding: 0.7rem;
      background-color: transparent;
      transition: 0.1s ease-in-out;

      &:active {
        color: ${colors.defaultWhiteColor};
      }
    }
    .fav-button {
      & > .remove {
        color: red;
      }
    }
    .fav-button:hover {
      & > .add {
        color: ${colors.secondMainColor};
      }
    }
  }

  .per-des {
    @keyframes per-der-animation {
      from {
        filter: brightness(1);
      }

      to {
        filter: brightness(0.7);
      }
    }

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    top: 0;
    right: 0;

    position: absolute;

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
