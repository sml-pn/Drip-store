import React from 'react';
import Logo from '../Logo';
import InfoSection from '../InfoSection';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const companyInfo = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Blog", link: "/blog" },
    { text: "Política de Privacidade", link: "/privacy" },
    { text: "Termos de Serviço", link: "/terms" }
  ];

  const helpInfo = [
    { text: "Central de Ajuda", link: "/help" },
    { text: "Entregas", link: "/shipping" },
    { text: "Trocas e Devoluções", link: "/returns" },
    { text: "Pagamentos", link: "/payments" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Logo whiteMode />
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-info-sections">
          <InfoSection 
            title="Informações" 
            informations={companyInfo} 
          />
          <InfoSection 
            title="Ajuda" 
            informations={helpInfo} 
          />
        </div>
      </div>

      <hr className="footer-divider" />
      
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;