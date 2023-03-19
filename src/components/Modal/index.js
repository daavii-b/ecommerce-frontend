import React from 'react';
import PropTypes from 'prop-types';

export default function Modal({ show, children }) {
  return (
    show && (
      <div style={{ zIndex: 1000 }} className="modal-container">
        <section className="modal">{children}</section>
      </div>
    )
  );
}

Modal.defaultProps = {
  show: false,
  children: null,
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
};
