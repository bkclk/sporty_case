import React from 'react';
import './SearchBar.scss';

function SearchBar({ value, onChange }) {
  return (
    <input
      type='text'
      placeholder='Search leagues...'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='search-bar'
    />
  );
}

export default SearchBar;
