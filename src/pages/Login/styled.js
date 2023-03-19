import styled from 'styled-components';

// import * as defaultStyles from '../../styles/defaultStyles';
// import { device } from '../../styles/mediaQueries';

export const Container = styled.div`
  width: fit-content;

  background-color: rgba(0, 0, 0, 0.01);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1.4rem;

  margin: 0 auto;

  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);

  padding: 3rem;

  .account-actions {
    display: flex;

    grid-gap: 0.5rem;

    p {
      font-size: 1.2rem;

      text-decoration: underline;

      padding: 0.5rem;
      transition: 0.2s ease-in-out;

      :hover {
        transition: 0.2s ease-in-out;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
