import "./weboptions.css";
import search from "../../img/search.svg";
import x from "../../img/x.svg";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";
import searchicon from "../../img/search.svg";
import { useState } from "react";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import Input from "../input/Input";
import { searchAction } from "../../actions/search";
import { popupAction } from "../../actions/popup";

export function WebOptions({ source }) {
  const open = useSelector(selectOpenPopup);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const cocktailData = useSelector(selectCocktailData);

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value !== "") {
      searchAction(e.target.value)(dispatch);
    } else {
      clearSearch();
    }
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  const onSearchClick = () => {
    popupAction(POPUP_NAME.SEARCH, true)(dispatch);
  };

  const onCloseSearch = () => {
    clearSearch();
    setSearchValue("");
    popupAction(POPUP_NAME.OPTIONS, false)(dispatch);
  };

  return (
    <div className={`weboptions ${source === "cat-page" ? "cat-page" : ""}`}>
      <div className="categories">
        {open === POPUP_NAME.SEARCH && (
          <Input
            icon={searchicon}
            value={searchValue}
            className="search-input"
            placeholder="TYPE HERE"
            onChange={onInputChange}
          />
        )}

        {open !== POPUP_NAME.SEARCH && (
          <>
            <Link to="/">HOME</Link>
            <Link to="/category/popular">POPULAR</Link>
            <Link to="/category/latest">LATEST</Link>
            <Link to="/category/randomselection">RANDOM</Link>
          </>
        )}
      </div>
      {open !== POPUP_NAME.SEARCH ? (
        <div className="websearch" onClick={onSearchClick}>
          <img src={search} alt="search" />
        </div>
      ) : (
        <div className="close-search" onClick={onCloseSearch}>
          <img src={x} alt="Close icon"></img>
        </div>
      )}
    </div>
  );
}
