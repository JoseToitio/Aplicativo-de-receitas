import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  return (
    <div className="bg-gray-300 flex justify-around items-center h-14">
      <object
        type="image/svg+xml"
        data={ profileIcon }
        data-testid="profile-top-btn"
      >
        prof
      </object>
      <span
        data-testid="page-title"
        className="font-mono text-2xl font-bold"
      >
        FOODS
      </span>
      <object
        type="image/svg+xml"
        data={ searchIcon }
        data-testid="search-top-btn"
      >
        search
      </object>
    </div>
  );
}
