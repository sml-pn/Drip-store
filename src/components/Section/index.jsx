// src/components/Section/index.jsx
import React from 'react';

const Section = ({ title, children, titleAlign = 'left' }) => {
  return (
    <section style={{ margin: '40px 0' }}>
      <h2 style={{
        textAlign: titleAlign,
        color: '#474747',
        fontSize: '24px',
        marginBottom: '20px'
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;