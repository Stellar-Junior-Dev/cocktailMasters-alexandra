import { API_KEY, API_URL } from "../constants";

export const GET_CATEGORY_ACTION = "GET_CATEGORY_ACTION";

export const categoryAction = (title) => async (dispatch) => {
  const request = await fetch(`${API_URL}/v2/${API_KEY}/${title}.php`);
  const response = await request.json();
  dispatch({
    type: GET_CATEGORY_ACTION,
    payload: { drinks: response.drinks, title: title },
  });
};
