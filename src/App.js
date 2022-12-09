import React from 'react';
import Header from './components/Header';
import GlobalStyles, { Container } from './styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Header />
      <GlobalStyles />
    </Container>
  );
}

export default App;
