import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import InputSearch from './InputSearch';

export default function Header({ name, showIcon }) {
  const [showInput, setShowInput] = useState(false);
  const history = useHistory();

  function dropInput() {
    return (
      <InputSearch />
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
    <div>
      <div className="bg-gray-400 flex justify-around items-center h-14">
        <button
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/profile') }
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
      </div>
      <div>
        { showInput && dropInput() }
      </div>
    </div>
  );
}

Header.propTypes = {
  showIcon: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
