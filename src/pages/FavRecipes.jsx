import React from 'react';
import FavoriteRecipesItems from '../components/FavoriteRecipesItems';
import Header from '../components/Header';

export default function FavRecipes() {
  return (
    <div>
      <Header name="Favorite Recipes" showIcon={ false } />
      <FavoriteRecipesItems />
    </div>
  );
}
