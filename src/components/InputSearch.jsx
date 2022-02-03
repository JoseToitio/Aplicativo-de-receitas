import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import { apiIngrediente, apiFirstLetter, apiName } from '../services/apiFood';
import { apiDrinkIngrediente,
  apiDrinkName, apiDrinkFirstLetter } from '../services/apiDrinks';

export default function InputSearch() {
  const history = useHistory();
  const { radioSelect,
    setRadioSelect, setValueApiMeals, setValueApiDrinks } = useContext(GlobalContext);
  const [inputText, setInputText] = useState();
  const errorMessage = 'Sorry, we haven\'t found any recipes for these filters.';

  const apiFilterFood = async (value) => {
    if (radioSelect === 'ingredients') {
      await apiIngrediente(value).then((r) => setValueApiMeals(r.meals))
        .catch(() => global.alert(errorMessage));
    }
    if (radioSelect === 'name') {
      await apiName(value).then((r) => {
        if (r.meals === null) {
          global.alert(errorMessage);
          setValueApiMeals([]);
        } else {
          setValueApiMeals(r.meals);
        }
      });
    }
    if (radioSelect === 'firstLetter') {
      if (value.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      await apiFirstLetter(value).then((r) => setValueApiMeals(r.meals))
        .catch(() => global.alert(errorMessage));
    }
  };

  const apiFilterDrinks = async (value) => {
    if (radioSelect === 'ingredients') {
      await apiDrinkIngrediente(value).then((r) => setValueApiDrinks(r.drinks))
        .catch(() => global.alert(errorMessage));
    }
    if (radioSelect === 'name') {
      await apiDrinkName(value).then((r) => {
        if (r.drinks === null) {
          global.alert(errorMessage);
          setValueApiDrinks([]);
        } else {
          setValueApiDrinks(r.drinks);
        }
      });
    }
    if (radioSelect === 'firstLetter') {
      if (value.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      await apiDrinkFirstLetter(value).then((r) => setValueApiDrinks(r.drinks))
        .catch(() => global.alert(errorMessage));
    }
  };

  const handleClick = async () => {
    if (history.location.pathname === '/foods') {
      await apiFilterFood(inputText);
    }
    if (history.location.pathname === '/drinks') {
      await apiFilterDrinks(inputText);
    }
  };
  return (
    <div className="flex-col border border-black bg-gray-200 h-30">
      <input
        className="w-4/5 mx-5 mt-1 border-solid"
        data-testid="search-input"
        type="text"
        placeholder="Pesquise aqui"
        value={ inputText }
        onChange={ ({ target }) => setInputText(target.value) }
      />
      <div className="flex justify-around">
        <label htmlFor="Ingredients">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            value="Ingredients"
            id="Ingredients"
            name="selected"
            onClick={ () => {
              setRadioSelect('ingredients');
            } }
          />
          Ingredients
        </label>
        <label htmlFor="Name">
          <input
            type="radio"
            data-testid="name-search-radio"
            value="Name"
            id="Name"
            name="selected"
            onClick={ () => {
              setRadioSelect('name');
            } }
          />
          Name
        </label>
        <label htmlFor="FirstLetter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            value="FirstLetter"
            id="FirstLetter"
            name="selected"
            onClick={ () => {
              setRadioSelect('firstLetter');
            } }
          />
          First Letter
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        className="px-2 py-1 transition ease-in duration-200 uppercase rounded-full
          hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
        type="button"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}
