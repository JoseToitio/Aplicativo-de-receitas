import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

function Items({ page }) {
  const { valueApiMeals, ValueApiDrinks } = useContext(GlobalContext);
  const history = useHistory();
  const renderFood = () => (
    <div>
      {valueApiMeals.length === 1
        ? history.push(`/foods/${valueApiMeals[0].idMeal}`) : valueApiMeals.map((m) => (
          <div key={ m.idMeals }>
            <p>{m.strMeal}</p>
          </div>
        )) }
    </div>
  );

  const renderDrink = () => (
    <div>
      {ValueApiDrinks.length === 1
        ? history.push(`/drinks/${ValueApiDrinks[0].idDrink}`)
        : ValueApiDrinks.map((d) => (
          <div key={ d.idDrink }>
            <p>{d.strDrink}</p>
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
