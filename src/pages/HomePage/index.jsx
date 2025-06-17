import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { getHomePageData } from '../../data/productsData';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { slides, products, collections } = getHomePageData();

  const handleProductClick = (productId) => {
    navigate(`/produto/${productId}`);
  };

  return (
    <main className="home-page">
      <section className="hero-section">
        <Gallery 
          images={slides}
          width="1440px"
          height="681px"
          className="home-gallery"
          onSlideClick={handleProductClick}
        />
      </section>

      <Section 
        title="Coleções em destaque" 
        titleAlign="center"
        className="collections-section"
      >
        <div className="collections-grid">
          {collections.map(collection => (
            <img 
              key={collection.id}
              src={collection.src} 
              alt={collection.alt}
              className="collection-image"
              onClick={() => handleProductClick(collection.id)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </Section>

      <Section 
        title="Produtos em alta" 
        titleAlign="left"
        className="products-section"
      >
        <ProductListing 
          products={products}
          onProductClick={handleProductClick}
        />
      </Section>
    </main>
  );
};

export default HomePage;