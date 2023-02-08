import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  max-width: 100%;

  grid-gap: 1rem;

  .product-detail-header {
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 0.7rem;
    grid-column: 1 / 3;

    background-color: ${colors.productColor};

    h3 {
      font-size: 1.8rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.12rem;
      color: ${colors.iconsColor};
    }
  }

  .product-detail-image {
    width: max-content;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;

    overflow: hidden;

    position: relative;

    img {
      width: 100%;
      border-radius: 0.5rem;
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
  }

  .product-detail-description {
    width: 100%;
    max-height: 48vh;

    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;

    padding: 0.8rem 1rem;

    overflow-y: auto;

    p {
      width: 100%;
      max-height: 100%;

      font-size: 1.5rem;
      text-align: justify;
      font-weight: 200;
    }
  }

  .product-detail-footer {
    grid-column: 1 / 3;

    height: 4rem;

    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;

    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 0.7rem;
    box-shadow: 0 4px 3px 1px rgba(0, 0, 0, 0.08);

    overflow: hidden;

    position: relative;

    .per-des {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: rgba(255, 251, 30, 1);
      padding: 0.4rem 0.8rem;
      position: absolute;

      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;

      top: 0;
      left: 0;

      width: fit-content;
      height: 100%;
    }

    p.product-price {
      & > span {
        margin: 0 1rem;
      }

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: fit-content;
      height: fit-content;

      font-size: 1.4rem;
      letter-spacing: 1px;

      padding: 0.6rem 0.7rem;

      border-radius: 0.8rem;
      border: 1px solid ${colors.productColor};

      position: relative;
      left: 7rem;

      & > .old {
        text-decoration: line-through;
        text-decoration-color: red;
        color: rgba(255, 0, 0, 0.75);
        margin-right: 0.3rem;

        font-weight: lighter;
        font-size: 1.3rem;
      }

      & > .promotional {
        font-size: 1.4rem;
      }
    }

    .product-detail-actions {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: row wrap;
      align-items: center;
      justify-content: space-evenly;

      button {
        width: fit-content;
        height: 100%;

        display: flex;

        transition: 0.3s ease-in-out;
        background-color: rgba(0, 0, 0, 0.03);

        border-right: 1px solid rgba(0, 0, 0, 0.3);
        border-left: 1px solid rgba(0, 0, 0, 0.3);

        &:hover {
          transition: 0.3s ease-out;
          background-color: rgba(0, 0, 0, 0.1);
        }

        &:active {
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        p {
          & > span {
            margin: 0 0.4rem;
          }

          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;

          justify-content: flex-start;
          background-color: transparent;

          font-size: 1.1rem;
          text-transform: uppercase;
          font-weight: bold;
        }

        span {
          display: inherit;
          align-items: center;
          justify-content: center;

          width: 5rem;
          height: 100%;
        }

        &.buy-product {
          color: rgba(0, 200, 0, 0.8);
        }

        &.add-cart {
          color: rgba(255, 140, 0);
        }

        &.add-favorites {
          color: rgba(240, 20, 0);
        }
      }
    }
  }
`;
