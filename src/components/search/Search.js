import "./search.css";
import x from "../../img/x.svg";
import searchicon from "../../img/search.svg";
import noresults from "../../img/nores.svg";
import { Card } from "../card/Card";
import {
  isMobile,
  selectSearchValue,
  selectSearchValueAction,
} from "../../selectors/selectCocktailData";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults } from "../../selectors/selectCocktailData";
import { useEffect, useState } from "react";
import { POPUP_NAME } from "../../utils/popupNames";
import Input from "../input/Input";
import {
  CLEAR_SEARCH,
  searchAction,
  searchValueAction,
} from "../../actions/search";
import { popupAction } from "../../actions/popup";
import { CardLink } from "../category/Category";

export function Search({ open }) {
  const dispatch = useDispatch();

  const searchResults = useSelector(selectSearchResults);
  const searchValue = useSelector(selectSearchValue);
  const mobile = isMobile();

  useEffect(() => {
    return onRemove;
  }, []);

  const onClearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  const onRemove = () => {
    onClearSearch();
    searchValueAction("")(dispatch);
  };

  const onClose = () => {
    onRemove();
    popupAction(POPUP_NAME.SEARCH, false)(dispatch);
  };

  const onInputChange = (e) => {
    searchValueAction(e.target.value)(dispatch);
    if (e.target.value !== "") {
      searchAction(e.target.value)(dispatch);
    } else {
      onClearSearch();
    }
  };

  const onCocktailClick = () => {
    searchValueAction("")(dispatch);
    onClearSearch();
    popupAction(POPUP_NAME.SEARCH, false)(dispatch);
  };

  return (
    <div className={`search-background ${!open ? "hide-search" : ""}`}>
      <div className="search-content">
        {mobile && (
          <div className="close-search" onClick={onClose}>
            <img src={x} alt="Close icon"></img>
          </div>
        )}

        <div className="search-title">
          <h2>SEARCH</h2>
        </div>
        {mobile && (
          <Input
            icon={searchicon}
            value={searchValue}
            className="search-input"
            placeholder="TYPE HERE"
            onChange={onInputChange}
          />
        )}

        <div className="results-container">
          <div className="results-text">
            <h2 className="res-txt">RESULTS</h2>
            {searchResults.length > 0 && (
              <h2 className="res-txt">{searchResults.length} matches</h2>
            )}
          </div>

          <div className="results-content">
            {searchResults.length === 0 && (
              <img className="no-result" src={noresults} alt="No results" />
            )}
            {searchResults.length > 0 && (
              <>
                {searchResults.map((cocktail) => (
                  <CardLink
                    key={cocktail?.idDrink}
                    cocktail={cocktail}
                    onCocktailClick={onCocktailClick}
                  >
                    <Card
                      className={"search-card"}
                      key={cocktail.idDrink}
                      cocktail={cocktail}
                      cocktailList={searchResults}
                    />
                  </CardLink>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
