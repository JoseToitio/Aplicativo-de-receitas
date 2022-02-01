import React from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function Explore() {
  const history = useHistory();
  const CSS = 'bg-gray-400 my-4 w-60 h-20';
  return (
    <main>
      <Header name="Explore" showIcon={ false } />
      <div
        className="flex-col grid justify-items-center"
        data-testid="profile-email"
      >
        <button
          className={ CSS }
          data-testid="explore-foods"
          type="button"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          className={ CSS }
          data-testid="explore-drinks"
          type="button"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <BottomMenu />
    </main>
  );
}
