import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

function Items({ page }) {
  const { valueApiMeals,
    ValueApiDrinks } = useContext(GlobalContext);
  const history = useHistory();
  const max = 12;

  const filterMaxDrinks = ValueApiDrinks.filter((d, index) => index < max);
  const filterMaxMeals = valueApiMeals.filter((d, index) => index < max);

  const renderFood = () => (
    <div>
      { valueApiMeals.length === 1
        ? history.push(`/foods/${valueApiMeals[0].idMeal}`)
        : filterMaxMeals.map((m, index) => (
          <div key={ m.idMeal } data-testid={ `${index}-recipe-card` }>
            <img
              src={ m.strMealThumb }
              alt={ m.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{m.strMeal}</p>
          </div>
        )) }
    </div>
  );

  const renderDrink = () => (
    <div>
      {ValueApiDrinks.length === 1
        ? history.push(`/drinks/${ValueApiDrinks[0].idDrink}`)
        : filterMaxDrinks.map((d, index) => (
          <div key={ d.idDrink } data-testid={ `${index}-recipe-card` }>
            <img
              src={ d.strDrinkThumb }
              alt={ d.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{d.strDrink}</p>
          </div>
        ))}
    </div>
  );
  return (
    <div>
      {page === 'Foods' ? renderFood() : renderDrink()}
    </div>
  );
}
Items.propTypes = {
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Items;
