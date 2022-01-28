const apiIngrediente = async (ingredient) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((r) => r.json());

  return result;
};

export default apiIngrediente();
