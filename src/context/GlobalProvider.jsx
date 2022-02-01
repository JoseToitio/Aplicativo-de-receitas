import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

export default function GlobalProvider({ children }) {
  const [radioSelect, setRadioSelect] = useState();
  const [valueApiMeals, setValueApiMeals] = useState([]);
  const [ValueApiDrinks, setValueApiDrinks] = useState([]);
  return (
    <GlobalContext.Provider
      value={ {
        radioSelect,
        setRadioSelect,
        valueApiMeals,
        setValueApiMeals,
        ValueApiDrinks,
        setValueApiDrinks,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
