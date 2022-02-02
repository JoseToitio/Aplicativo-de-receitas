export const apiIdMeals = (id) => {
  const result = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((r) => r.json());
  return result;
};

export const apiIdDrinks = (id) => {
  const result = fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((r) => r.json());

  return result;
};
