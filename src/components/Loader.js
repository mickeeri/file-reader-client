import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const Loader = ({ show = true, text }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="Loader">
      <FontAwesome name="spinner" pulse size="3x" />
      <div className="Loader-text">{text}</div>
    </div>
  );
};

Loader.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
};

export default Loader;
