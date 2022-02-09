import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import Items from '../components/Items';
import GlobalContext from '../context/GlobalContext';
import { listAreas, apiArea } from '../services/apiFood';

export default function Nationalities() {
  const history = useHistory();
  const { areas, setAreas, nationalitySel,
    setNationalitySel, nationalityArr, setNationalityArr } = useContext(GlobalContext);

  const max = 12;

  useEffect(() => {
    listAreas().then((r) => setAreas(r.meals));
  }, []);

  useEffect(() => {
    if (nationalitySel !== 'All') {
      apiArea(nationalitySel).then((r) => setNationalityArr(r.meals));
    }
  });

  const handleChange = (e) => {
    setNationalitySel(e.target.value);
  };

  const nationalitiesFilter = () => (
    <div className="flex grid grid-cols-2">
      {nationalityArr.filter((d, index) => index < max).map((food, i) => (
        <button
          type="button"
          key={ food.idMeal }
          data-testid={ `${i}-recipe-card` }
          className="h-54 flex grid
          w-48 m-3 rounded overflow-hidden shadow-lg"
          onClick={ () => history.push(`/foods/${food.idMeal}`) }
        >
          <img
            className="w-full h-40 flex"
            src={ food.strMealThumb }
            alt={ food.strMeal }
            data-testid={ `${i}-card-img` }
          />
          <p
            className="flex"
            data-testid={ `${i}-card-name` }
          >
            {food.strMeal}
          </p>
        </button>
      ))}
    </div>
  );
  return (
    <main>
      <Header name="Explore Nationalities" showIcon />
      <div>
        <select
          name="nationalities"
          data-testid="explore-by-nationality-dropdown"
          onChange={ (e) => handleChange(e) }
        >
          <option
            data-testid="All-option"
            value="All"
          >
            All
          </option>
          { areas.length > 0 && areas.map((area, i) => (
            <option
              key={ i }
              value={ area.strArea }
              data-testid={ `${area.strArea}-option` }
            >
              {area.strArea}
            </option>
          ))}
        </select>
      </div>
      <div>
        { nationalitySel === 'All'
          ? <Items page="Foods" show={ false } />
          : nationalitiesFilter()}
      </div>
      <BottomMenu />
    </main>
  );
}
