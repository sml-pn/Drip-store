import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="main-nav">
      {/* Botão mobile (existente - sem alterações) */}
      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        {/* Links de navegação existentes */}
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/orders" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Meus Pedidos
          </NavLink>
        </li>

        {/* Novos links de autenticação (apenas para mobile) */}
        <li className="mobile-auth-item">
          <Link 
            to="/register" 
            className="mobile-register-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Cadastre-se
          </Link>
        </li>
        <li className="mobile-auth-item">
          <Link 
            to="/login" 
            className="mobile-login-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Entrar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;