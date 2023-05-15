import "./card.css";
import heart from "../../img/heart.svg";
import { Link } from "react-router-dom";

export function Card({ cocktail, className }) {
  return (
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
  );
}
