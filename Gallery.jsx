import React, { useState } from 'react';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowRight from '../../assets/icons/ArrowRight';

const Gallery = ({ images, showThumbs = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="gallery">
      <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}>
        <ArrowLeft />
      </button>
      
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt}
        className="main-image"
      />

      {showThumbs && (
        <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}

      <button onClick={() => setCurrentIndex(prev => Math.min(images.length - 1, prev + 1))}>
        <ArrowRight />
      </button>
    </div>
  );
};