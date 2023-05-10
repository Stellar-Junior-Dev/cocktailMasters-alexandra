import "./card.css";
import heart from "../../img/heart.svg";
import { useNavigate } from "react-router-dom";

export function Card({ cocktail, cocktailList }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/cocktail/${cocktail.name}`, {
          state: { cocktail: cocktail, cocktailList: cocktailList },
        });
      }}
      className="card"
      style={{ backgroundImage: `url(${cocktail.image})` }}
    >
      <div className="heart-container">
        <img className="heart" src={heart}></img>
      </div>
      <div className="drink">
        <h1>{cocktail.name}</h1>
      </div>
    </div>
  );
}
