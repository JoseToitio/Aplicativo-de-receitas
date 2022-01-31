import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

export default function GlobalProvider({ children }) {
  const [radioSelect, setRadioSelect] = useState();
  const [valueApi, setValueApi] = useState('');
  return (
    <GlobalContext.Provider
      value={ {
        radioSelect,
        setRadioSelect,
        valueApi,
        setValueApi,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
