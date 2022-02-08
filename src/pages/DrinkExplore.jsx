import React from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { drinkSurprise } from '../services/apiDrinks';

export default function DrinkExplore() {
  const history = useHistory();
  const CSS = 'bg-gray-400 my-4 w-60 h-20';

  const handleClick = async () => {
    await drinkSurprise()
      .then((r) => history.push(`/drinks/${r.drinks[0].idDrink}`))
      .catch(() => <Loading />);
  };

  return (
    <main>
      <Header name="Explore Drinks" showIcon={ false } />
      <div
        className="flex-col grid justify-items-center"
        data-testid="profile-email"
      >
        <button
          className={ CSS }
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          className={ CSS }
          data-testid="explore-surprise"
          type="button"
          onClick={ () => handleClick() }
        >
          Surprise me!
        </button>
      </div>
      <BottomMenu />
    </main>

  );
}
