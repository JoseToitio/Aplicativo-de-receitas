import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

export default function GlobalProvider({ children }) {
  const [radioSelect, setRadioSelect] = useState();
  const [valueApiMeals, setValueApiMeals] = useState([]);
  const [ValueApiDrinks, setValueApiDrinks] = useState([]);
  const [renderFoods, setRenderFoods] = useState([]);
  const [renderDrinks, setRenderDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryFood, setCategoryFood] = useState('');
  const [categoryDrink, setCategoryDrink] = useState('');

  return (
    <GlobalContext.Provider
      value={ {
        radioSelect,
        setRadioSelect,
        valueApiMeals,
        setValueApiMeals,
        ValueApiDrinks,
        setValueApiDrinks,
        renderFoods,
        setRenderFoods,
        renderDrinks,
        setRenderDrinks,
        loading,
        setLoading,
        categoryFood,
        setCategoryFood,
        categoryDrink,
        setCategoryDrink,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
