import "./card.css";
import heart from "../../img/heart.svg";
import { Link } from "react-router-dom";
import { isMobile } from "../../selectors/selectCocktailData";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";

export function Card({ cocktail, className }) {
  console.log(cocktail);
  const mobile = isMobile();
  const dispatch = useDispatch();
  return (
    <>
      {mobile && (
        <Link
          to={`/cocktail/${cocktail.idDrink}`}
          className={className ? className : "card"}
          style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}
        >
          <div className="heart-container">
            <img className="heart" src={heart}></img>
          </div>
          <div className="drink">
            <h1>{cocktail.strDrink}</h1>
          </div>
        </Link>
      )}
      {!mobile && (
        <div
          className={className ? className : "card"}
          style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}
          onClick={() => {
            dispatch({
              type: "TOGGLE_POPUP",
              payload: { name: POPUP_NAME.CARD, value: true },
            });
            dispatch({
              type: "SET_COCKTAIL",
              payload: { cocktail },
            });
          }}
        >
          <div className="heart-container">
            <img className="heart" src={heart}></img>
          </div>
          <div className="drink">
            <h1>{cocktail.strDrink}</h1>
          </div>
        </div>
      )}
    </>
  );
}
