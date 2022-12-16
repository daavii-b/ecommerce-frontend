import styled from 'styled-components';
import * as colors from '../../styles/colors';
import * as defaultStyles from '../../styles/defaultStyles';
import { device } from '../../styles/mediaQueries';

export const Header = styled.header`
  z-index: 2;
  position: relative;
  height: 8rem;

  display: grid;
  grid-template-columns: 23rem 1fr 20%;
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

    .toggle-menu {
      border: none;
      border-radius: 0 0 0.4rem 0.4rem / 0 0.6rem 0.6rem;
      background: transparent;

      width: 4rem;
      height: 4rem;
      padding: 0.2rem;

      display: block;
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
      background: rgba(23, 23, 23, 0.7);

      width: 0vw;
      height: 70vh;
      overflow: hidden;

      display: flex;
      flex-direction: column;
      padding: 0.5rem;

      border-top: none;
      z-index: 100;

      border-bottom-right-radius: 0.5rem;
      transition: 0.6s ease-out;

      visibility: hidden;

      li {
        margin: 0.3rem;
        list-style: circle inside;

        a {
          display: inline-block;
          padding: 0.5rem;
          font-size: 1.2rem;
          text-transform: capitalize;

          color: rgba(255, 255, 255, 1);

          transition: 0.3s ease-out;

          &:hover {
            color: ${colors.headerColor};
            transition: 0.3s ease-in;
          }
        }
      }

      li::marker {
        color: white;
      }
    }

    .toggle-menu.off {
      visibility: hidden;
      transition: 0.6s ease-out;
      opacity: 0;
    }
  }

  .category-nav.active .category-list {
    visibility: visible;

    overflow: auto;

    width: 15rem;

    transition: 0.6s ease-in;
  }

  .category-nav.active .toggle-menu {
    left: 15rem;
    transition: 0.6s ease-in;
    visibility: hidden;
    opacity: 0;
  }

  .category-nav.active .toggle-menu.off {
    left: 15rem;
    visibility: visible;
    transition: 0.6s ease-in;
    opacity: 1;
  }

  .ecommerce-image {
    width: 4rem;
    height: 4rem;
    border: 1px solid rgba(0, 0, 0, 0.03);
    box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.06);
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 2.4rem;
      font-style: italic;
      text-shadow: 0 3px 0.5px rgba(255, 255, 255, 0.2);
      letter-spacing: 5px;
    }
  }

  @media ${device.tablet} {
    div {
      h1 {
        font-size: 1.8rem;
      }
    }
    grid-template-columns: 22rem 1fr;
  }

  @media ${device.mobileM} {
    grid-template-columns: 1fr;

    div {
      h1 {
        font-size: 1.6rem;
        letter-spacing: 4px;
      }
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    li {
      margin: 0 0.2rem;

      a {
        display: block;
        padding: 0.6rem;
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
    margin-left: 1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.6rem;
    width: 100%;
    max-width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);

    &:focus {
      transition: all 0.2s ease-in;
      border: 1.2px solid rgba(0, 0, 0, 0.8);
    }
  }
`;
