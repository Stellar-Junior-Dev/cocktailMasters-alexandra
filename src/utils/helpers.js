export const getInstructions = (cocktail) => {
  const arr = [];
  const keys = [
    "strInstructions",
    "strInstructionsDE",
    "strInstructionsES",
    "strInstructionsFR",
    "strInstructionsIT",
  ];

  keys.forEach((key) => {
    if (cocktail?.[key]) {
      arr.push({ icon: key, text: cocktail?.[key] });
    }
  });
  return arr;
};

export const getIngredients = (cocktail) => {
  const arr = [];
  const keys = Array.from({ length: 15 }, (_, i) => i + 1);
  keys.forEach((key) => {
    if (cocktail?.["strMeasure" + key] && cocktail?.["strIngredient" + key]) {
      arr.push({
        measure: cocktail?.["strMeasure" + key],
        ingredient: cocktail?.["strIngredient" + key],
        image: getIngredientImage(cocktail?.["strIngredient" + key]),
      });
    }
  });
  return arr;
};

export const getIngredientImage = (ingredient) =>
  `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`;
