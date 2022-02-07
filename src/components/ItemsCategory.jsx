import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import GlobalContext from '../context/GlobalContext';
import CategoriesBtn from './CategoriesBtn';
import RenderInput from './RenderInput';

export default function ItemsCategory({ page }) {
  const { valueCatFood, valueCatDrink, valueApiMeals, ValueApiDrinks,
  } = useContext(GlobalContext);
  const history = useHistory();

  const renderCategories = () => (
    <div className="flex grid grid-cols-2">
      {(page === 'Foods')
        ? (
          valueCatFood.map((food, index) => (
            <button
              type="button"
              key={ food.idMeal }
              data-testid={ `${index}-recipe-card` }
              className="h-54 flex grid
                w-48 m-3 rounded overflow-hidden shadow-lg"
              onClick={ () => history.push(`/foods/${food.idMeal}`) }
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
            </button>
          ))) : (
          valueCatDrink.map((drink, index) => (
            <button
              type="button"
              key={ drink.idDrink }
              data-testid={ `${index}-recipe-card` }
              className="h-54 flex grid
                w-48 m-3 rounded overflow-hidden shadow-lg"
              onClick={ () => history.push(`/drinks/${drink.idDrink}`) }
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
            </button>
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
