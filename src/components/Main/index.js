import React from 'react';
import PropTypes from 'prop-types';

import { MainContainer } from './styled';

export default function Main({ element }) {
  return <MainContainer>{element}</MainContainer>;
}

Main.propTypes = {
  element: PropTypes.element.isRequired,
};
