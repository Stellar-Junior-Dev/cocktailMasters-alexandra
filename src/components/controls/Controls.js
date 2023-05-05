import "./controls.css";
import menu from "../../img/menu.svg";
import search from "../../img/search.svg";
import { Search } from "../Search/Search";
import { Options } from "../Options/Options";
import { useState } from "react";

export function Controls() {
  const [optionsOpen, toggleOptions] = useState(false);
  const [searchOpen, toggleSearch] = useState(false);

  return (
    <div className="details">
      <div
        onClick={() => {
          toggleOptions(true);
        }}
        className={"menu"}
      >
        <img src={menu} />
      </div>

      <div
        onClick={() => {
          toggleSearch(true);
        }}
        className={"menu"}
      >
        <img src={search} />
      </div>
      <Search toggleOpen={toggleSearch} open={searchOpen} />
      <Options toggleOpen={toggleOptions} open={optionsOpen} />
    </div>
  );
}
