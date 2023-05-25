import { API_KEY, API_URL } from "../constants";

export const SEARCH_ACTION_TYPE = "SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const searchAction = (value) => async (dispatch) => {
  const request = await fetch(`${API_URL}/v2/${API_KEY}/search.php?s=${value}`);
  const response = await request.json();

  dispatch({
    type: SEARCH_ACTION_TYPE,
    payload: { drinks: response.drinks },
  });
};

export const searchValueAction = (value) => async (dispatch) => {
  dispatch({
    type: "SEARCH_VALUE",
    payload: { value },
  });
};
