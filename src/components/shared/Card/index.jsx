import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ children, shadow = 'medium', hoverEffect = false }) => {
  return (
    <div className={`card ${shadow} ${hoverEffect ? 'hover-effect' : ''}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  hoverEffect: PropTypes.bool
};

export default Card;