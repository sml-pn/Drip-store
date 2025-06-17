import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ image, name, price, priceDiscount, category }) => { // Adicione category nas props
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={name} 
          className="product-image"
        />
      </div>
      <div className="product-info">
        {/* Adicione esta linha para a categoria */}
        {category && <span className="product-category">{category}</span>}
        <h3 className="product-name">{name}</h3>
        <div className="product-pricing">
          {priceDiscount ? (
            <>
              <span className="original-price">{price}</span>
              <span className="discounted-price">{priceDiscount}</span>
            </>
          ) : (
            <span className="price">{price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
  category: PropTypes.string // Adicione esta linha
};

export default ProductCard;