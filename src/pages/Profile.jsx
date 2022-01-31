import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

export default function Profile() {
  return (
    <main>
      <Header name="Profile" showIcon={ false } />
      <BottomMenu />
    </main>
  );
}
