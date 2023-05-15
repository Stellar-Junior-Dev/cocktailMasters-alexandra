import "./controls.css";
import menu from "../../img/menu.svg";
import search from "../../img/search.svg";
import { Options } from "../options/Options";
import { Search } from "../search/Search";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Controls() {
  const [optionsOpen, toggleOptions] = useState(false);
  const [searchOpen, toggleSearch] = useState(false);

  return (
    <div className="details">
      <div
        onClick={() => {
          toggleSearch(true);
        }}
        className={"menu"}
      >
        <img src={search} alt="search" />
      </div>

      <div
        onClick={() => {
          toggleOptions(true);
        }}
        className={"menu"}
      >
        <img src={menu} alt="meniu" />
      </div>

      <Search toggleOpen={toggleSearch} open={searchOpen} />
      <Options toggleOpen={toggleOptions} open={optionsOpen} />
    </div>
  );
}
