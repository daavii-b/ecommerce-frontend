import React from 'react';
import PropTypes from 'prop-types';

export default function Modal({ show, children }) {
  return (
    show && (
      <div className="modal-container">
        <section className="modal">{children}</section>
      </div>
    )
  );
}

Modal.defaultProps = {
  show: false,
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
