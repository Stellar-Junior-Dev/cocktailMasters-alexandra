import "./search.css";
import x from "../../img/x.svg";
import search from "../../img/search.svg";
import noresults from "../../img/nores.svg";
export function Search({ open, toggleOpen }) {
  return (
    <div className={`search-background ${!open ? "hide-search" : ""}`}>
      <div className="search-content">
        <div
          className="close"
          onClick={() => {
            toggleOpen(false);
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
              className="search-input"
              type="text"
              id="search"
              name="search"
              placeholder="TYPE HERE"
            />
            <div className="submit-btn" type="submit">
              <img src={search} alt="Search icon" />
            </div>
          </form>
        </div>

        <div className="results-container">
          <div className="results-text">
            <h2>RESULTS</h2>
          </div>

          <div className="results-content">
            <img src={noresults} alt="No results" />
          </div>
        </div>
      </div>
    </div>
  );
}
