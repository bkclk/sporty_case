import React from 'react';
import '../../styles/App.scss';

function FilterDropdown({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='filter-dropdown'
    >
      <option value=''>All Sports</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default FilterDropdown;
