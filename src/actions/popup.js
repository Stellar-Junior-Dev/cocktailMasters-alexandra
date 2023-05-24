export const TOGGLE_POPUP = "TOGGLE_POPUP";

export const popupAction = (name, value) => async (dispatch) => {
  dispatch({
    type: TOGGLE_POPUP,
    payload: {
      name: name,
      value: value,
    },
  });
};
