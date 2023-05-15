import "./search.css";
import x from "../../img/x.svg";
import searchicon from "../../img/search.svg";
import noresults from "../../img/nores.svg";
import { Card } from "../card/Card";

import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults } from "../../selectors/selectCocktailData";
import { useEffect, useState } from "react";
import { POPUP_NAME } from "../../utils/popupNames";

export function Search({ open }) {
  const dispatch = useDispatch();

  const searchResults = useSelector(selectSearchResults);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    return () => {
      dispatch({
        type: "SEARCH",
        payload: { searchParam: "" },
      });
    };
  }, []);
  return (
    <div className={`search-background ${!open ? "hide-search" : ""}`}>
      <div className="search-content">
        <div
          className="close"
          onClick={() => {
            dispatch({
              type: "SEARCH",
              payload: { searchParam: "" },
            });
            setSearchValue("");
            dispatch({
              type: "TOGGLE_POPUP",
              payload: { name: POPUP_NAME.OPTIONS, value: false },
            });
          }}
        >
          <img src={x} alt="Close icon"></img>
        </div>

        <div className="search-title">
          <h2>SEARCH</h2>
        </div>
        <div className="form-div>">
          <form className="search-form">
            <input
              value={searchValue}
              className="search-input"
              type="text"
              id="search"
              name="search"
              placeholder="TYPE HERE"
              onChange={(e) => {
                setSearchValue(e.target.value);
                dispatch({
                  type: "SEARCH",
                  payload: { searchParam: e.target.value },
                });
              }}
            />
            <div className="submit-btn" type="submit">
              <img src={searchicon} alt="Search icon" />
            </div>
          </form>
        </div>

        <div className="results-container">
          <div className="results-text">
            <h2>RESULTS</h2>
          </div>

          <div className="results-content">
            {searchResults.length === 0 && (
              <img className="no-result" src={noresults} alt="No results" />
            )}
            {searchResults.length > 0 && (
              <>
                {searchResults.map((cocktail) => (
                  <Card
                    className={"search-card"}
                    key={cocktail.id}
                    cocktail={cocktail}
                    cocktailList={searchResults}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
