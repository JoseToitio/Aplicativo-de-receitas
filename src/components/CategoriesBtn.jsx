import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function CategoriesBtn({ page }) {
  const { setCategoryFood, setCategoryDrink } = useContext(GlobalContext);
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

  const catFoods = () => (
    <div className="flex flex-wrap grid grid-cols-3 justify-evenly">
      {foodsCategories.map((catName, i) => (
        <button
          key={ i }
          type="button"
          value={ catName.replace(/ /g, '_') }
          className={ btnCSS }
          data-testid={ `${catName}-category-filter` }
          onClick={ () => {
            setCategoryFood(catName.replace(/ /g, '_'));
            setCategoryDrink('');
          } }
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
          onClick={ () => {
            setCategoryDrink(catName.replace(/ /g, '_'));
            setCategoryFood('');
          } }
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
