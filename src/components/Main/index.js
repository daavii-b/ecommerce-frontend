import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

export default function Main({ children }) {
  return <Container>{children}</Container>;
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.shape(),
  ]).isRequired,
};
