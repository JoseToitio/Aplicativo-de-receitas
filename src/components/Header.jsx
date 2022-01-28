import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ name, showIcon }) {
  const [showInput, setShowInput] = useState(false);

  function dropInput() {
    return (
      <input
        data-testid="search-input"
        type="text"
        placeholder="Pesquise aqui"
      />
    );
  }

  function showSearch() {
    return (
      <button
        src={ searchIcon }
        type="button"
        data-testid="search-top-btn"
        onClick={ () => {
          setShowInput(!showInput);
        } }
      >
        <img src={ searchIcon } alt="search" />
      </button>
    );
  }

  return (
    <div className="bg-gray-300 flex justify-around items-center h-14">
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ () => console.log('clicou') }
      >
        <img src={ profileIcon } alt="prof" />
      </button>
      <span
        data-testid="page-title"
        className="font-mono text-2xl font-bold"
      >
        {name}
      </span>
      { showIcon && showSearch() }
      { showInput && dropInput() }
    </div>
  );
}

Header.propTypes = {
  showIcon: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
