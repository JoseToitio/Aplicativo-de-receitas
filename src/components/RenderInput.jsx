import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalContext from '../context/GlobalContext';

export default function RenderInput({ page }) {
  const history = useHistory();
  const { valueApiMeals, ValueApiDrinks } = useContext(GlobalContext);
  const [filterMaxDrinks, setFilterMaxDrinks] = useState([]);
  const [filterMaxMeals, setFilterMaxMeals] = useState([]);
  const max = 12;

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

  useEffect(() => {
    setFilterMaxDrinks(ValueApiDrinks.filter((d, index) => index < max));
    setFilterMaxMeals(valueApiMeals.filter((d, index) => index < max));
  }, [ValueApiDrinks, valueApiMeals]);

  return <div>{page === 'Foods' ? renderFood() : renderDrink()}</div>;
}

RenderInput.propTypes = {
  page: PropTypes.string.isRequired,
};
