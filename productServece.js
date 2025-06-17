// src/services/productService.js
export const getProductById = (id) => {
  // Aqui você usaria seus produtosMock
  const produto = produtosMock[id];
  
  if (!produto) return null;

  return {
    id: produto.id,
    name: produto.nome,
    description: produto.descricao,
    price: produto.preco,
    priceDiscount: produto.preco * 0.9, // Exemplo de desconto
    images: produto.imagens.map(src => ({ src })),
    sizes: produto.tamanhos || [],
    colors: (produto.coresDisponiveis || []).map(cor => {
      // Converter nomes de cores para hex
      const colorMap = {
        'Preto': '#000000',
        'Branco': '#ffffff',
        'Azul': '#0000FF',
        'Vermelho': '#FF0000',
        'Verde': '#00FF00',
        'Cinza': '#808080'
      };
      return colorMap[cor] || cor;
    }),
    relatedProducts: [] // Você pode preencher isso depois
  };
};