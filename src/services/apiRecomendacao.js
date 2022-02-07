export const apiRecomendacaoMeals = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json());

  return result;
};

export const apiRecomendacaoDrinks = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json());
  return result;
};
