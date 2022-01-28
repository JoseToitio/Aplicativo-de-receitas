export const apiDrinkIngrediente = async (ingredient) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((r) => r.json());

  return result;
};

export const apiDrinkName = async (name) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((r) => r.json());

  return result;
};

export const apiDrinkFirstLetter = async (firstLatter) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLatter}`)
    .then((r) => r.json());

  return result;
};
