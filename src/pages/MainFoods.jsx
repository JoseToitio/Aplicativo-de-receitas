import React from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import Items from '../components/Items';

export default function MainFoods() {
  return (
    <main>
      <Header name="Foods" showIcon history={ history } />
      <Items />
      <BottomMenu />
    </main>
  );
}
