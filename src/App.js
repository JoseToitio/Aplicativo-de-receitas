import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MainFoods from './pages/MainFoods';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ MainFoods } />
        <Route exact path="/drinks" component={} />
        <Route exact path={`/foods/${id-da-receita}`} component={} />
        <Route exact path={`/drinks/${id-da-receita}`} component={} />
        <Route exact path={`/foods/${id-da-receita}/in-progress`} component={} />
        <Route exact path={`/drinks/${id-da-receita}/in-progress`} component={} />
        <Route exact path="/explore" component={} />
        <Route exact path="/explore/foods" component={} />
        <Route exact path="/explore/drinks" component={} />
        <Route exact path="/explore/foods/ingredients" component={} />
        <Route exact path="/explore/drinks/ingredients" component={} />
        <Route exact path="/explore/foods/nationalities" component={} />
        <Route exact path="/profile" component={} />
        <Route exact path="/done-recipes" component={} />
        <Route exact path="/favorite-recipes" component={} />
      </Switch>
    </div>
  );
}

export default App;
