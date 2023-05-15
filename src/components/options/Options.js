import "./options.css";
import x from "../../img/x.svg";
import copyright from "../../img/copyright.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { POPUP_NAME } from "../../utils/popupNames";

export function Options({ open }) {
  const dispatch = useDispatch();
  const cocktailData = useSelector(selectCocktailData);

  return (
    <div className={`options-background ${!open ? "hide-options" : ""}`}>
      <div className="overlay">
        <div
          className="close"
          onClick={() => {
            dispatch({
              type: "TOGGLE_POPUP",
              payload: { name: POPUP_NAME.OPTIONS, value: false },
            });
          }}
        >
          <img src={x} alt="Close icon" />
        </div>
        <div className="opt">
          <Link
            to={"/"}
            onClick={() => {
              dispatch({
                type: "TOGGLE_POPUP",
                payload: { name: POPUP_NAME.OPTIONS, value: false },
              });
            }}
          >
            HOME
          </Link>

          {cocktailData.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  payload: { id: category.id },
                });
                dispatch({
                  type: "TOGGLE_POPUP",
                  payload: { name: POPUP_NAME.OPTIONS, value: false },
                });
              }}
            >
              {category.categoryTitle}
            </Link>
          ))}
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
