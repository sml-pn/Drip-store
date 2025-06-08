// src/components/Gallery/index.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img 
              src={img.src} 
              alt={`Slide ${index}`} 
              style={{ 
                width: '100%',
                height: 'auto',
                maxHeight: '681px',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;