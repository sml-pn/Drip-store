import React from 'react';
import logoWhite from '../../assets/images/logo-footer.svg';
import logoDefault from '../../assets/images/logo-header.svg';
import './Logo.css';

const Logo = ({ whiteMode }) => {
  return (
    <div className="logo-container">
      <img 
        src={whiteMode ? logoWhite : logoDefault} 
        alt="Digital Store Logo" 
        className="logo-image"
      />
    </div>
  );
};

export default Logo;