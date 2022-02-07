import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function BottomMenu() {
  // Fonte de pesquisa para usar useHsitory -> https://v5.reactrouter.com/web/api/Hooks
  const history = useHistory();
  const { setValueApiDrinks, setValueApiMeals,
    setCategoryFood, setCategoryDrink } = useContext(GlobalContext);
  return (
    <footer
      data-testid="footer"
      className="flex justify-evenly bg-gray-400 h-14"
    >
      <button
        type="button"
        onClick={ () => {
          history.push('/drinks');
          setValueApiDrinks([]);
          setValueApiMeals([]);
          setCategoryFood('All');
          setCategoryDrink('All');
        } }
      >
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drinks-button" />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/explore') }
      >
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explore-button" />
      </button>
      <button
        type="button"
        onClick={ () => {
          history.push('/foods');
          setValueApiDrinks([]);
          setValueApiMeals([]);
          setCategoryFood('All');
          setCategoryDrink('All');
        } }
      >
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="food-button" />
      </button>
    </footer>
  );
}

export default BottomMenu;
