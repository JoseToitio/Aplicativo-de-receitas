import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function BottomMenu() {
  // Fonte de pesquisa para usar useHsitory -> https://v5.reactrouter.com/web/api/Hooks
  const history = useHistory();
  return (
    <footer
      data-testid="footer"
      className="flex justify-around bg-gray-400 h-14"
    >
      <button
        type="button"
        onClick={ () => history.push('/drinks') }
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
        onClick={ () => history.push('/foods') }
      >
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="food-button" />
      </button>
    </footer>
  );
}

export default BottomMenu;
