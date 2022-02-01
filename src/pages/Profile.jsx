import React from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();
  const CSS = 'bg-gray-300 my-3 w-60 h-20 border border-black';
  const email = localStorage.getItem('user')
    .replace('{"email":"', '')
    .replace('"}', '');
  return (
    <main>
      <Header name="Profile" showIcon={ false } />
      <div
        className="flex-col grid justify-items-center"
        data-testid="profile-email"
      >
        <span
          className="flex mt-3 bg-black text-white p-6 h-8 uppercase items-center"
        >
          { email }
        </span>
        <button
          className={ CSS }
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          className={ CSS }
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          className={ CSS }
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
        >
          Logout
        </button>
      </div>
      <BottomMenu />
    </main>
  );
}
