import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import { apiIngrediente, listIngredient } from '../services/apiFood';

export default function FoodIngredients() {
  const history = useHistory();
  const { ingredients, setIngredients, setValueApiMeals } = useContext(GlobalContext);

  useEffect(() => {
    listIngredient().then((r) => setIngredients(r.meals));
  }, []);

  const max = 12;

  const handleClick = async (ingredient) => {
    console.log(ingredient);
    await apiIngrediente(ingredient).then((r) => setValueApiMeals(r.meals))
      .then(() => history.push('/foods'))
      .catch(() => global.alert(errorMessage));
  };

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
              onClick={ () => handleClick(food.strIngredient) }
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
