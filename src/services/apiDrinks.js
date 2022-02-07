export const apiDrinkIngrediente = async (ingredient) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((r) => r.json());
  console.log('chamou apiDrinkIngrediente');
  return result;
};

export const apiDrinkName = async (name) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((r) => r.json());
  console.log('chamou apiDrinkName');
  return result;
};

export const apiDrinkFirstLetter = async (firstLatter) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLatter}`)
    .then((r) => r.json());
  console.log('chamou apiDrinkFirstLetter');
  return result;
};

export const allDrinks = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json());
  console.log('chamou allDrinks');
  return result;
};

export const drinksByCategory = async (category) => {
  if (category !== 'All') {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((r) => r.json());
    console.log('chamou drinksByCategory com', category);
    return result;
  }
  allDrinks();
};

export const drinkSurprise = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((r) => r.json());

  return result;
};
