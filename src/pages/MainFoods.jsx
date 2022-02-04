import React, { useContext } from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import Items from '../components/Items';
import GlobalContext from '../context/GlobalContext';
import ItemsCategory from '../components/ItemsCategory';

export default function MainFoods() {
  const { categoryFood } = useContext(GlobalContext);
  return (
    <main>
      <Header name="Foods" showIcon />
      {categoryFood === 'All'
        ? <Items page="Foods" />
        : <ItemsCategory page="Foods" />}
      <BottomMenu />
    </main>
  );
}
