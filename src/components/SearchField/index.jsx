import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './SearchField.css';

const SearchField = ({ compact = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
      setIsExpanded(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  if (compact) {
    return (
      <div className="search-compact-container">
        <button 
          className="search-compact-trigger"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Buscar"
        >
          <FiSearch size={30} />
        </button>
        
        {isExpanded && (
          <div className="search-compact-expanded">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            <button className="search-button" onClick={handleSearch}>
              <FiSearch size={16} />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="search-field">
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default SearchField;