import "./controls.css";
import menu from "../../img/menu.svg";
import search from "../../img/search.svg";
import { Options } from "../options/Options";
import { Search } from "../search/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";

export function Controls() {
  const dispatch = useDispatch();
  return (
    <div className="details">
      <div
        onClick={() => {
          dispatch({
            type: "TOGGLE_POPUP",
            payload: { name: POPUP_NAME.SEARCH, value: true },
          });
        }}
        className={"menu"}
      >
        <img src={search} alt="search" />
      </div>

      <div
        onClick={() => {
          dispatch({
            type: "TOGGLE_POPUP",
            payload: { name: POPUP_NAME.OPTIONS, value: true },
          });
        }}
        className={"menu"}
      >
        <img src={menu} alt="meniu" />
      </div>
    </div>
  );
}
