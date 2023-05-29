import { ADD_FAVORITE } from "../constants";
import { getAllFavorites } from "./favoriteaction";

export const addFavorites = (id) => async (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: {
      id: id,
    },
  });
  getAllFavorites()(dispatch);
};
