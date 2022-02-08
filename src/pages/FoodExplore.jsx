import React from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { foodSurprise } from '../services/apiFood';

export default function FoodExplore() {
  const history = useHistory();
  const CSS = 'bg-gray-400 my-4 w-60 h-20';

  const handleClick = async () => {
    await foodSurprise()
      .then((r) => history.push(`/foods/${r.meals[0].idMeal}`)).catch(() => <Loading />);
  };

  return (
    <main>
      <Header name="Explore Foods" showIcon={ false } />
      <div
        className="flex-col grid justify-items-center"
        data-testid="profile-email"
      >
        <button
          className={ CSS }
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          className={ CSS }
          data-testid="explore-by-nationality"
          type="button"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
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
