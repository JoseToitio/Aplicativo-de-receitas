import React, { useContext, useEffect } from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import { listDrinkIngredient } from '../services/apiDrinks';

export default function DrinkIngredients() {
  const { drinkIngredients, setDrinkIngredients,
    setIngredients } = useContext(GlobalContext);

  useEffect(() => {
    listDrinkIngredient().then((r) => setDrinkIngredients(r.drinks))
      .then(() => setIngredients([]));
  }, []);

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
              // onClick={ () => history.push(`/drinks/${drink.idMeal}`) }
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
