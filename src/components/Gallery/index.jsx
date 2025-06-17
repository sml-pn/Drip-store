import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const Gallery = ({ 
  className = '', 
  width = '100%', 
  height = 'auto', 
  radius = '0px', 
  showThumbs = false, 
  images = [],
  autoPlay = true,
  onSlideClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Controles de navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Autoplay
  useEffect(() => {
    let interval;
    if (autoPlay && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, images.length, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handlers para touch/swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  // Função para lidar com clique no slide (complementada)
  const handleSlideInteraction = (image, index) => {
    if (onSlideClick && image.productId) {
      onSlideClick(image.productId);
    }
    goToSlide(index); // Mantém a funcionalidade original de navegação
  };

  return (
    <div className={`gallery-container ${className}`}>
      <div 
        className="gallery-slider" 
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        }}
      >
        {images.length > 0 && (
          <>
            <button 
              className={`arrow-button left ${currentIndex === 0 ? 'disabled' : ''}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Slide anterior"
            >
              <img src="/arrows/arrow-left.svg" alt="Anterior" />
            </button>

            <div 
              className="slide-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentIndex ? 'active' : ''}`}
                  style={{ 
                    borderRadius: radius,
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    opacity: index === currentIndex ? 1 : 0,
                    position: index === currentIndex ? 'relative' : 'absolute'
                  }}
                  onClick={() => handleSlideInteraction(image, index)}
                >
                  <img 
                    src={image.src} 
                    alt={`Imagem ${index + 1}`} 
                    style={{ 
                      borderRadius: radius,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      cursor: onSlideClick ? 'pointer' : 'default'
                    }}
                    loading={index > 0 ? 'lazy' : 'eager'}
                  />
                </div>
              ))}
            </div>

            {/* Indicadores de slide */}
            {images.length > 1 && (
              <div className="slide-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <button 
              className={`arrow-button right ${currentIndex === images.length - 1 ? 'disabled' : ''}`}
              onClick={nextSlide}
              disabled={currentIndex === images.length - 1}
              aria-label="Próximo slide"
            >
              <img src="/arrows/arrow-right.svg" alt="Próximo" />
            </button>
          </>
        )}
      </div>

      {showThumbs && images.length > 0 && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`thumbnail ${index === currentIndex ? 'selected' : ''}`}
              onClick={() => handleSlideInteraction(image, index)}
              style={{ 
                width: '117px',
                height: '95px',
                borderRadius: radius,
                cursor: onSlideClick ? 'pointer' : 'default'
              }}
            >
              <img 
                src={image.src} 
                alt={`Thumbnail ${index + 1}`}
                style={{ borderRadius: radius }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  autoPlay: PropTypes.bool,
  onSlideClick: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      productId: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
      ]).isRequired
    })
  ).isRequired
};

Gallery.defaultProps = {
  onSlideClick: null
};

export default Gallery;