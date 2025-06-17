import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import SearchField from '../SearchField';
import CartIcon from '../CartIcon';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        
        {/* Campo de busca normal (desktop) */}
        <div className="header-search">
          <SearchField />
        </div>
        
        <div className="header-right">
          <div className="auth-links">
            <Link to="/register" className="register-link">Cadastre-se</Link>
            <Link to="/login" className="login-button">Entrar</Link>
          </div>
          <CartIcon />
        </div>
        
        {/* Ícone de busca mobile (não precisa de container adicional) */}
        <SearchField compact />
      </div>
    </header>
  );
};

export default Header;