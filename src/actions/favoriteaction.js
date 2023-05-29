import { API_KEY, API_URL } from "../constants";

export const GET_FAVORITES_ACTION = "GET_FAVORITES_ACTION";
export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";

export const getFavoritesById = (list, cachedCocktails) => async (dispatch) => {
  let favoriteCocktails = [];
  let cache = { ...cachedCocktails };
  for (let favorite of list) {
    if (!!cachedCocktails[favorite]) {
      favoriteCocktails.push(cachedCocktails[favorite]);
    } else {
      const request = await fetch(
        `${API_URL}/v2/${API_KEY}/lookup.php?i=${favorite}`
      );
      const response = await request.json();
      favoriteCocktails.push(response.drinks[0]);
      cache[response.drinks[0].idDrink] = response.drinks[0];
    }
  }
  dispatch({
    type: GET_FAVORITES_ACTION,
    payload: { favoriteCocktails: favoriteCocktails, cachedCocktails: cache },
  });
};

export const getAllFavorites = () => async (dispatch) => {
  let favoriteIDs = JSON.parse(localStorage.getItem("favorites")) ?? [];

  dispatch({
    type: GET_ALL_FAVORITES,
    payload: { favoriteIDs },
  });
};
