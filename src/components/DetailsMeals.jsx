import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { apiIdMeals } from '../services/apiIdItems';
import Loading from './Loading';
import { apiRecomendacaoDrinks } from '../services/apiRecomendacao';


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
    await apiIdMeals(idItem()).then((r) => setItemDetail(r.meals))
      .catch(() => <Loading />);
    await apiRecomendacaoDrinks()
      .then(
        (r) => setRecomendacao(r.drinks.filter((m, index) => index < recomendacaoMax)),
      );
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
        if (itemDetail[0][`strIngredient${index}`] !== '') {
          let str = `${itemDetail[0][`strIngredient${index}`]}`;
          if (itemDetail[0][`strMeasure${index}`] !== '') {
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
      {itemDetail.map((item) => (
        <div key={ item.idMeal }>
          <img src={ item.strMealThumb } alt="" data-testid="recipe-photo" />

          <h1 data-testid="recipe-title">{item.strMeal }</h1>
          <button data-testid="share-btn" type="button">
            <img src={ shareIcon } alt="share" />
          </button>
          <button data-testid="favorite-btn" type="button">
            <img src={ whiteHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">{item.strCategory}</p>
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
       && <a href={ item.strYoutube } data-testid="video">Video</a> }
          <h3>Receitas Recomendadas</h3>
          <div className="carousel slide relative">
            <div className="carousel-inner relative w-full overflow-hidden">
              {recomendacao.map((r, index) => (
                <div
                  key={ r.idDrinks }
                  data-testid={ `${index}-recomendation-card` }
                  className="carousel-item active relative float-left w-full"
                >
                  <img
                    src={ r.strDrinkThumb }
                    alt={ r.strDrink }

                  />
                  <p>{r.strAlcoholic}</p>
                  {console.log(index)}
                  <p data-testid={ `${index}-recomendation-title` }>{r.strDrink}</p>
                </div>
              ))}
            </div>
          </div>
          <footer>
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe"
            >
              Start Recipe

            </button>
          </footer>
        </div>
      ))}

    </div>
  );
}

export default DetailsMeals;
