import styled from 'styled-components';

export const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, minmax(32%, 1fr));
  align-items: center;
  justify-items: center;
  gap: 1.2rem;
`;

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 40rem;

  border: 2px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;

  padding: 1rem;
  box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.05);

  .product-header {
    h2 {
      font-weight: 200;
      text-align: center;
    }

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.6rem;
  }

  .product-body {
    max-height: 70%;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
