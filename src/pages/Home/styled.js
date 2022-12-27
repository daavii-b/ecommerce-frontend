import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));

  align-items: flex-start;
  justify-items: center;
  gap: 1.5rem;

  height: fit-content;

  padding: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, 1fr);
  }
`;

export const Article = styled.article`
  color: #131313;
  font-weight: 600;
`;

export const ProductContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.03);

  transform: scale(1);
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: 0.4s ease-out;
  }

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
    border-top-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    text-align: center;
  }

  .product-image {
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
  }

  .product-footer {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${colors.productColor};
    font-size: 1.3rem;

    padding: 0.4rem 0.1rem;
    margin-top: 0.5rem;

    box-shadow: 0 4px 5px 2px rgba(0, 0, 0, 0.15);

    span {
      width: 100%;
      text-align: center;
    }
    .product-price {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .old {
        text-decoration: line-through;
      }

      .price {
        text-transform: uppercase;
      }
    }
  }
`;
