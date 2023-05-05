import "./card.css";
import heart from "../../img/heart.svg";
import { useNavigate } from "react-router-dom";

export function Card({ image, name }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div class="heart-container">
        <img class="heart" src={heart}></img>
      </div>
      <div class="drink">
        <h1>{name}</h1>
      </div>
    </div>
  );
}
