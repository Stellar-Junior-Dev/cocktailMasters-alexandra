export const searchAction = (value) => async (dispatch) => {
  const request = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + value
  );
  const response = await request.json();
  dispatch({ type: "SEARCH", payload: { drinks: response.drinks } });
};
