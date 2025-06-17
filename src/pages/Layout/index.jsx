import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <MainNav />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;