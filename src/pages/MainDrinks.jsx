import React from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';

export default function MainDrinks() {
  return (
    <main>
      <Header name="Drinks" showIcon />
      <BottomMenu />
    </main>
  );
}
