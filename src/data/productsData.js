// src/data/productsData.js
export const produtosMock = {
  // Produtos principais
  'prod-1': {
    id: 'prod-1',
    nome: 'Tênis Nike Air Max',
    descricao: 'Tênis esportivo com tecnologia Air Max',
    preco: 799.90,
    imagens: ['/product-thumb-1.jpeg', '/product-thumb-1.jpeg'],
    categoria: 'Calçados',
    coresDisponiveis: ['Preto', 'Branco', 'Azul'],
    tamanhos: [36, 37, 38, 39, 40],
    thumbnail: '/product-thumb-1.jpeg'
  },
  
  // Slides (banners)
  'slide-prod-1': {
    id: 'slide-prod-1',
    nome: 'Oferta Especial - Coleção Verão',
    descricao: 'Confira nossa coleção de verão com 30% de desconto',
    preco: 299.90,
    imagens: ['/home-slide-1.jpeg'],
    categoria: 'Promoções',
    coresDisponiveis: ['Vermelho', 'Azul'],
    tamanhos: ['Único'],
    isSlide: true
  },
  'slide-prod-2': {
    id: 'slide-prod-2',
    nome: 'Lançamento Exclusivo',
    descricao: 'Novos modelos chegaram',
    preco: 599.90,
    imagens: ['/home-slide-2.jpeg'],
    categoria: 'Lançamentos',
    coresDisponiveis: ['Preto', 'Branco'],
    tamanhos: [38, 39, 40, 41],
    isSlide: true
  },
  // Adicione mais slides conforme necessário...
  
  // Coleções
  'col-1': {
    id: 'col-1',
    nome: 'Coleção Esportiva',
    descricao: 'Itens para sua prática esportiva',
    preco: 199.90,
    imagens: ['/collection-1.png'],
    categoria: 'Coleções',
    coresDisponiveis: ['Preto', 'Branco'],
    tamanhos: ['Único'],
    isCollection: true
  },
  'col-2': {
    id: 'col-2',
    nome: 'Coleção Casual',
    descricao: 'Estilo para o dia a dia',
    preco: 249.90,
    imagens: ['/collection-2.png'],
    categoria: 'Coleções',
    coresDisponiveis: ['Azul', 'Cinza'],
    tamanhos: ['Único'],
    isCollection: true
  },
  'col-3': {
    id: 'col-3',
    nome: 'Coleção Premium',
    descricao: 'Produtos selecionados',
    preco: 299.90,
    imagens: ['/collection-3.png'],
    categoria: 'Coleções',
    coresDisponiveis: ['Preto', 'Branco'],
    tamanhos: ['Único'],
    isCollection: true
  }
};

// Função para gerar os dados da HomePage
export const getHomePageData = () => {
  return {
    slides: [
      { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
       { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
        { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
         { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
          { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
           { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
            { src: "/home-slide-1.jpeg", productId: "slide-prod-1" },
     
      
    ],
    products: [
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },

      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      {
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },{
        id: "prod-1",
        category: "Calçados",
        name: "Tênis Nike Air Max",
        image: "/product-thumb-1.jpeg",
        price: 799.90,
        priceDiscount: 699.90
      },
      
    ],
    collections: [
      { id: "col-1", src: "/collection-1.png", alt: "Coleção Esportiva" },
      { id: "col-2", src: "/collection-2.png", alt: "Coleção Casual" },
      { id: "col-3", src: "/collection-3.png", alt: "Coleção Premium" }
    ]
  };
};