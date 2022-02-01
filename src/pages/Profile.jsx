import React from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();

  function getEmail() {
    const strgEmail = localStorage.getItem('user');
    const email = JSON.parse(strgEmail);
    if (email) return Object.values(email)[0];
  }
  const CSS = 'bg-gray-300 my-3 w-60 h-20 border border-black';
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
          { getEmail() }
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
