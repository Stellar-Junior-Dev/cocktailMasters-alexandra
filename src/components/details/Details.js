import { useLocation } from "react-router-dom";
import "./details.css";
import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import { Ingredient } from "../ingredients/Ingredients";
import { Instructions } from "../instructions/Instructions";
export function DetailsPage() {
  const location = useLocation();
  const cocktail = location.state.cocktail;
  return (
    <div className="detailspage">
      <div class="cocktail-image-details">
        <img src={cocktail.image} alt="cocktail-image" />
      </div>
      <div className="back">
        <img class="back-btn" src={back} />
      </div>
      <div className="favorite">
        <img class="favorite-heart" src={heart} />
      </div>
      <div className="cocktail-container">
        <div className="cocktail-title">
          <p className="cocktail-title-text">{cocktail.name}</p>
        </div>
        <div className="cocktail-tags">
          <div class="tag">
            <p className="tag-text">iba</p>
          </div>
          <div class="tag">
            <p className="tag-text">expensive</p>
          </div>
          <div class="tag">
            <p className="tag-text">expensive</p>
          </div>
          <div class="tag">
            <p className="tag-text">expensive</p>
          </div>
        </div>
        <Ingredient ingredients={cocktail.ingredients} />
        <Instructions instructions={cocktail.instructions} />
        <div className="details-options-container">
          <div className="previous-btn">
            <a>{"<"} previous </a>
          </div>
          <div className="next-btn">
            <a>next {">"} </a>
          </div>
        </div>
      </div>
    </div>
  );
}
