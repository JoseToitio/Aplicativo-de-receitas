import React, { useContext, useEffect } from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import { listIngredient } from '../services/apiFood';

export default function FoodIngredients() {
  const { ingredients, setIngredients } = useContext(GlobalContext);

  useEffect(() => {
    listIngredient().then((r) => setIngredients(r.meals));
  }, []);

  const max = 12;

  return (
    <main>
      <Header name="Explore Ingredients" showIcon={ false } />
      <div className="flex grid grid-cols-2">
        { ingredients.length > 0 && ingredients.filter((d, index) => index < max)
          .map((food, i) => (
            <button
              type="button"
              key={ i }
              data-testid={ `${i}-ingredient-card` }
              className="h-54 flex grid
              w-48 m-3 rounded overflow-hidden shadow-lg"
              // onClick={ () => history.push(`/foods/${food.idMeal}`) }
            >
              <img
                className="w-full h-40 flex"
                src={ `https://www.themealdb.com/images/ingredients/${food.strIngredient}-Small.png` }
                alt={ food.strIngredient }
                data-testid={ `${i}-card-img` }
              />
              <p
                className="flex"
                data-testid={ `${i}-card-name` }
              >
                {food.strIngredient}
              </p>
            </button>
          ))}
      </div>
      <BottomMenu />
    </main>
  );
}
