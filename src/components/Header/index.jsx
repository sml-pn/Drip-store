import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import { colors } from '../../styles/colors';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Logo />
        
        <div style={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>
            <img src="/assets/search-icon.svg" alt="Buscar" />
          </button>
        </div>

        <nav style={styles.nav}>
          <NavLink 
            to="/login" 
            style={({isActive}) => ({
              ...styles.link,
              borderBottom: isActive ? `2px solid ${colors.primary}` : 'none'
            })}
          >
            Entrar
          </NavLink>
          <NavLink
            to="/register"
            style={styles.registerButton}
          >
            Cadastre-se
          </NavLink>
          <img 
            src="/assets/mini-cart.svg" 
            alt="Carrinho" 
            style={styles.cartIcon}
          />
        </nav>
      </div>

      <div style={styles.navBar}>
        <NavLink to="/" style={styles.navLink}>Home</NavLink>
        <NavLink to="/products" style={styles.navLink}>Produtos</NavLink>
        <NavLink to="/categories" style={styles.navLink}>Categorias</NavLink>
        <NavLink to="/orders" style={styles.navLink}>Meus Pedidos</NavLink>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: colors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 40px',
    maxWidth: '1440px',
    margin: '0 auto'
  },
  searchContainer: {
    flex: 1,
    margin: '0 40px',
    position: 'relative'
  },
  searchInput: {
    width: '100%',
    padding: '12px 20px',
    borderRadius: '4px',
    border: `1px solid ${colors.lightGray2}`,
    fontSize: '16px'
  },
  searchButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  link: {
    color: colors.darkGray2,
    textDecoration: 'none',
    fontSize: '16px',
    paddingBottom: '4px'
  },
  registerButton: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '12px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  cartIcon: {
    cursor: 'pointer'
  },
  navBar: {
    borderTop: `1px solid ${colors.lightGray2}`,
    padding: '16px 40px',
    display: 'flex',
    gap: '40px',
    justifyContent: 'center'
  },
  navLink: {
    color: colors.darkGray2,
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    paddingBottom: '8px',
    '&:hover': {
      color: colors.primary
    }
  }
};

export default Header;