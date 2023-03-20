import styled from 'styled-components';
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

export const FiltersNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  height: fit-content;

  overflow: hidden unset;

  border-radius: 0.4rem;

  position: relative;

  .filters-container {
    width: 100%;
    height: 100%;
    display: flex;
    box-shadow: 4px 3px 7px rgba(50, 50, 50, 0.1);

    border: 1px solid rgba(50, 50, 50, 0.1);
    border-radius: 0.45rem;
    border-top-left-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;

    position: relative;

    .clear-filters-button {
      background-color: ${({ theme }) => theme.colors.textPrimary};

      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 0.25rem;

      position: fixed;
      top: 15rem;
      left: -13rem;

      z-index: 100;

      box-shadow: 0 6px 10px rgba(100, 100, 100, 0.1);

      transition: 0.3s ease;

      &.show {
        transition: 0.3s ease;
        left: -2.5rem;

        &:hover {
          left: 1rem;
        }
      }

      button {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        grid-gap: 0.8rem;

        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.textSecondary};

        font-weight: 600;

        padding: 0.6rem;

        .icon {
          color: red;
        }
      }

      &:hover {
        transition: 0.3s ease;
        background-color: ${({ theme }) => theme.colors.secondary};

        box-shadow: 0 6px 10px rgba(100, 100, 100, 0.2);

        button {
          color: ${({ theme }) => theme.colors.textPrimary};
        }
      }
    }

    h2 {
      display: flex;
      align-items: center;

      padding: 0.6rem 0.8rem;

      width: fit-content;

      background-color: ${({ theme }) => theme.colors.secondary};

      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: 1.2px;

      border-radius: 0.4rem;
    }

    ul {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      grid-gap: 1rem;

      padding: 0.6rem;

      font-size: 1.4rem;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: fit-content;

      &.active {
        button {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      &:hover {
        transition: 0.3s ease-in-out;
        font-weight: bolder;

        button {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      .filter-label {
        position: relative;

        width: max-content;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 1rem;
        font-weight: 700;
        letter-spacing: 1.2px;

        transition: 0.3s ease-in-out;

        padding: 0.6rem 0.8rem;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        z-index: 2;
        width: 5rem;
      }
      &:hover {
        transition: 0.3s ease-in-out;
        font-weight: bolder;

        button {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      &.active {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    .close-filter-overlay {
      display: flex;
      align-items: center;
      justify-content: center;

      height: fit-content;

      position: absolute;
      left: 0rem;
      top: 6rem;

      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease-in-out;

      border-radius: 0.4rem;
      border: 1px solid ${({ theme }) => theme.colors.secondary};

      box-shadow: -4px 5px 3px rgba(60, 60, 60, 0.2);

      &.show {
        z-index: 1000;
        width: 5rem;
        font-size: 1rem;
        top: 6rem;

        visibility: visible;
        opacity: 1;
        transition: 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.colors.secondary};

        &:hover {
          background-color: ${({ theme }) => theme.colors.textPrimary};
          .close-overlay-button {
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }

      .close-overlay-button {
        font-size: 2rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 100%;
        height: 100%;

        padding: 0.3rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }
    }
  }

  .modal-container {
    width: 0%;

    position: absolute;
    top: 5rem;

    color: black;
    transition: 0.3s ease-in-out;

    .modal {
      width: 0%;
      transition: 0.3s ease-in-out;
    }

    .wrapper {
      display: flex;

      justify-content: center;
      max-height: 60vh;

      overflow-y: auto;

      transition: 0.3s ease-in-out;

      position: absolute;

      visibility: hidden;
      opacity: 0;

      .filter-modal {
        width: 100%;

        display: flex;
        flex-direction: column;
        grid-gap: 0.6rem;

        background-color: ${({ theme }) => theme.colors.textPrimary};

        padding: 0.6rem;
        padding-top: 0;
        position: relative;

        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;

        .choose-filter-method {
          width: 100%;
          legend {
            letter-spacing: 1px;

            font-size: 1.2rem;
            font-weight: 600;
            padding: 0 0.4rem;

            color: ${({ theme }) => theme.colors.secondary};
          }

          form {
            width: 100%;
          }

          fieldset {
            width: 100%;
            height: fit-content;
            padding: 0.5rem;

            display: flex;
            align-items: center;
            justify-content: space-around;

            border: 1px solid rgba(60, 60, 60, 0.1);
            border-radius: 0.4rem;

            box-shadow: 2px 3px 2px rgba(140, 140, 40, 0.1);
          }

          label {
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 0.5rem;

            font-size: 1.2rem;
            letter-spacing: 1px;

            padding: 0.8rem;
          }
        }

        .filter-item {
          position: relative;

          background-color: white;

          width: 100%;
          height: fit-content;
          min-width: 18rem;

          display: flex;
          align-items: center;

          overflow: hidden;

          border: 2px solid rgba(80, 80, 80, 0.1);
          border-radius: 0.4rem;

          box-shadow: 4px 2px 4px rgba(120, 120, 120, 0.1);

          font-size: 1.3rem;
          font-weight: 500;

          letter-spacing: 0.6px;

          transition: 0.3s ease-in-out;

          font-weight: 500;

          button {
            display: flex;
            align-items: center;
            grid-gap: 0.6rem;

            height: 100%;
            width: 100%;

            padding: 0.8rem 1.4rem;
            padding-left: 0.9rem;
          }

          svg {
            font-weight: bolder;
            color: ${({ theme }) => theme.colors.secondary};
          }

          &:hover {
            border-color: ${({ theme }) => theme.colors.secondary};
            transition: 0.3s ease-in-out;
            font-weight: 600;
          }

          .icon {
            font-size: 0.8rem;
            color: ${({ theme }) => theme.colors.primary};
          }

          .track {
            width: 5rem;
            height: 1.9rem;

            background-color: ${({ theme }) => theme.colors.secondary};

            position: absolute;
            top: -0.5rem;
            right: -1.8rem;

            transform: rotate(40deg);
            z-index: 1;
          }
        }
      }

      .range-filter {
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
      }
    }

    .wrapper.show {
      transition: 0.3s ease;
      visibility: visible;
      opacity: 1;

      .filter-modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        transition: 0.3s ease-in-out;

        opacity: 1;
        visibility: visible;

        /* li {
          max-width: max-content;
        } */
      }
      .range-filter {
        width: 100%;
        height: max-content;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        grid-gap: 1rem;

        padding: 1rem;

        background-color: ${({ theme }) => theme.colors.textPrimary};

        opacity: 1;
        visibility: visible;
        transition: 0.3s ease-in-out;

        border-radius: 0.4rem;

        label {
          display: flex;
          flex-direction: column;
          font-size: 1.1rem;
          grid-gap: 0.4rem;

          font-weight: 600;
          letter-spacing: 0.8px;
          .icon {
            color: ${({ theme }) => theme.colors.secondary};
          }

          .input-container,
          .input-label {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            grid-gap: 0.5rem;
          }

          input {
            max-width: 16rem;
            padding: 0.2rem;
          }
        }

        .apply-filter-button {
          align-self: flex-start;
          width: 10rem;

          border: 1px solid rgba(90, 90, 90, 0.2);
          border-radius: 0.4rem;

          background-color: ${({ theme }) => theme.colors.secondary};

          box-shadow: 4px 2px 6px rgba(120, 120, 120, 0.4);

          padding: 0.5rem;

          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 1px;

          transition: 0.15s ease-in-out;

          &:hover {
            transition: 0.15s ease-out;
            filter: brightness(1.1);
          }
        }
      }
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

  transform: scale(1);
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-in;
    transform: scale(1.02);
  }

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

      color: ${({ theme }) => theme.colors.primary};
      background-color: rgba(50, 50, 50, 0.04);

      span,
      p {
        text-align: center;
        width: 100%;
      }

      .price.old {
        text-decoration: line-through;
        text-decoration-color: red;

        color: ${({ theme }) => theme.colors.textSecondary};
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

        color: ${({ theme }) => theme.colors.textSecondary};
        background-color: ${({ theme }) => theme.colors.secondary};

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

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      color: ${({ theme }) => theme.colors.textSecondary};

      font-size: 1.8rem;
      font-weight: 600;

      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.45rem;

      box-shadow: 0 2px 6px rgba(10, 10, 10, 0.07);

      padding: 1.2rem;

      background-image: linear-gradient(
        to left,
        transparent,
        rgba(20, 20, 20, 0.01),
        rgba(20, 20, 20, 0.03),
        rgba(20, 20, 20, 0.06),
        rgba(20, 20, 20, 0.08),
        rgba(20, 20, 20, 0.15)
      );

      h2 {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary};
      }

      .see-all {
        font-size: 1.4rem;
        font-weight: 500;

        transition: 0.25s ease-out;

        span {
          font-size: 1rem;
        }

        &:hover {
          transition: 0.25s ease-out;
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
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

      /* .discount {
        width: 9rem;

        position: absolute;

        top: 0.7rem;
        left: -2.2rem;

        border: 1px solid rgba(0, 0, 0, 0.1);

        border-bottom-right-radius: 0.3rem;

        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);

        background-color: #f4eb04;

        z-index: 100;

        padding: 0.4rem;

        font-size: 1.3rem;

        letter-spacing: 1px;

        transform: rotate(-40deg);

        text-align: center;
      }
 */
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

        color: ${({ theme }) => theme.colors.primary};

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

          color: ${({ theme }) => theme.colors.textSecondary};
          background-color: ${({ theme }) => theme.colors.secondary};

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
