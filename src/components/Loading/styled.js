import styled from 'styled-components';

export const Container = styled.div`
  @keyframes load {
    0% {
      transform: rotate(0deg);
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0);
    }

    20% {
      transform: rotate(72deg);
      box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    }

    40% {
      transform: rotate(144deg);
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    }

    60% {
      transform: rotate(216deg);
      box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    }

    80% {
      transform: rotate(288deg);
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  background: rgba(0, 0, 0, 0.45);
  color: white;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;

  .loader-1 {
    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: load 2s linear infinite;
    position: absolute;
    width: 20rem;
    height: 20rem;
    z-index: 1000;
    border: 0.1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
  }
  .loader-2 {
    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: load 2.5s linear infinite;
    position: absolute;
    width: 20rem;
    height: 20rem;
    z-index: 1000;

    border-radius: 50%;
  }

  div::after,
  div::before {
    content: '';

    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    z-index: 10000;
  }
`;
