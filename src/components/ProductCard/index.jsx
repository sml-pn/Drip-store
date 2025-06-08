import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition-all"
          srcSet={`
            ${product.imageSmall} 480w,
            ${product.imageMedium} 768w,
            ${product.imageLarge} 1280w
          `}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        {product.discount && (
          <span className="discount-badge">{product.discount} OFF</span>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{product.category}</span>
        <h3 className="font-semibold mt-1">{product.name}</h3>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < product.rating ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="mt-3">
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through mr-2">
              R$ {product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="font-bold text-lg">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
        <button className="btn-primary w-full mt-4">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;