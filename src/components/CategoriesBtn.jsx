import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import GlobalContext from '../context/GlobalContext';
import { foodsByCategory } from '../services/apiFood';
import { drinksByCategory } from '../services/apiDrinks';

export default function CategoriesBtn({ page }) {
  const { setCategoryFood, setCategoryDrink, setValueCatFood, setValueCatDrink,
    categoryFood, categoryDrink } = useContext(GlobalContext);
  const history = useHistory();
  const btnCSS = `bg-gray-400 m-2 h-8 hover:bg-gray-500
    text-black font-bold rounded text-xs`;
  const foodsCategories = ['All', 'Beef', 'Chicken', 'Breakfast', 'Dessert', 'Goat'];
  const drinksCategories = [
    'All',
    'Ordinary Drink',
    'Cocktail',
    'Milk / Float / Shake',
    'Other/Unknown',
    'Cocoa',
  ];
  const max = 12;

  useEffect(() => {
    foodsByCategory(categoryFood)
      .then((r) => {
        setValueCatFood(r.meals.filter((d, index) => index < max));
        setValueCatDrink([]);
      }).catch((e) => console.log(e));
    drinksByCategory(categoryDrink)
      .then((r) => {
        setValueCatDrink(r.drinks.filter((d, index) => index < max));
        setValueCatFood([]);
      }).catch((e) => console.log(e));
  }, [categoryDrink, categoryFood]);

  const handleClick = (categoryName) => {
    if (history.location.pathname === '/foods') {
      if (categoryName === categoryFood) {
        setCategoryFood('All');
      } else {
        setCategoryFood(categoryName);
        setCategoryDrink('All');
      }
    }
    if (history.location.pathname === '/drinks') {
      if (categoryName === categoryDrink) {
        setCategoryDrink('All');
      } else {
        setCategoryDrink(categoryName);
        setCategoryFood('All');
      }
    }
  };

  const catFoods = () => (
    <div className="flex flex-wrap grid grid-cols-3 justify-evenly">
      {foodsCategories.map((catName, i) => (
        <button
          key={ i }
          type="button"
          className={ btnCSS }
          data-testid={ `${catName}-category-filter` }
          onClick={ () => handleClick(catName) }
        >
          { catName }
        </button>
      ))}
    </div>
  );

  const catDrinks = () => (
    <div className="flex flex-wrap grid grid-cols-3 justify-evenly">
      {drinksCategories.map((catName, index) => (
        <button
          key={ index }
          type="button"
          className={ btnCSS }
          data-testid={ `${catName}-category-filter` }
          onClick={ () => handleClick(catName) }
        >
          { catName }
        </button>
      ))}
    </div>
  );

  return (
    <div>
      {page === 'Foods' ? catFoods() : catDrinks()}
    </div>
  );
}

CategoriesBtn.propTypes = {
  page: PropTypes.string.isRequired,
};

// .replace(<strong>/ /g</strong>, "_")
