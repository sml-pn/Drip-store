import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Tênis Nike Air Max",
      category: "Tênis Esportivo",
      image: "/assets/products/nike-air-max.jpg",
      price: 599.90,
      oldPrice: 799.90,
      discount: "30%",
      rating: 4,

      reviews: 124
    },

    {
      id: 1,
      name: "Tênis Nike Air Max",
      category: "Tênis Esportivo",
      image: "/assets/products/nike-air-max.jpg",
      price: 599.90,
      oldPrice: 799.90,
      discount: "30%",
      rating: 4,
      
      reviews: 124
    },

    {
      id: 1,
      name: "Tênis Nike Air Max",
      category: "Tênis Esportivo",
      image: "/assets/products/nike-air-max.jpg",
      price: 599.90,
      oldPrice: 799.90,
      discount: "30%",
      rating: 4,
      
      reviews: 124
    },
    // Adicione mais 8 produtos seguindo o mesmo padrão
  ];

  const collections = [
    {
      id: 1,
      name: "Coleção Verão",
      image: "/assets/collections/summer-collection.jpg",
      discount: "Até 40% OFF"
    },
    // Adicione mais coleções
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Coleções em Destaque */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8">Coleções em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collections.map(collection => (
                <div key={collection.id} className="relative rounded-lg overflow-hidden group">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center flex-col">
                    <h3 className="text-white text-xl font-bold">{collection.name}</h3>
                    <span className="text-secondary font-bold mt-2">{collection.discount}</span>
                    <button className="btn-primary transition-all hover:scale-105">Ver Coleção</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Produtos em Oferta */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="btn-primary transition-all hover:scale-105">Produtos em Oferta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Não perca nossas ofertas exclusivas!</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cadastre-se agora e receba 10% de desconto na primeira compra.
            </p>
            <button className="btn-primary transition-all hover:scale-105">Cadastre-se</button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;