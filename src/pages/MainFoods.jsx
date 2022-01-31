import React from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';

export default function MainFoods() {
  return (
    <main>
      <Header name="Foods" showIcon />
      <BottomMenu />
    </main>
  );
}
