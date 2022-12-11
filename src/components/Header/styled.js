import styled from 'styled-components';
import * as colors from '../../styles/colors';
import * as defaultStyles from '../../styles/defaultStyles';

export const Header = styled.header`
  z-index: 2;
  position: relative;
  height: 8rem;

  display: grid;
  grid-template-columns: 20% 65% 15%;
  align-items: center;

  text-transform: uppercase;
  padding: ${defaultStyles.padding};
  background-color: ${colors.headerColor};

  box-shadow: 0 6px 9px 3px rgba(0, 0, 0, 0.15);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 2.4rem;
    font-style: italic;
    text-shadow: 0 1px 0.5px rgba(255, 255, 255, 0.6);
    letter-spacing: 5px;
  }

  /* Menu Bar Logic */
  .menu-container {
    z-index: 1;
    top: 0;
    width: 13rem;
    height: 0%;
    position: absolute;

    transition: all 0.5s ease-in-out;

    opacity: 0;
    visibility: hidden;
  }

  .show {
    top: 8rem;
    border-bottom-right-radius: 1rem;
    background-color: ${colors.headerColor};
    transition: all 0.5s ease-in;
    width: 13rem;

    height: 37rem;

    transition: all 0.5s ease-in;

    opacity: 1;
    visibility: visible;
  }

  .show-menu {
    position: absolute;
    top: 8rem;
    left: 4rem;

    background-color: ${colors.headerColor};

    width: 4rem;
    height: 3rem;

    border: none;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;

    box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.1);

    transition: all 0.5s ease-in-out;
    opacity: 1;
    visibility: visible;
  }

  .hide {
    top: 50rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.6s ease-in;
  }

  .close-menu {
    position: absolute;
    bottom: -3rem;
    left: 4rem;
    background-color: ${colors.headerColor};

    width: 4rem;
    height: 3rem;

    border: none;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;

    box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.1);
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
`;

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  li {
    margin: 0 0.2rem;

    a {
      display: block;
      padding: 0.6rem;
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
    width: 95%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
  }

  .search-input:focus {
    transition: all 0.2s ease-in;
    border: 1.2px solid rgba(0, 0, 0, 0.8);
  }
`;
