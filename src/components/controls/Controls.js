import "./controls.css";
import menu from "../../img/menu.svg";
import search from "../../img/search.svg";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";
import { isMobile } from "../../selectors/selectCocktailData";

export function Controls() {
  const dispatch = useDispatch();
  const mobile = isMobile();
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
      {mobile && (
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
      )}
    </div>
  );
}
