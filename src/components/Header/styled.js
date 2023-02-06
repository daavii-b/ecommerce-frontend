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
  background-color: ${colors.headerColor};

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
            color: ${colors.headerColor};
            transition: 0.3s ease-in;
          }
        }

        &::marker {
          color: white;
        }

        &:hover::marker {
          color: ${colors.headerColor};
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
  overflow: hidden;

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

  button.toggle-navbar {
    position: absolute;
    top: 8rem;
    right: 0;

    background-color: transparent;
    border: none;

    padding: 0.2rem;

    transition: all 0.2s ease-in;

    opacity: 0;
    visibility: hidden;

    color: ${colors.productColor};
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

    visibility: visible;
    opacity: 1;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 0.2rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.6rem;
      }

      transition: 0.3s ease-out;

      &:hover svg {
        transition: 0.3s ease-in;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  @media ${device.tabletL} {
    background-color: rgba(0, 0, 0, 0.5);
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
      display: block;

      width: 3.1rem;
      height: 3.1rem;

      position: relative;
      top: 0;
      right: 0;

      background-color: transparent;

      padding: 0.2rem;

      transition: all 0.2s ease-out;

      opacity: 1;
      visibility: visible;
    }

    ul.nav-items {
      width: 0px;

      opacity: 0;
      visibility: hidden;

      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      transition: 0.3s ease-in;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0.3rem 0;

        width: 4rem;
        height: 4rem;

        background-color: ${colors.productColor};

        border-radius: 50%;
        box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.1);

        a svg {
          color: rgba(20, 20, 20, 0.8);
        }
      }
    }

    &.active {
      button.toggle-navbar {
        position: absolute;
        padding: 0.4rem;

        transition: all 0.5s ease-in;

        opacity: 0;
        visibility: hidden;
      }

      ul.nav-items {
        width: 5rem;
        height: fit-content;
        position: relative;

        transition: 0.5s ease-out;

        opacity: 1;
        visibility: visible;
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
