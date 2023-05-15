import React from "react";
import { useSelector } from "react-redux";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import { Search } from "../search/Search";
import { Options } from "../options/Options";
import { POPUP_NAME } from "../../utils/popupNames";

export function PopupWrapper() {
  const open = useSelector(selectOpenPopup);
  return (
    <>
      <Search open={open === POPUP_NAME.SEARCH} />
      <Options open={open === POPUP_NAME.OPTIONS} />
    </>
  );
}
