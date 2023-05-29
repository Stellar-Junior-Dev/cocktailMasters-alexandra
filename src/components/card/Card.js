import "./card.css";
import heart from "../../img/heart.svg";
import pressedHeart from "../../img/pressedHeart.svg";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../selectors/selectCocktailData";

export function Card({ cocktail, className = "card", hideFavorite = false }) {
  const favorites = useSelector(selectFavorites);
  const isFav = favorites?.find((e) => e === cocktail?.idDrink);
  return (
    <div
      className={className ? className : "card"}
      style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}
    >
      {isFav && !hideFavorite && (
        <div className="heart-container">
          <img className="heart" src={isFav ? pressedHeart : heart}></img>
        </div>
      )}
      <div className="drink">
        <h1>{cocktail.strDrink}</h1>
      </div>
    </div>
  );
}
