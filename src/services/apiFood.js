export const apiIngrediente = async (ingredient) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((r) => r.json());
  console.log('chamou apiIngrediente');
  return result;
};
export const apiName = async (name) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((r) => r.json());
  console.log('chamou apiName');
  return result;
};

export const apiFirstLetter = async (firstLetter) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((r) => r.json());
  console.log('chamou apiFirstLetter');
  return result;
};

export const allFoods = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((r) => r.json());
  console.log('chamou allFoods');
  return result;
};

export const foodsByCategory = async (category) => {
  if (category !== 'All') {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((r) => r.json());
    console.log('chamou foodsByCategory com', category);
    return result;
  }
  allFoods();
};

export const foodSurprise = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((r) => r.json());

  return result;
};

export const listIngredient = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((r) => r.json());

  return result;
};
