import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';
import emptyImage from './images/research.svg';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));

  align-items: flex-start;
  justify-items: center;
  gap: 1rem;

  height: fit-content;

  padding: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(20rem, fit-content);
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

export const ProductWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  max-width: 25rem;
  min-height: max-content;

  overflow: hidden;

  box-shadow: 5px 3px 4px rgba(60, 60, 60, 0.07);

  border: 1px solid rgba(40 40, 40, 0.1);
  border-radius: 0.5rem;

  padding: 0.4rem;

  position: relative;

  .discount {
    width: 9rem;

    position: absolute;

    top: 0.7rem;
    left: -2.2rem;

    border: 1px solid rgba(0, 0, 0, 0.1);

    border-bottom-right-radius: 0.3rem;

    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);

    background-color: #f4eb04;

    /* z-index: 100; */

    padding: 0.4rem;

    font-size: 1.3rem;

    letter-spacing: 1px;

    transform: rotate(-40deg);

    text-align: center;
  }

  .product-container {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    grid-gap: 1.2rem;

    width: 100%;
    height: 100%;

    max-width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;

    .product-image {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      width: 100%;
      height: max-content;

      max-width: 20rem;

      overflow: hidden;

      border-radius: 0.4rem;

      box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);

      img {
        border-radius: 0.4rem;
      }
    }

    .product-header {
      width: 100%;

      max-width: 100%;

      padding: 0.8rem;

      background-color: #ddd;

      border-radius: 0.3rem;

      box-shadow: 0 2px 6px rgba(10, 10, 10, 0.1);

      h2 {
        max-width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-size: 1.2rem;
        font-weight: 400;

        letter-spacing: 1px;
      }
    }

    .product-price {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-direction: row nowrap;
      grid-gap: 0.5rem;

      align-items: center;
      justify-content: center;

      font-weight: 600;
      font-size: 1.3rem;

      white-space: nowrap;

      padding: 0.7rem 0;

      border: 1px solid rgba(30, 30, 30, 0.1);
      border-radius: 0.2rem;

      box-shadow: 0 4px 5px rgba(40, 40, 40, 0.05);

      color: ${colors.thirdMainColor};
      background-color: rgba(50, 50, 50, 0.04);

      span,
      p {
        text-align: center;
        width: 100%;
      }

      .price.old {
        text-decoration: line-through;
        text-decoration-color: red;

        color: ${colors.defaultBlackColor};
      }
    }

    .info {
      display: flex;
      flex-direction: row nowrap;
      align-items: center;
      justify-content: space-between;

      width: 100%;
    }

    .stock {
      border: 1px solid rgba(30, 30, 30, 0.1);
      border-radius: 0.4rem;

      font-size: 1.2rem;

      padding: 0.7rem 1rem;
      box-shadow: 4px 4px 6px rgba(40, 40, 40, 0.07);
    }

    .controls {
      width: max-content;

      display: flex;
      flex-direction: row nowrap;

      align-items: center;
      justify-content: flex-end;

      grid-gap: 0.5rem;

      button {
        width: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.7rem 1rem;

        font-size: 1.3rem;

        color: ${colors.defaultBlackColor};
        background-color: ${colors.secondMainColor};

        box-shadow: 0 4px 6px rgba(40, 40, 40, 0.13);

        border-radius: 0.3rem;

        transition: 0.3s ease-in-out;
        transform: scale(1);

        .remove {
          color: red;
        }

        &:hover {
          transition: 0.3s ease-out;
          transform: scale(1.04);
        }
      }
    }
  }
`;

export const CategorySection = styled.section`
  width: 100%;
  height: 100%;

  padding: 1rem;

  .wrapper {
    min-height: max-content;
    max-width: 100%;
    overflow: hidden;

    & > h2 {
      width: 100%;
      color: ${colors.secondMainColor};

      font-size: 1.8rem;
      font-weight: 600;

      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.45rem;

      padding: 1.2rem;

      box-shadow: 0 2px 6px rgba(10, 10, 10, 0.07);

      background-image: linear-gradient(
        to left,
        transparent,
        rgba(20, 20, 20, 0.01),
        rgba(20, 20, 20, 0.03),
        rgba(20, 20, 20, 0.06),
        rgba(20, 20, 20, 0.08),
        rgba(20, 20, 20, 0.15)
      );
    }

    ul {
      display: flex;
      flex-direction: row nowrap;
      align-items: center;
      justify-content: flex-start;

      grid-gap: 1.5rem;

      padding: 1rem 0;

      overflow: auto hidden;

      li,
      article {
        width: fit-content;
        height: 100%;
      }
    }

    .product-container {
      width: 100%;
      height: 100%;

      max-width: 20rem;
      min-width: 20rem;
      /* max-height: fit-content; */

      overflow: hidden;
      text-overflow: ellipsis;

      display: flex;
      flex-direction: column;

      align-items: flex-start;
      justify-content: center;

      grid-gap: 1.2rem;

      padding: 0.4rem 0;

      .product-image {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        width: 100%;
        height: max-content;

        max-width: 20rem;
        overflow: hidden;

        border-radius: 0.4rem;

        box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);

        img {
          height: 100%;
          border-radius: 0.4rem;
        }
      }

      .product-header {
        width: 100%;

        max-width: 100%;

        padding: 0.8rem;

        background-color: #ddd;

        border-radius: 0.3rem;

        box-shadow: 0 2px 6px rgba(10, 10, 10, 0.1);
        overflow: hidden;

        h2 {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          font-size: 1.2rem;
          font-weight: 400;

          letter-spacing: 1px;
        }
      }

      .product-price {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: row nowrap;
        grid-gap: 0.5rem;

        align-items: center;
        justify-content: center;

        font-weight: 600;
        font-size: 1.3rem;

        white-space: nowrap;

        padding: 0.7rem 0;

        border: 1px solid rgba(30, 30, 30, 0.1);
        border-radius: 0.2rem;

        box-shadow: 0 4px 5px rgba(40, 40, 40, 0.05);

        color: ${colors.thirdMainColor};

        background-color: rgba(50, 50, 50, 0.04);

        span,
        p {
          text-align: center;
          width: 100%;
        }
      }

      .info {
        display: flex;
        flex-direction: row nowrap;
        align-items: center;
        justify-content: space-between;

        grid-gap: 0.5rem;

        width: 100%;
        height: fit-content;
      }

      .stock {
        border: 1px solid rgba(30, 30, 30, 0.1);
        border-radius: 0.4rem;

        font-size: 1.4rem;

        padding: 0.5rem 1rem;
        box-shadow: 4px 4px 6px rgba(40, 40, 40, 0.07);

        white-space: nowrap;
      }

      .controls {
        width: max-content;

        display: flex;
        flex-direction: row nowrap;

        align-items: center;
        justify-content: flex-end;

        grid-gap: 0.5rem;

        /* padding-right: 0.2rem; */

        /* border: 1px solid rgba(30, 30, 30, 0.15); */

        button {
          width: 4rem;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0.7rem 1rem;

          font-size: 1.3rem;

          color: ${colors.defaultBlackColor};
          background-color: ${colors.secondMainColor};

          box-shadow: 0 4px 6px rgba(40, 40, 40, 0.13);

          border-radius: 0.3rem;

          transition: 0.3s ease-in-out;
          transform: scale(1);

          .remove {
            color: red;
          }

          &:hover {
            transition: 0.3s ease-out;
            transform: scale(1.04);
          }
        }
      }
    }
  }
`;
