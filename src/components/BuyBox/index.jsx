// src/components/BuyBox/BuyBox.js
import React from 'react';
import './BuyBox.css';

const BuyBox = ({ 
  name, 
  reference, 
  stars, 
  rating, 
  price, 
  priceDiscount, 
  description, 
  children,
  onAddToCart
}) => {
  return (
    <div className="buy-box">
      <div className="product-header">
        <h1 className="product-name">{name}</h1>
        {reference && <span className="product-reference">Ref: {reference}</span>}
      </div>

      <div className="product-rating">
        <span className="stars-value">
          {stars}
          <span className="star-icon">★★</span>
          <span className="star-icon">★★</span>
          <span className="star-icon">★</span>

        </span>
        <span className="rating-count">({rating} avaliações)</span>
      </div>

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

      <div className="product-description">
        <p>{description}</p>
      </div>

      {children}

      <button className="buy-button" onClick={onAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default BuyBox;