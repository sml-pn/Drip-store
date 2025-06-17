// components/CategoryIcons.js
import React from 'react';
import { 
  TShirtIcon, 
  PantsIcon, 
  CapIcon, 
  HeadphonesIcon, 
  SneakerIcon 
} from './Icons';

const CategoryIcons = () => {
  return (
    <div className="category-icons-container">
      <div className="icon-item">
        <TShirtIcon />
        <span>Camisetas</span>
      </div>
      <div className="icon-item">
        <PantsIcon />
        <span>Calças</span>
      </div>
      <div className="icon-item">
        <CapIcon />
        <span>Bonés</span>
      </div>
      <div className="icon-item">
        <HeadphonesIcon />
        <span>Headphones</span>
      </div>
      <div className="icon-item">
        <SneakerIcon />
        <span>Tênis</span>
      </div>
    </div>
  );
};

export default CategoryIcons;