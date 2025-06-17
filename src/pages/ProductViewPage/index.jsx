// src/pages/ProductViewPage/ProductViewPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { produtosMock } from '../../data/productsData';
import './ProductViewPage.css';

const ProductViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    // Simula carregamento assíncrono
    const timer = setTimeout(() => {
      const productData = produtosMock[id];
      
      if (!productData) {
        navigate('/404', { replace: true });
        return;
      }

      setProduct({
        ...productData,
        // Adaptando para a estrutura esperada pelos componentes
        name: productData.nome,
        description: productData.descricao,
        price: `R$ ${productData.preco.toFixed(2).replace('.', ',')}`,
        priceDiscount: productData.priceDiscount 
          ? `R$ ${productData.priceDiscount.toFixed(2).replace('.', ',')}`
          : null,
        images: productData.imagens.map(src => ({ src })),
        sizes: productData.tamanhos.map(String),
        colors: productData.coresDisponiveis || ['Preto', 'Branco', 'Azul'],
        stars: productData.stars || 4.5,
        rating: productData.rating || 128
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione o tamanho e a cor antes de adicionar ao carrinho');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.images[0].src,
      quantity: 1
    };

    console.log('Produto adicionado ao carrinho:', cartItem);
    // Aqui você implementaria a lógica real do carrinho
  };

  if (loading) return <Layout><div className="loading">Carregando...</div></Layout>;
  if (!product) return <Layout><div className="not-found">Produto não encontrado</div></Layout>;

  return (
    <Layout>
      <main className="product-view-page">
        <div className="product-main">
          <div className="product-gallery">
            <Gallery
              images={product.images}
              showThumbs
              width="700px"
              height="570px"
              radius="4px"
            />
          </div>

          <div className="product-info">
            <BuyBox
              name={product.name}
              reference={product.id}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
              onAddToCart={handleAddToCart}
            >
              <ProductOptions
                title="Tamanho"
                options={product.sizes}
                selectedOption={selectedSize}
                onSelect={handleSizeSelect}
                type="text"
                shape="square"
                radius="4px"
              />
              <ProductOptions
                title="Cor"
                options={product.colors}
                selectedOption={selectedColor}
                onSelect={handleColorSelect}
                type="color"
                shape="circle"
                radius="50%"
              />
            </BuyBox>
          </div>
        </div>

        {/* Seção de produtos relacionados pode ser adicionada aqui */}
      </main>
    </Layout>
  );
};

export default ProductViewPage;