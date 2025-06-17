import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="section">
      <div className={`section-header ${titleAlign}`}>
        <h2 className="section-title">{title}</h2>
        {link && (
          <a 
            href={link.href} 
            className="section-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }),
  children: PropTypes.node.isRequired
};

export default Section;