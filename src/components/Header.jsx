import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ name }) {
  return (
    <div className="bg-gray-300 flex justify-around items-center h-14">
      <button type="button" data-testid="profile-top-btn">
        <img src={ profileIcon } alt="prof" />
      </button>
      <span
        data-testid="page-title"
        className="font-mono text-2xl font-bold"
      >
        {name}
      </span>
      <button type="button" data-testid="search-top-btn">
        <img src={ searchIcon } alt="search" />
      </button>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
