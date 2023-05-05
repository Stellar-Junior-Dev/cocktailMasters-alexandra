import "./card.css";
import heart from "../../img/heart.svg";
import { useNavigate } from "react-router-dom";

export function Card({ cocktail }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/cocktail/${cocktail.name}`, {
          state: { name: cocktail.name },
        });
      }}
      className="card"
      style={{ backgroundImage: `url(${cocktail.image})` }}
    >
      <div class="heart-container">
        <img class="heart" src={heart}></img>
      </div>
      <div class="drink">
        <h1>{cocktail.name}</h1>
      </div>
    </div>
  );
}
