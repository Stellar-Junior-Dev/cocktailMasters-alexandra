import "./card.css";
import heart from "../../img/heart.svg";

export function Card({ cocktail, className = "card" }) {
  return (
    <div
      className={className ? className : "card"}
      style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}
    >
      <div className="heart-container">
        <img className="heart" src={heart}></img>
      </div>
      <div className="drink">
        <h1>{cocktail.strDrink}</h1>
      </div>
    </div>
  );
}
