import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function FoodExplore() {
  return (
    <main>
      <Header name="Explore Foods" showIcon={ false } />
      <BottomMenu />
    </main>
  );
}
