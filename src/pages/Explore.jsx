import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function Explore() {
  return (
    <main>
      <Header name="Explore" showIcon={ false } />
      <BottomMenu />
    </main>
  );
}
