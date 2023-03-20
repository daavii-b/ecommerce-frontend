import styled from 'styled-components';
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
  background-color: ${({ theme }) => theme.colors.primary};

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
      color: ${({ theme }) => theme.colors.textPrimary};
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

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-right: none;
  border-radius: 0.3rem;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0.4rem;
  padding-right: none;

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

      .icons {
        color: ${({ theme }) => theme.colors.textTetiary};
        font-size: 1.4rem;
      }

      &:hover {
        .icons {
          transition: 0.3s ease-out;
          color: ${({ theme }) => theme.colors.textPrimary};
        }
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
      color: ${({ theme }) => theme.colors.textPrimary};
      border: none;

      padding: 0.4rem;

      opacity: 1;
      visibility: visible;
      transition: all 0.1s ease-in;

      background-color: transparent;
      color: ${({ theme }) => theme.colors.textTetiary};
    }

    ul.nav-items {
      position: absolute;
      top: 0;
      right: -5rem;

      width: 5rem;
      height: 20rem;

      background: ${({ theme }) => theme.colors.textSecondary};
      border: 1.5px solid ${({ theme }) => theme.colors.secondary};
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
          color: ${({ theme }) => theme.colors.textPrimary};
        }

        &:hover {
          a svg {
            color: ${({ theme }) => theme.colors.secondary};
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
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.textPrimary};
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
