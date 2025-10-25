import React, { useState } from 'react';
import './MedicineSearchBar.css';

const MedicineSearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="group">
      <svg className="search-icon" viewBox="0 0 24 24">
        <path d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
      </svg>
      <input
        className="input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default MedicineSearchBar;
