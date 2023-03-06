import styled from 'styled-components';
import notFound from './images/not_found.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${notFound});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  background-attachment: scroll;
  background-clip: border-box;

  h2 {
    font-size: 2.4rem;
    font-weight: 200;
    text-align: center;
  }
`;
