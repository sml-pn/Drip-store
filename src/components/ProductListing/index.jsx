// src/components/ProductListing/index.jsx
import React from 'react';
import ProductCard from '../ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
      padding: '20px 0'
    }}>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductListing;