export const idAction = (value) => async (dispatch) => {
  const request = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + value
  );
  const response = await request.json();
  dispatch({ type: "SET_COCKTAIL", payload: { cocktail: response.drinks[0] } });
};
