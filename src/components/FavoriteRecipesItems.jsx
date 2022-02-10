/* eslint-disable sonarjs/no-identical-expressions */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function FavoriteRecipesItems() {
  const [recipes, setRecipes] = useState([]);
  const [buttonCopie, setButtonCopie] = useState('');
  const history = useHistory();
  useEffect(() => {
    const favoriteRecipes = () => {
      const getItems = localStorage.getItem('favoriteRecipes');
      const arrayItems = JSON.parse(getItems);
      setRecipes(arrayItems);
    };
    favoriteRecipes();
  }, []);

  const favoriteClick = (id) => {
    const storageFavorite = localStorage.getItem('favoriteRecipes');
    const favoritesArray = JSON.parse(storageFavorite);
    if (favoritesArray) {
      const filter = favoritesArray.filter((item) => {
        console.log(id);
        return item.id !== id;
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(filter));
    }
    window.location.reload();
  };

  const handleClickItem = (type, id) => {
    history.push(`/${type}s/${id}`);
  };
  return (
    <div>
      <div
        className="flex flex-wrap grid grid-cols-3 justify-evenly"
      >
        <button
          type="button"
          className="bg-gray-400 m-2 h-8 hover:bg-gray-500
          text-black font-bold rounded text-xs"
          data-testid="filter-by-all-btn"

        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          className="bg-gray-400 m-2 h-8 hover:bg-gray-500
          text-black font-bold rounded text-xs"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          className="bg-gray-400 m-2 h-8 hover:bg-gray-500
          text-black font-bold rounded text-xs"
        >
          Drink
        </button>
      </div>
      {recipes && recipes.map((recipe, index) => (
        <div
          key={ recipe.id }
          className="flex flex-wrap"
        >
          <span
            data-testid={ `${index}-horizontal-top-text` }
            className=""
          >
            {recipe.nationality}
            {' '}
            -
            {' '}
            {recipe.category}
          </span>
          <div>
            <div>
              <button
                type="button"
                onClick={ () => handleClickItem(recipe.type, recipe.id) }
                className="h-54 flex grid
                  w-48 m-3 rounded overflow-hidden shadow-lg"
              >
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  className="w-full h-40 flex"
                  data-testid={ `${index}-horizontal-image` }
                />
              </button>
              <button
                type="button"
                onClick={ () => handleClickItem(recipe.type, recipe.id) }
                className="h-54 flex grid
                  w-48 m-3 rounded overflow-hidden shadow-lg"
              >
                <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
              </button>
              <span>
                {recipe.alcoholicOrNot}
              </span>
            </div>

          </div>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => {
              const maxMensage = 2000;
              clipboardCopy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
              setButtonCopie('Link copied!');
              setTimeout(() => {
                setButtonCopie('');
              }, maxMensage);
            } }
          >
            <img
              src={ shareIcon }
              alt=""
            />
            {buttonCopie}
          </button>
          <button
            type="button"
            onClick={ () => favoriteClick(recipe.id) }
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            <img src={ blackHeartIcon } alt="coração" />
          </button>
        </div>
      ))}
      <div />
    </div>
  );
}

export default FavoriteRecipesItems;
