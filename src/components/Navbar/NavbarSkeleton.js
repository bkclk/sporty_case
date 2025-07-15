import React from 'react';
import './Navbar.scss';

function NavbarSkeleton() {
  return (
    <div className='navbar navbar-skeleton'>
      <div className='navbar-inner'>
        <div
          className='skeleton skeleton-input'
          style={{ width: 180, height: 36, marginBottom: 8 }}
        />
        <div
          className='skeleton skeleton-input'
          style={{ width: 140, height: 36, marginBottom: 8 }}
        />
        <div
          className='skeleton skeleton-input'
          style={{ width: 160, height: 36, marginBottom: 8 }}
        />
      </div>
    </div>
  );
}

export default NavbarSkeleton;
