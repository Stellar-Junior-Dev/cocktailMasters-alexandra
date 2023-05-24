import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import "./cardimage.css";

export function CardImage({ image, onClick, onLoad, onBackClick }) {
  return (
    <div className="cocktail-image-details" onClick={onClick}>
      <div className="navigation-top-buttons">
        <div className="buttonElement">
          <img src={back} alt="back" onClick={onBackClick} />
        </div>
        <div className="buttonElement">
          <img src={heart} />
        </div>
      </div>
      <img
        className="cocktail-image"
        src={image}
        alt="cocktail-image"
        onLoad={onLoad}
      />
    </div>
  );
}
