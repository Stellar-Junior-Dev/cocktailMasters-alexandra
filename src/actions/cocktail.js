import { API_KEY, API_URL } from "../constants";

export const GET_COCKTAIL_BY_ID_ACTION = "GET_COCKTAIL_BY_ID_ACTION";

export const getCocktailByID = (value) => async (dispatch) => {
  const request = await fetch(`${API_URL}/v2/${API_KEY}/lookup.php?i=${value}`);
  const response = await request.json();

  dispatch({
    type: GET_COCKTAIL_BY_ID_ACTION,
    payload: { cocktail: response.drinks[0] },
  });
};
