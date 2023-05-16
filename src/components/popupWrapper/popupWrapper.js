import React from "react";
import { useSelector } from "react-redux";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import { Search } from "../search/Search";
import { Options } from "../options/Options";
import { POPUP_NAME } from "../../utils/popupNames";
import { isMobile } from "../../selectors/selectCocktailData";

export function PopupWrapper() {
  const open = useSelector(selectOpenPopup);
  const mobile = isMobile();
  return (
    <>
      <Search open={open === POPUP_NAME.SEARCH} />
      {mobile && <Options open={open === POPUP_NAME.OPTIONS} />}
    </>
  );
}
