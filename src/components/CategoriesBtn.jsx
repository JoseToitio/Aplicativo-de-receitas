import PropTypes from 'prop-types';
import React from 'react';

export default function CategoriesBtn({ page }) {
  const btnCSS = `bg-gray-400 m-2 h-8 hover:bg-gray-500
    text-black font-bold rounded`;

  const catFoods = () => (
    <div className="flex flex-wrap grid grid-cols-3 justify-evenly">
      <button
        type="button"
        className={ btnCSS }
      >
        All
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Beef-category-filter"
      >
        Beef
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Chicken-category-filter"
      >
        Chicken
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Breakfast-category-filter"
      >
        Breakfast
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Dessert-category-filter"
      >
        Dessert
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Goat-category-filter"
      >
        Goat
      </button>
    </div>
  );

  const catDrinks = () => (
    <div className="flex flex-wrap grid grid-cols-3 justify-evenly">
      <button
        type="button"
        className={ btnCSS }
      >
        All
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Ordinary Drink-category-filter"
      >
        Ordinary Drink
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Cocktail-category-filter"
      >
        Cocktail
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Milk / Float / Shake-category-filter"
      >
        Milk/Float/Shake
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Other/Unknown-category-filter"
      >
        Other/Unknown
      </button>
      <button
        type="button"
        className={ btnCSS }
        data-testid="Cocoa-category-filter"
      >
        Cocoa
      </button>
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
