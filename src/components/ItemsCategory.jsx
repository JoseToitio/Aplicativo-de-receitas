import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import CategoriesBtn from './CategoriesBtn';
import RenderInput from './RenderInput';

export default function ItemsCategory({ page }) {
  const { valueCatFood, valueCatDrink, valueApiMeals, ValueApiDrinks,
  } = useContext(GlobalContext);

  const renderCategories = () => (
    <div className="flex grid grid-cols-2">
      {(page === 'Foods')
        ? (
          valueCatFood.map((food, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              className="h-54 flex grid
                w-48 m-3 rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-40 flex"
                src={ food.strMealThumb }
                alt={ food.strMeal }
                data-testid={ `${index}-card-img` }
              />
              <p
                className="flex"
                data-testid={ `${index}-card-name` }
              >
                {food.strMeal}
              </p>
            </div>
          ))) : (
          valueCatDrink.map((drink, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              className="h-54 flex grid
                w-48 m-3 rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-40 flex"
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                data-testid={ `${index}-card-img` }
              />
              <p
                className="flex"
                data-testid={ `${index}-card-name` }
              >
                {drink.strDrink}
              </p>
            </div>
          )))}
    </div>
  );

  return (
    <div>
      <CategoriesBtn page={ page } />
      { (valueApiMeals.length === 0 && ValueApiDrinks.length === 0)
        ? renderCategories()
        : <RenderInput page={ page } /> }
    </div>
  );
}

ItemsCategory.propTypes = {
  page: PropTypes.string.isRequired,
};
