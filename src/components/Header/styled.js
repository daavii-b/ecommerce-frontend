import styled from 'styled-components';
import * as colors from '../../styles/colors';
import * as defaultStyles from '../../styles/defaultStyles';

export const Header = styled.header`
  height: 8rem;

  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: center;

  text-transform: uppercase;
  padding: ${defaultStyles.padding};
  background-color: ${colors.headerColor};

  border-radius: 0.6rem;
  box-shadow: 0 0 9px 3px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.8rem;
    font-style: italic;
    text-shadow: 0 4px 3px rgba(0, 0, 0, 0.15);
    letter-spacing: 5px;
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
    border: 1.8px solid rgba(0, 0, 0, 0.43);
  }
`;
