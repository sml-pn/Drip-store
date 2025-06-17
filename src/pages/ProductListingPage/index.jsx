import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import './ProductListingPage.css';

// Mock data - substitua por chamada à API
const productData = {
  id: 1,
  name: "Tênis Esportivo Premium",
  reference: "TN123456",
  stars: 4.8,
  rating: 124,
  description: "Tênis desenvolvido para alta performance com amortecimento avançado e materiais respiráveis.",
  price: "R$ 499,90",
  priceDiscount: "R$ 449,90",
  images: [
    { src: "/product-image-1.png" },
    { src: "/product-image-2.png" },
    { src: "/product-image-3.png" }
  ],
  sizes: ["38", "39", "40", "41", "42"],
  colors: ["#000000", "#FF0000", "#0000FF"],
  relatedProducts: [
    {
      id: 2,
      name: "Tênis Casual",
      image: "/product-thumb-2.png",
      price: 299.90,
      priceDiscount: 279.90
    },
    {
      id: 3,
      name: "Tênis de Corrida",
      image: "/product-thumb-3.png",
      price: 399.90
    },
    {
      id: 4,
      name: "Tênis Skate",
      image: "/product-thumb-4.png",
      price: 349.90
    },
    {
      id: 5,
      name: "Tênis Social",
      image: "/product-thumb-5.png",
      price: 249.90
    }
  ]
};

const ProductViewPage = () => {
  const { id } = useParams();
  const product = productData; // Em produção, buscar por ID

  return (
      <main className="product-view-page">
        <div className="product-main">
          {/* 7.1 - Galeria */}
          <div className="product-gallery">
            <Gallery
              images={product.images}
              showThumbs
              width="700px"
              height="570px"
              radius="4px"
            />
          </div>

          {/* 7.3 - BuyBox com ProductOptions */}
          <div className="product-info">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <ProductOptions
                title="Tamanho"
                options={product.sizes}
                type="text"
                shape="square"
                radius="4px"
              />
              <ProductOptions
                title="Cor"
                options={product.colors}
                type="color"
                shape="circle"
              />
            </BuyBox>
          </div>
        </div>

        {/* 7.4 - Produtos recomendados */}
        <Section 
          title="Produtos recomendados" 
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
          className="related-products"
        >
          <ProductListing products={product.relatedProducts} />
        </Section>
      </main>
  );
};

export default ProductViewPage;