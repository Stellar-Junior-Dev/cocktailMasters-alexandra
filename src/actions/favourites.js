import { ADD_FAVORITE } from "../constants";

export function getFavorite() {
  return JSON.parse(localStorage.getItem("favorites"));
}

export const addFavorites = (id) => async (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: {
      id: id,
    },
  });
};
