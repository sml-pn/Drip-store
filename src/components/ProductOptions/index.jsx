// src/components/ProductOptions/ProductOptions.js
import React from 'react';
import './ProductOptions.css';

const ProductOptions = ({ 
  title, 
  options, 
  selectedOption,
  onSelect,
  type = 'text', 
  shape = 'circle', // Padrão agora é círculo para cores
  radius = '50%'    // Padrão agora é 50% para formas redondas
}) => {

  const handleClick = (option) => {
    if (typeof onSelect === 'function') {
      onSelect(option);
    }
  };
  
  return (
    <div className="product-options">
      <h3 className="options-title">{title}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${shape} ${selectedOption === option ? 'selected' : ''}`}
            style={{
              borderRadius: radius,
              ...(type === 'color' ? { backgroundColor: option } : {})
            }}
            onClick={() => onSelect(option)}
            aria-label={`Selecionar ${title.toLowerCase()} ${option}`}
          >
            {type === 'text' && option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;