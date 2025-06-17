import React from 'react';
import PropTypes from 'prop-types';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options, onChange, name, selected }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option">
            <input
              type={inputType}
              name={name || title}
              value={option.value || option.text}
              checked={inputType === 'radio' 
                ? selected === (option.value || option.text)
                : selected?.includes(option.value || option.text)}
              onChange={(e) => onChange(
                option.value || option.text, 
                e.target.checked
              )}
              className="filter-input"
            />
            <span className="filter-label">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default FilterGroup;