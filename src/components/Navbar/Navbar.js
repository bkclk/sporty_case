import React from 'react';
import SearchBar from '../SearchBar';
import FilterDropdown from '../FilterDropdown';
import SortDropdown from '../SortDropdown';
import SportyGroup from '../../assets/Images/SportyGroup.png';
import './Navbar.scss';

const SORT_OPTIONS = [
  { value: '', label: 'No Sorting' },
  { value: 'name', label: 'Sort by League' },
  { value: 'sport', label: 'Sort by Sport' },
];

function Navbar({
  searchTerm,
  onSearch,
  sportTypes,
  selectedSport,
  onSportChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className='navbar'>
      <div className='navbar-banner'>
        <img src={SportyGroup} alt='SportyGroup' />
        <h1>Your Best Betting Companion</h1>
      </div>
      <div className='navbar-inner'>
        <h2 className='navbar-inner-title'>Sporty Leagues</h2>
        <div className='navbar-inner-filters'>
          <SearchBar value={searchTerm} onChange={onSearch} />
          <div className='dropdowns'>
            <FilterDropdown
              options={sportTypes}
              value={selectedSport}
              onChange={onSportChange}
            />
            <SortDropdown
              options={SORT_OPTIONS}
              value={sortBy}
              onChange={onSortChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
