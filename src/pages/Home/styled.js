import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';
import emptyImage from './images/research.svg';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

  align-items: flex-start;
  justify-items: center;
  gap: 1.5rem;

  height: fit-content;

  padding: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, fit-content);
  }

  .empty-feedback {
    width: 100%;
    height: 100vh;

    background-image: url(${emptyImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;

    h2 {
      font-weight: 200;
      text-align: center;
    }
  }
`;

export const Article = styled.article`
  color: #131313;
  font-weight: 500;
`;

export const ProductContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;

  border-radius: 0.5rem;
  /* border: 1px solid ${colors.defaultBlackColor}; */

  transform: scale(1);
  transition: 0.4s ease-in-out;
  overflow: hidden;

  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.08);
  background-color: #dddddd;

  &:hover {
    transform: scale(1.02);
    transition: 0.4s ease-out;

    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.15);
    border-color: rgba(0, 0, 0, 0.4);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    padding: 0.4rem;
  }

  .stock {
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.4rem 0.8rem;
    position: absolute;
    font-size: 1.3rem;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.3rem;
    text-align: center;
    font-weight: 500;
  }

  .per-des {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 251, 30, 0.8);
    padding: 0.4rem 0.8rem;
    position: absolute;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 600;
    top: 0;
    right: 0;

    border-radius: inherit;

    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-bottom: 0.5rem;
    overflow: hidden;

    img {
      box-shadow: 4px -3px 3px 1px rgba(0, 0, 0, 0.1);
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
    max-width: 100%;

    padding: 0.5rem 0;
    border-top: 0.1px solid ${colors.mainPurlpleColor};
    border-bottom: 0.1px solid ${colors.mainPurlpleColor};
    font-size: 1.6rem;

    letter-spacing: 0.6px;
    overflow: hidden;

    h2,
    a {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .product-footer {
    width: 100%;
    height: 4.2rem;

    background-color: ${colors.defaultBlackColor};
    color: ${colors.defaultWhiteColor};

    display: grid;
    grid-template-columns: 74% 13% 13%;
    align-items: center;
    justify-items: center;

    font-size: 1.3rem;

    padding: 0.4rem;
    margin-top: 0.5rem;

    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.06);
    font-weight: 500;

    button {
      padding: 0.25rem;

      background-color: transparent;
      border: none;
      outline: none;

      width: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.secondMainColor};
    }

    .fav-button {
      & > .remove {
        color: red;
      }
    }
    .fav-button:hover {
      transition: 0.3s ease-out;
      & > .add {
        transition: 0.3s ease-out;
        color: ${colors.defaultWhiteColor};
      }
    }

    .add-cart-button:hover {
      transition: 0.3s ease-out;
      .add-cart {
        transition: 0.3s ease-out;
        color: ${colors.defaultWhiteColor};
      }
    }

    span {
      width: 100%;
      text-align: center;
    }

    .product-price {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .price.old {
        text-decoration: line-through;
        text-decoration-color: red;
        margin-right: 0.3rem;

        font-weight: lighter;
        font-size: 1.2rem;
      }

      .price.promotional {
        font-size: 1.3rem;
      }

      .price {
        text-transform: uppercase;
      }
    }
  }
`;
