import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { apiIdDrinks } from '../services/apiIdItems';
import { apiRecomendacaoMeals } from '../services/apiRecomendacao';

function DetailsMeals() {
  const { pathname } = useLocation();
  const [itemDetail, setItemDetail] = useState([]);
  const [recomendacao, setRecomendacao] = useState([]);
  const recomendacaoMax = 6;
  const idItem = () => {
    const numsStr = pathname.replace(/[^0-9]/g, '');
    return numsStr;
  };

  const requestApi = async () => {
    await apiIdDrinks(idItem()).then((r) => setItemDetail(r.drinks));
    await apiRecomendacaoMeals()
      .then((r) => setRecomendacao(r.meals
        .filter((m, index) => index < recomendacaoMax)));
  };
  useEffect(() => {
    requestApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const arrayIngredients = () => {
    if (itemDetail.length > 0) {
      const max = 15;
      const array = itemDetail[0];
      const arrayIngredientsAndMeasures = [];
      for (let index = 1; index <= max; index += 1) {
        if (itemDetail[0][`strIngredient${index}`] !== null) {
          let str = `${itemDetail[0][`strIngredient${index}`]}`;
          if (itemDetail[0][`strMeasure${index}`] !== null) {
            str = `${array[`strIngredient${index}`]} - ${array[`strMeasure${index}`]}`;
          }
          arrayIngredientsAndMeasures.push(str);
        }
      }
      return arrayIngredientsAndMeasures;
    }
  };

  const ingredientsAndMeasures = arrayIngredients();
  return (
    <div>
      {console.log(recomendacao)}
      {itemDetail.map((item, index) => (
        <div key={ item.idDrink }>
          <img src={ item.strDrinkThumb } alt="" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">{ item.strDrink}</h1>
          <button data-testid="share-btn" type="button">
            <img src={ shareIcon } alt="share" />
          </button>
          <button data-testid="favorite-btn" type="button">
            <img src={ whiteHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">{item.strAlcoholic}</p>
          <h3>Ingredients</h3>
          <ul>
            {ingredientsAndMeasures.map((ingredient, ind) => (
              <li
                data-testid={ `${ind}-ingredient-name-and-measure` }
                key={ `${ind}-ingredient-name-and-measure` }
              >
                {ingredient === ' - ' ? null : ingredient}
              </li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p data-testid="instructions">{item.strInstructions}</p>
          {pathname.includes('foods')
       && <a href="*" data-testid="video">Video</a> }
          <h3>Receitas Recomendadas</h3>
          <div data-testid={ `${index}-recomendation-card` } />
          <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
        </div>
      ))}

    </div>
  );
}

export default DetailsMeals;
