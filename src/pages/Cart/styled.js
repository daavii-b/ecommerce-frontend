import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';

export const Section = styled.section`
  @keyframes walletAnimation {
    0% {
      transform: translateY(-4px);
      color: white;
    }

    25% {
      transform: translateY(-6px);
      right: -3px;
      color: black;
    }
    50% {
      transform: translateY(-8px);
      color: black;
    }
    75% {
      transform: translateY(-10px);
      color: black;
      right: -3px;
    }
    100% {
      transform: translateY(-12px);
      color: black;
    }
  }

  width: 100%;
  height: 85vh;
  display: grid;
  grid-template-columns: 65% 1fr;

  justify-content: center;

  overflow: hidden;

  .product-wrapper {
    width: 100%;
    max-height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    padding: 0.6rem;
    padding-top: 0;
    overflow-y: auto;
    overflow-x: hidden;

    border-right: 1px solid rgba(0, 0, 0, 0.4);
  }

  .cart-container {
    width: 100%;
    height: 100%;

    padding: 0.6rem;
    padding-top: 0;

    .cart-header {
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.1);

      padding: 0.9rem;

      background-color: ${colors.productColor};
      font-weight: 300;
    }
  }

  .empty-cart {
    width: 100%;
    height: 40%;
    grid-column: 1 / 4;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    padding-bottom: 3rem;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);

    h2 {
      width: 100%;
      background-color: ${colors.productColor};
      font-weight: 300;
      text-align: center;
      margin-bottom: 2rem;
      padding: 1rem;
    }

    span {
      z-index: 4;
      position: relative;
      margin-top: 2rem;

      .sifr {
        transition: 0.6s ease-in-out;
        position: absolute;
        z-index: 1;
        text-align: right;
        top: -5px;
        right: -1px;
        color: white;

        animation-name: walletAnimation;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }

      .wallet-icon {
        color: ${colors.productColor};
      }
    }
  }

  @media ${device.mobileL} {
    .product-wrapper {
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);

      display: flex;
    }
  }
`;

export const Article = styled.article``;

export const ProductContainer = styled.div`
  img {
    max-width: 100%;
  }

  width: fit-content;
  height: fit-content;
  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 200;
    padding: 0.4rem;
  }

  .stock {
    background-color: ${colors.productColor};
    padding: 0.4rem 0.8rem;
    position: absolute;
    font-size: 1.3rem;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.3rem;
    text-align: center;
    font-weight: 500;

    z-index: 3;
  }

  .qty-p {
    bottom: 0;
    right: 0;
    z-index: 3;
    background-color: ${colors.productColor};
    padding: 0.4rem 0.8rem;
    position: absolute;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 500;
  }

  .per-des {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 251, 63, 0.8);
    padding: 0.4rem 0.8rem;
    position: absolute;
    font-size: 1.3rem;
    border-top-right-radius: 0.2rem;
    border-bottom-left-radius: 0.3rem;
    text-align: center;
    font-weight: 600;
    right: 0;

    z-index: 3;
  }

  .product-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-bottom: 0.5rem;

    img {
      box-shadow: 6px -3px 5px 1px rgba(0, 0, 0, 0.1);
      border-radius: 0.3rem;
    }

    .product-image-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }

  .product-header {
    padding: 0.5rem 0;
    border-top: 0.1px solid ${colors.headerColor};
    border-bottom: 0.1px solid ${colors.headerColor};

    font-size: 1.6rem;
  }

  .product-footer {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${colors.productColor};
    font-size: 1.3rem;

    padding: 0.4rem;
    margin-top: 0.5rem;

    box-shadow: 0 4px 5px 2px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    button {
      background-color: transparent;
      border: none;
      outline: none;
    }

    span {
      width: 100%;
      text-align: center;
    }

    .add-fav {
      width: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-price {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .price.old {
        text-decoration: line-through;
        font-weight: lighter;
        font-size: 1.2rem;
      }

      .price.promotional {
        font-size: 1.4rem;
      }

      .price {
        text-transform: uppercase;
      }
    }
    .cart-controls {
      width: 8rem;

      display: flex;
      align-items: center;
      justify-content: space-around;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;
      }
    }
  }
`;
