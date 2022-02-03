export const apiIngrediente = async (ingredient) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((r) => r.json());

  return result;
};
export const apiName = async (name) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((r) => r.json());

  return result;
};

export const apiFirstLetter = async (firstLetter) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((r) => r.json());

  return result;
};

export const allFoods = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json());

  return result;
};
