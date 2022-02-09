import React, { useContext } from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import Items from '../components/Items';
import GlobalContext from '../context/GlobalContext';
import ItemsCategory from '../components/ItemsCategory';

export default function MainDrinks() {
  const { categoryDrink } = useContext(GlobalContext);
  return (
    <main>
      <Header name="Drinks" showIcon />
      {categoryDrink === 'All'
        ? <Items page="Drinks" show />
        : <ItemsCategory page="Drinks" />}
      <BottomMenu />
    </main>
  );
}
