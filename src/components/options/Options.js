import "./options.css";
import x from "../../img/x.svg";
import copyright from "../../img/copyright.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";
import { popupAction } from "../../actions/popup";
import { FAVORITES_PAGE_ROUTE } from "../../constants";

export function Options({ open }) {
  const dispatch = useDispatch();

  const closeHamburger = () => {
    popupAction(POPUP_NAME.OPTIONS, false)(dispatch);
  };

  return (
    <div className={`options-background ${!open ? "hide-options" : ""}`}>
      <div className="overlay">
        <div
          className="close"
          onClick={() => {
            popupAction(POPUP_NAME.OPTIONS, false)(dispatch);
          }}
        >
          <img src={x} alt="Close icon" />
        </div>
        <div className="opt">
          <Link to={"/"} onClick={closeHamburger}>
            HOME
          </Link>
          <Link to={"/category/popular"} onClick={closeHamburger}>
            POPULAR
          </Link>
          <Link to={"/category/latest"} onClick={closeHamburger}>
            LATEST
          </Link>
          <Link to={"/category/randomselection"} onClick={closeHamburger}>
            RANDOM
          </Link>
          <Link to={FAVORITES_PAGE_ROUTE} onClick={closeHamburger}>
            FAVORITES
          </Link>
        </div>

        <div className="copyright">
          <div className="copyright-image">
            <img src={copyright} alt="Copyright details" />
          </div>
        </div>
      </div>
    </div>
  );
}
