import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './InfoSection.css';

const InfoSection = ({ title, informations }) => {
  return (
    <div className="info-section">
      <h4 className="info-title">{title}</h4>
      <ul className="info-list">
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link} className="info-link">
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InfoSection;