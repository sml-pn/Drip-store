import React from 'react';
import cartIcon from '../../assets/icons/mini-cart.svg';
import './CartIcon.css';

const CartIcon = ({ itemCount = 0 }) => {
  return (
    <div className="cart-icon">
      <img 
        src={cartIcon} 
        alt="Carrinho de compras" 
        className="cart-svg"
      />
      {itemCount > 0 && (
        <span className="cart-badge">{itemCount}</span>
      )}
    </div>
  );
};

export default CartIcon;