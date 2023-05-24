import "./controls.css";
import menu from "../../img/menu.svg";
import search from "../../img/search.svg";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";
import { isMobile } from "../../selectors/selectCocktailData";
import { popupAction } from "../../actions/popup";

export function Controls() {
  const dispatch = useDispatch();
  const mobile = isMobile();
  return (
    <div className="details">
      <div
        onClick={() => {
          popupAction(POPUP_NAME.SEARCH, true)(dispatch);
        }}
        className={"menu"}
      >
        <img src={search} alt="search" />
      </div>
      {mobile && (
        <div
          onClick={() => {
            popupAction(POPUP_NAME.OPTIONS, true)(dispatch);
          }}
          className={"menu"}
        >
          <img src={menu} alt="meniu" />
        </div>
      )}
    </div>
  );
}
