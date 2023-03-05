import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const PaginationContainer = styled.nav`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const PaginationList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.4rem;

  grid-gap: 0.6rem;

  overflow: hidden;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 0.3rem;

    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.06);

    :hover {
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.04);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.6rem 1rem;
    }

    &.pagination-control button {
      color: ${colors.secondMainColor};
      background-color: ${colors.defaultSecondaryBlackColor};

      &:hover {
        filter: brightness(1.3);
      }
    }

    &.pagination-item {
      background-color: rgba(30, 30, 30, 0.06);
      color: ${colors.defaultSecondaryBlackColor};
      transition: 0.3s ease-in-out;
      transform: scale(1);

      &:hover {
        transition: 0.3s ease-out;

        background-color: rgba(30, 30, 30, 0.2);
      }
      &.active {
        background-color: ${colors.defaultBlackColor};
        transform: scale(1.04) translateY(-0.4rem);

        button {
          color: ${colors.secondMainColor};
        }

        &:hover button {
          filter: brightness(1.3);
        }
      }
    }
  }
`;
