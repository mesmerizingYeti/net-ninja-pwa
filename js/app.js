let recipes = JSON.parse(localStorage.getItem('recipes')) ?? [];

const addRecipe = recipe => {
  recipes.push(recipe);
  localStorage.setItem('recipes', JSON.stringify(recipes));
};

const updateRecipe = recipe => {
  const index = recipes.findIndex(element => element._id === recipe._id);
  recipes[index] = { ...recipes[index], ...recipe };
  localStorage.setItem('recipes', JSON.stringify(recipes));
};

const deleteRecipe = _id => {
  recipes.filter(recipe => recipe._id !== _id);
  localStorage.setItem('recipes', JSON.stringify(recipes));
};