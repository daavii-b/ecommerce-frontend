import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { device } from '../../styles/mediaQueries';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 8rem;

  z-index: 10000;

  display: grid;
  grid-template-columns: 19rem 1fr 20%;
  align-items: center;
  justify-items: center;
  gap: 1.5rem;

  text-transform: uppercase;
  padding: 0 4rem;
  background-color: ${colors.mainPurlpleColor};

  box-shadow: 0 6px 9px 3px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2.1rem;
      font-style: normal;
      font-weight: 700;

      text-shadow: 0 4px 0.5px rgba(0, 0, 0, 0.1);

      letter-spacing: 3px;
      color: ${colors.defaultWhiteColor};
    }
  }

  @media ${device.tabletL} {
    div {
      h1 {
        font-size: 1.5rem;
      }
    }
    grid-template-columns: 16rem 1fr;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;

    div {
      h1 {
        font-size: 1.3rem;
        letter-spacing: 4px;
      }
    }
  }
`;

export const CategoryNav = styled.nav`
  width: fit-content;
  height: fit-content;
  max-height: 40rem;
  transition: 0.4s ease;

  position: absolute;
  top: 9rem;
  left: -2rem;

  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  grid-row-gap: 0.4rem;

  h2 {
    width: 15rem;
  }

  .toggle-category-nav {
    display: flex;

    align-items: center;
    justify-content: center;
    align-self: center;

    grid-gap: 0.5rem;

    width: 100%;
    height: fit-content;

    letter-spacing: 1.2px;
    font-weight: bold;
    padding: 0.6rem 0.4rem;

    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;

    box-shadow: 0 5px 6px rgba(50, 50, 50, 0.2);

    transition: 0.4s ease;

    background-color: ${colors.defaultBlackColor};
    color: ${colors.defaultWhiteColor};

    padding: 0.7rem 0;

    &:hover {
      filter: brightness(1.1);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      color: ${colors.secondMainColor};

      svg {
        transition: 0.4s ease-out;
        font-weight: bold;
      }
    }
  }

  .categories-list {
    width: 0;
    height: 0;
    max-width: fit-content;
    max-height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    grid-row-gap: 0.5rem;

    font-size: 1.4rem;

    overflow-y: auto;
    overflow-x: hidden;

    transition: 0.4s ease;

    visibility: hidden;
    opacity: 0;

    position: relative;
    top: 0;
    left: 0;
    bottom: 0;

    padding-left: 0.4rem;

    .category-item {
      width: 100%;
      height: fit-content;

      transform: translateX(-40rem);
      transition: 0.4s ease-in;

      visibility: hidden;
      opacity: 0;
      padding-left: 0.5rem;
      border-left: 3.5px solid ${colors.secondMainColor};

      .category-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        background-color: rgba(40, 40, 40);

        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;

        white-space: nowrap;
        text-transform: capitalize;

        button.category {
          width: 100%;
          height: 100%;
          display: block;
          padding: 0.7rem;
          transition: 0.2s ease-out;

          text-align: left;

          z-index: 5;
          color: ${colors.defaultWhiteColor};
        }
      }
    }
  }

  &.active {
    left: 0;

    transition: 0.4s ease-in;
    /* padding-top: 0.5rem;
    padding-left: 0.5rem; */

    .toggle-category-nav {
      transition: 0.4s ease;
      color: ${colors.secondMainColor};
      background-color: ${colors.defaultBlackColor};

      span {
        svg {
          transition: 0.4s ease-in;
          transform: rotate(360deg);
          color: ${colors.defaultWhiteColor};
        }
      }
    }

    .categories-list {
      width: 100%;
      height: 100%;
      transition: 0.4s ease-out;

      visibility: visible;
      opacity: 1;
      padding-right: 0.5rem;

      background-color: rgba(0, 0, 0, 0.1);

      .category-item {
        transform: translateX(0);
        transition: 0.4s ease-out;

        visibility: visible;
        opacity: 1;

        transform: scale(1);

        &:hover {
          transform: scale(1.015) perspective(2rem);
          transition: 0.2s ease-out;

          button {
            color: ${colors.secondMainColor};
          }
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: fit-content;

  z-index: 100;

  position: relative;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition: 0.2s ease-in;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-right: none;
  border-radius: 0.3rem;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0.4rem;
  padding-right: none;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }

  &.active {
    width: fit-content;
    height: fit-content;

    button.toggle-navbar {
      opacity: 0;
      visibility: hidden;
      transition: all 0.1s ease-in;
    }

    ul.nav-items {
      height: 20rem;
      position: absolute;
      top: 0;
      right: 0;

      transition: 0.3s ease-out;

      opacity: 1;
      visibility: visible;

      li {
        width: 100%;
        height: 100%;

        a {
          width: 100%;
          height: 100%;

          z-index: 5;
        }
      }
    }
  }

  button.toggle-navbar {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 0.1s ease-in;
  }

  ul.nav-items {
    position: relative;
    top: 0rem;
    right: 0;

    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    grid-gap: 0.5rem;

    visibility: visible;
    opacity: 1;
    transition: 0.4s ease-in;

    li {
      width: 100%;
      height: 100%;

      display: block;

      a {
        width: 100%;
        height: 100%;
        z-index: 5;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.7rem 0.4rem;
      }

      transition: 0.3s ease-out;

      &:hover svg {
        transition: 0.3s ease-in;
        color: ${colors.defaultWhiteColor};
      }
    }
  }

  @media ${device.tabletL} {
    margin-top: 0.5rem;
    width: fit-content;

    position: absolute;
    top: 8rem;
    right: 0;
    transition: all 0.2s ease-in;

    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    button.toggle-navbar {
      position: relative;
      top: 0;
      right: 0;

      width: 3.8rem;
      height: 3.1rem;

      display: block;

      background-color: transparent;
      color: ${colors.defaultWhiteColor};
      border: none;

      padding: 0.4rem;

      opacity: 1;
      visibility: visible;
      transition: all 0.1s ease-in;

      background-color: transparent;
      color: ${colors.defaultSecondaryBlackColor};
    }

    ul.nav-items {
      position: absolute;
      top: 0;
      right: -5rem;

      width: 5rem;
      height: 20rem;

      background: ${colors.defaultBlackColor};
      border: 1.5px solid ${colors.secondMainColor};
      border-right: none;

      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;

      opacity: 0;
      visibility: hidden;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      li {
        width: 2rem;
        height: 4rem;

        box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.1);

        a svg {
          font-size: 1.5rem;
          color: ${colors.defaultWhiteColor};
        }

        &:hover {
          a svg {
            color: ${colors.secondMainColor};
          }
        }
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  label {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .search-icon {
      color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s ease-in;
    }
  }
  .search-input {
    width: 95%;
    max-width: 100%;

    margin-left: 1rem;
    padding: 0.5rem 0.6rem;

    border-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);

    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);

    transition: all 0.2s ease-in-out;

    background-color: #dddddd;

    &:focus {
      transition: all 0.2s ease-in;
      border: 1.2px solid rgba(0, 0, 0, 0.5);
      background-color: #fff;
    }

    &::placeholder {
      font-weight: 300;
      color: grey;
    }
  }
`;
