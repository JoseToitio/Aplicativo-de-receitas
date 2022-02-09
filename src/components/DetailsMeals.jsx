import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { apiIdMeals } from '../services/apiIdItems';
import Loading from './Loading';
import { apiRecomendacaoDrinks } from '../services/apiRecomendacao';

function DetailsMeals() {
  const { pathname } = useLocation();
  const [itemDetail, setItemDetail] = useState([]);
  const [recomendacao, setRecomendacao] = useState([]);
  const [startRecipe, setStartRecipe] = useState('');
  const [buttonCopie, setButtonCopie] = useState('');
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();
  const recomendacaoMax = 6;
  const maxMensage = 2000;
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getLocalStorage = localStorage.getItem('inProgressRecipes');
    if (!JSON.parse(getLocalStorage)) {
      setStartRecipe('Start Recipe');
    } else if (!JSON.parse(getLocalStorage).meals) {
      setStartRecipe('Start Recipe');
    } else if (JSON.parse(getLocalStorage).meals[idItem()]) {
      setStartRecipe('Continue Recipe');
    }
  });

  useEffect(() => {
    const getFavoriteRecipes = localStorage.getItem('favoriteRecipes');
    const arrayFavoriteRecipes = JSON.parse(getFavoriteRecipes);
    if (arrayFavoriteRecipes) {
      arrayFavoriteRecipes.find((item) => item.id === idItem() && setFavorite(true));
    }
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

  const handleClick = () => {
    const ingredients = ingredientsAndMeasures.map((ingredient) => (
      ingredient === ' - ' ? null : ingredient
    ));
    const storageArray = localStorage.getItem('inProgressRecipes');
    const a = JSON.parse(storageArray);
    if (!a) {
      localStorage
        .setItem('inProgressRecipes',
          JSON.stringify({
            meals:
          {
            [idItem()]: ingredients,
          } }));
    } else if (!a.meals) {
      localStorage
        .setItem('inProgressRecipes',
          JSON.stringify({
            ...a,
            meals:
            {
              [idItem()]: ingredients,
            } }));
    } else {
      localStorage
        .setItem('inProgressRecipes',
          JSON.stringify({
            ...a,
            meals:
            {
              ...a.meals,
              [idItem()]: ingredients,
            } }));
    }
    history.push(`/foods/${idItem()}/in-progress`);
  };
  const favoriteClick = () => {
    const storageFavorite = localStorage.getItem('favoriteRecipes');
    const favoritesArray = JSON.parse(storageFavorite);
    if (favorite) {
      const removeItem = favoritesArray.filter((item) => item.id !== idItem());
      localStorage.setItem('favoriteRecipes', JSON.stringify(removeItem));
      setFavorite(false);
    } else {
      itemDetail.map((item) => {
        if (!favoritesArray) {
          return localStorage.setItem('favoriteRecipes', JSON.stringify([
            {
              id: item.idMeal,
              type: 'food',
              nationality: item.strArea,
              category: item.strCategory,
              alcoholicOrNot: '',
              name: item.strMeal,
              image: item.strMealThumb,
            }]));
        }
        return localStorage.setItem('favoriteRecipes', JSON.stringify([
          ...favoritesArray,
          {
            id: item.idMeal,
            type: 'food',
            nationality: item.strArea,
            category: item.strCategory,
            alcoholicOrNot: '',
            name: item.strMeal,
            image: item.strMealThumb,
          }]));
      });
      setFavorite(true);
    }
  };

  return (
    <div>
      {itemDetail.map((item) => (
        <div key={ item.idMeal }>
          <img src={ item.strMealThumb } alt="" data-testid="recipe-photo" />

          <h1 data-testid="recipe-title">{item.strMeal }</h1>
          <button
            data-testid="share-btn"
            className="button-copie"
            type="button"
            onClick={ () => {
              clipboardCopy(`http://localhost:3000/foods/${idItem()}`);
              setButtonCopie('Link copied!');
              setTimeout(() => {
                setButtonCopie('');
              }, maxMensage);
            } }
          >
            <img src={ shareIcon } alt="share" />
            {buttonCopie}
          </button>
          <button
            data-testid="favorite-btn"
            type="button"
            src={ !favorite ? whiteHeartIcon : blackHeartIcon }
            onClick={ favoriteClick }
          >
            <img src={ !favorite ? whiteHeartIcon : blackHeartIcon } alt="share" />
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
              onClick={ handleClick }
            >
              {startRecipe}

            </button>
          </footer>
        </div>
      ))}

    </div>
  );
}

export default DetailsMeals;
