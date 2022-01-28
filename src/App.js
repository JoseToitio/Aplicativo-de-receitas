import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MainFoods from './pages/MainFoods';
import MainDrinks from './pages/MainDrinks';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodProgress from './pages/FoodProgress';
import DrinkProgress from './pages/DrinkProgress';
import Explore from './pages/Explore';
import FoodExplore from './pages/FoodExplore';
import DrinkExplore from './pages/DrinkExplore';
import FoodIngredients from './pages/FoodIngredients';
import DrinkIngredients from './pages/DrinkIngredients';
import Nationalities from './pages/Nationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavRecipes from './pages/FavRecipes';

function App() {
  const Url = 552;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ MainFoods } />
        <Route exact path="/drinks" component={ MainDrinks } />
        <Route exact path={ `/foods/${Url}` } component={ FoodDetails } />
        <Route exact path={ `/drinks/${Url}` } component={ DrinkDetails } />
        <Route exact path={ `/foods/${Url}/in-progress` } component={ FoodProgress } />
        <Route exact path={ `/drinks/${Url}/in-progress` } component={ DrinkProgress } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ FoodExplore } />
        <Route exact path="/explore/drinks" component={ DrinkExplore } />
        <Route exact path="/explore/foods/ingredients" component={ FoodIngredients } />
        <Route exact path="/explore/drinks/ingredients" component={ DrinkIngredients } />
        <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
