import styled from 'styled-components';
import * as colors from '../../styles/colors';
import * as defaultStyles from '../../styles/defaultStyles';
import { device } from '../../styles/mediaQueries';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 8rem;

  z-index: 4;

  display: grid;
  grid-template-columns: 18rem 1fr 20%;
  gap: 1rem;
  align-items: center;
  justify-items: center;

  text-transform: uppercase;
  padding: ${defaultStyles.padding};
  background-color: ${colors.mainPurlpleColor};

  box-shadow: 0 6px 9px 3px rgba(0, 0, 0, 0.15);

  /* Category Nav Bar Logic */

  .category-nav {
    width: fit-content;
    height: fit-content;

    position: absolute;
    top: 8rem;
    left: 0;

    z-index: 100;

    .toggle-category-menu {
      display: block;

      background: transparent;

      border: none;
      border-radius: 0 0 0.4rem 0.4rem / 0 0.6rem 0.6rem;

      width: 2.5rem;
      height: 2.5rem;
      padding: 0.2rem;
      font-size: 2rem;

      position: absolute;
      top: 0;
      left: 0;

      transition: 0.6s ease-out;

      svg {
        width: 70%;
        height: 70%;
      }

      visibility: visible;
      opacity: 1;
    }

    .category-list {
      display: flex;
      flex-direction: column;

      background: rgba(23, 23, 23, 0.7);

      width: 0vw;
      height: 70vh;
      overflow: hidden;

      padding: 0.5rem;

      border-top: none;
      z-index: 100;

      border-bottom-right-radius: 0.5rem;
      transition: 0.6s ease-out;

      visibility: hidden;

      li {
        width: 100%;
        margin: 0.3rem;
        list-style: circle inside;

        a {
          width: 100%;
          display: inline-block;
          padding: 1rem 2rem;

          font-size: 1.2rem;
          text-transform: capitalize;

          color: rgba(255, 255, 255, 1);

          transition: 0.3s ease-out;

          &:hover {
            color: ${colors.mainPurlpleColor};
            transition: 0.3s ease-in;
          }
        }

        &::marker {
          color: white;
        }

        &:hover::marker {
          color: ${colors.mainPurlpleColor};
        }
      }
    }

    .toggle-category-menu.off {
      visibility: hidden;
      transition: 0.6s ease-out;
      opacity: 0;

      svg {
        width: 70%;
        height: 70%;
      }
    }
  }

  .category-nav.active .category-list {
    visibility: visible;

    overflow: auto;

    width: 15rem;

    transition: 0.6s ease-in;
  }

  .category-nav.active .toggle-category-menu {
    left: 15rem;

    transition: 0.6s ease-in;

    visibility: hidden;
    opacity: 0;
  }

  .category-nav.active .toggle-category-menu.off {
    left: 15rem;

    visibility: visible;
    opacity: 1;

    transition: 0.6s ease-in;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.8rem;
      font-style: italic;

      text-shadow: 0 3px 0.5px rgba(255, 255, 255, 0.2);

      letter-spacing: 5px;
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
  border-radius: 0.6rem;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0.3rem;
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
      height: fit-content;
      position: absolute;
      top: 0;
      right: 0;

      transition: 0.3s ease-out;

      opacity: 1;
      visibility: visible;
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
      padding: 0.7rem 0.4rem;

      a {
        width: 100%;
        height: 100%;
        z-index: 5;

        display: flex;
        align-items: center;
        justify-content: center;
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
    padding: 0.3rem 0.6rem;

    border-radius: 0.6rem;
    border: 1px solid rgba(0, 0, 0, 0.2);

    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);

    transition: all 0.2s ease-in-out;

    &:focus {
      transition: all 0.2s ease-in;
      border: 1.2px solid rgba(0, 0, 0, 0.8);
    }
  }
`;
