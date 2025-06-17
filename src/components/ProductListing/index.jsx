import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import './ProductListing.css';

const formatarPreco = (valor) => {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

const ProductListing = ({ products = [], onProductClick }) => { // Adicionada prop
  return (
    <div className="product-listing">
      {products.map(product => (
        <div 
          key={product.id}
          onClick={() => onProductClick(product.id)} // Adicionado clique
          style={{ 
            cursor: 'pointer', // Adicionado visual (não altera CSS existente)
            width: '100%' // Garante que o clique funcione em toda a área
          }}
        >
          <ProductCard
            image={product.image}
            name={product.name}
            price={formatarPreco(product.price)}
            priceDiscount={product.priceDiscount ? formatarPreco(product.priceDiscount) : null}
            category={product.category}
          />
        </div>
      ))}
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ← ID obrigatório
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number,
      category: PropTypes.string
    })
  ).isRequired,
  onProductClick: PropTypes.func // ← Nova prop
};

ProductListing.defaultProps = {
  onProductClick: null // Valor padrão
};

export default ProductListing;