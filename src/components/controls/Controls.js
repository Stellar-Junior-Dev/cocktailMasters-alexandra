import "./controls.css";
import menu from "../../img/menu.svg";
import search from "../../img/search.svg";

export function Controls() {
  function showOptions() {
    const searchBackground = document.querySelector(".options-background");
    searchBackground.classList.remove("hide-options");
  }

  function showSearch() {
    const searchBackground = document.querySelector(".search-background");
    searchBackground.classList.remove("hide-search");
  }
  return (
    <>
      <a class="menu">
        <img onClick={showOptions} src={menu} />
      </a>

      <a class="search" onClick={showSearch}>
        <img src={search} />
      </a>
    </>
  );
}
