import "./card.css";
import heart from "../../img/heart.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export function Card({ cocktail, className }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/cocktail/${cocktail.id}`}
      onClick={() => {
        dispatch({ type: "SET_COCKTAIL", payload: { cocktail } });
      }}
      className={`card ${className ? className : ""}`}
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
