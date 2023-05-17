import "./card.css";
import heart from "../../img/heart.svg";
import { Link } from "react-router-dom";
import { isMobile } from "../../selectors/selectCocktailData";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";

export function Card({ cocktail, className }) {
  const mobile = isMobile();
  const dispatch = useDispatch();
  return (
    <>
      {mobile && (
        <Link
          to={`/cocktail/${cocktail.id}`}
          className={className ? className : "card"}
          style={{ backgroundImage: `url(${cocktail.image})` }}
        >
          <div className="heart-container">
            <img className="heart" src={heart}></img>
          </div>
          <div className="drink">
            <h1>{cocktail.name}</h1>
          </div>
        </Link>
      )}
      {!mobile && (
        <div
          className={className ? className : "card"}
          style={{ backgroundImage: `url(${cocktail.image})` }}
          onClick={() => {
            dispatch({
              type: "TOGGLE_POPUP",
              payload: { name: POPUP_NAME.CARD, value: true },
            });
            dispatch({
              type: "SET_COCKTAIL",
              payload: { id: cocktail.id },
            });
          }}
        >
          <div className="heart-container">
            <img className="heart" src={heart}></img>
          </div>
          <div className="drink">
            <h1>{cocktail.name}</h1>
          </div>
        </div>
      )}
    </>
  );
}
