import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function DrinkIngredients() {
  return (
    <main>
      <Header name="Explore Ingredients" showIcon={ false } />
      <BottomMenu />
    </main>
  );
}
