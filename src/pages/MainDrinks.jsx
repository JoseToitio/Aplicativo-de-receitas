import React from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import Items from '../components/Items';

export default function MainDrinks() {
  return (
    <main>
      <Header name="Drinks" showIcon />
      <Items page="Drinks" />
      <BottomMenu />
    </main>
  );
}
