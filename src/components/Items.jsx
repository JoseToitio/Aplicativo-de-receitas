import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import CategoriesBtn from './CategoriesBtn';
import { allFoods } from '../services/apiFood';
import { allDrinks } from '../services/apiDrinks';

function Items({ page }) {
  const [loading, setLoading] = useState(false);
  const { valueApiMeals, renderFoods, renderDrinks,
    setRenderFoods, setRenderDrinks, ValueApiDrinks } = useContext(GlobalContext);
  const history = useHistory();
  const max = 12;
  const [filterMaxDrinks, setFilterMaxDrinks] = useState([]);
  const [filterMaxMeals, setFilterMaxMeals] = useState([]);

  const getFoods = async () => {
    await allFoods().then((f) => setRenderFoods(f.meals));
  };

  const getDrinks = async () => {
    await allDrinks().then((d) => setRenderDrinks(d.drinks));
  };

  const renderAll = () => {
    if (!loading) {
      getDrinks();
      getFoods();
      setLoading(true);
    } else {
      return (
        <div>
          { (page === 'Foods')
            ? (
              renderFoods.map((food, index) => (
                <div key={ index } data-testid={ `${index}-recipe-card` }>
                  <img
                    src={ food.strMealThumb }
                    alt={ food.strMeal }
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
                </div>
              ))) : (
              renderDrinks.map((drink, index) => (
                <div key={ index } data-testid={ `${index}-recipe-card` }>
                  <img
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
                </div>
              )))}
        </div>
      );
    }
  };


  useEffect(() => {
    setFilterMaxDrinks(ValueApiDrinks.filter((d, index) => index < max));
    setFilterMaxMeals(valueApiMeals.filter((d, index) => index < max));
  }, [ValueApiDrinks, valueApiMeals]);

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
      <CategoriesBtn page={ page } />
      { (valueApiMeals.length === 0 && ValueApiDrinks.length === 0)
        ? renderAll()
        : <div>{page === 'Foods' ? renderFood() : renderDrink()}</div>}
    </div>
  );
}
Items.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Items;
