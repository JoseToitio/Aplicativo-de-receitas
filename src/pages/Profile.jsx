import React from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();
  const getEmail1 = localStorage.getItem('user');
  const getEmail2 = getEmail1.replace('{"email":"', '');
  const email = getEmail2.replace('"}', '');
  console.log(email);
  return (
    <main>
      <Header name="Profile" showIcon={ false } />
      <div
        className="flex-col grid justify-center h-screen w-screen items-around"
        data-testid="profile-email"
      >
        <span className="flex">{ email }</span>
        <button
          className="flex"
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          className="flex"
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          className="flex"
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
