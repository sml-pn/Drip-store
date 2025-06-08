import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Digital Store</span>
              <span className="ml-1 text-primary">▶</span>
            </div>
            <p className="text-gray-400 mb-4">
              A melhor loja de produtos esportivos do Brasil.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          {/* Informações */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Segurança</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trocas e Devoluções</a></li>
            </ul>
          </div>
          
          {/* Categorias */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Tênis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Camisetas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Calças</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Acessórios</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">Rua Exemplo, 123</p>
              <p className="mb-2">São Paulo, SP</p>
              <p className="mb-2">(11) 9999-9999</p>
              <p>contato@digitalstore.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Digital Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;