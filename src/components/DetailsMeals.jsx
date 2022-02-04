import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { apiIdMeals } from '../services/apiIdItems';

function DetailsMeals() {
  const { pathname } = useLocation();
  const [itemDetail, setItemDetail] = useState([]);

  const idItem = () => {
    const numsStr = pathname.replace(/[^0-9]/g, '');
    return numsStr;
  };

  const requestApi = async () => {
    await apiIdMeals(idItem()).then((r) => setItemDetail(r.meals));
  };
  useEffect(() => {
    requestApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {console.log(itemDetail)}
      {itemDetail.map((item, index) => (
        <div key={ item.idMeals }>
          <img src="" alt="" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">{item.strMeal }</h1>
          <button data-testid="share-btn" type="button">
            <img src={ shareIcon } alt="share" />
          </button>
          <button data-testid="favorite-btn" type="button">
            <img src={ whiteHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">Text category</p>
          <h3>Ingredients</h3>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            details Ingredients

          </p>
          <h3>Instructions</h3>
          <p data-testid="instructions">details Instructions</p>
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
