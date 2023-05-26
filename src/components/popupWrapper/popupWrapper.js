import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import { Search } from "../search/Search";
import { Options } from "../options/Options";
import { POPUP_NAME } from "../../utils/popupNames";
import { isMobile } from "../../selectors/selectCocktailData";
import { CardModal } from "../cardModal/CardModal";
import { getFavorite } from "../../actions/favourites";

export function PopupWrapper() {
  const open = useSelector(selectOpenPopup);
  const mobile = isMobile();
  const dispatch = useDispatch();

  useEffect(() => {
    const favorites = getFavorite();
    dispatch({
      type: "SET_FAVORITES",
      payload: { favorites: favorites },
    });
  }, []);

  return (
    <>
      <Search open={open === POPUP_NAME.SEARCH} />
      {mobile && <Options open={open === POPUP_NAME.OPTIONS} />}
      {!mobile && <CardModal open={open === POPUP_NAME.CARD} />}
    </>
  );
}
