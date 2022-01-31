import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function InputSearch() {
  const { radioSelect, setRadioSelect } = useContext(GlobalContext);

  return (
    <div className="flex-col border border-black bg-gray-200 h-30">
      <input
        className="w-4/5 mx-5 mt-1 border-solid"
        data-testid="search-input"
        type="text"
        placeholder="Pesquise aqui"
      />
      <div className="flex justify-around">
        <label htmlFor="Ingredients">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            value="Ingredients"
            id="Ingredients"
            name="selected"
            onClick={ () => {
              setRadioSelect('ingredients');
              console.log(radioSelect);
            } }
          />
          Ingredients
        </label>
        <label htmlFor="Name">
          <input
            type="radio"
            data-testid="name-search-radio"
            value="Name"
            id="Name"
            name="selected"
            onClick={ () => {
              setRadioSelect('name');
              console.log(radioSelect);
            } }
          />
          Name
        </label>
        <label htmlFor="FirstLetter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            value="FirstLetter"
            id="FirstLetter"
            name="selected"
            onClick={ () => {
              setRadioSelect('firstLetter');
              console.log(radioSelect);
            } }
          />
          First Letter
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        className="px-2 py-1  transition ease-in duration-200 uppercase rounded-full
          hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
        type="button"
      >
        Search
      </button>
    </div>
  );
}
