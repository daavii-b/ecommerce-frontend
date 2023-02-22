import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from './styled';

export default function Loading() {
  return (
    <Container>
      <div className="loader-1"> </div>
      <span>Loading...</span>
      <div className="loader-2"> </div>
    </Container>
  );
}

// Loading.defaultProps = {
//   isLoading: false,
// };

// Loading.propTypes = {
//   isLoading: PropTypes.bool,
// };
