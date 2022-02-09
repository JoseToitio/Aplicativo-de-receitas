import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import { apiDrinkIngrediente, listDrinkIngredient } from '../services/apiDrinks';

export default function DrinkIngredients() {
  const history = useHistory();
  const { drinkIngredients, setDrinkIngredients,
    setIngredients, setValueApiDrinks } = useContext(GlobalContext);

  useEffect(() => {
    listDrinkIngredient().then((r) => setDrinkIngredients(r.drinks))
      .then(() => setIngredients([]));
  }, []);

  const handleClick = async (ingredient) => {
    console.log(ingredient);
    await apiDrinkIngrediente(ingredient).then((r) => setValueApiDrinks(r.drinks))
      .then(() => history.push('/drinks'))
      .catch(() => global.alert(errorMessage));
  };

  const max = 12;

  return (
    <main>
      <Header name="Explore Ingredients" showIcon={ false } />
      <div className="flex grid grid-cols-2">
        { drinkIngredients.length > 0 && drinkIngredients
          .filter((d, index) => index < max)
          .map((drink, i) => (
            <button
              type="button"
              key={ i }
              data-testid={ `${i}-ingredient-card` }
              className="h-54 flex grid
              w-48 m-3 rounded overflow-hidden shadow-lg"
              onClick={ () => handleClick(drink.strIngredient1) }
            >
              <img
                className="w-full h-40 flex"
                src={ `https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png` }
                alt={ drink.strIngredient1 }
                data-testid={ `${i}-card-img` }
              />
              <p
                className="flex"
                data-testid={ `${i}-card-name` }
              >
                {drink.strIngredient1}
              </p>
            </button>
          ))}
      </div>
      <BottomMenu />
    </main>
  );
}
