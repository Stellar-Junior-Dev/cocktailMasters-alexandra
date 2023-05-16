import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CardImage({ image, onClick, onLoad }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="cocktail-image-details" onClick={onClick}>
      <div className="navigation-top-buttons">
        <div className="buttonElement">
          <img
            src={back}
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="buttonElement">
          <img src={heart} />
        </div>
      </div>
      <img src={image} alt="cocktail-image" onLoad={onLoad} />
    </div>
  );
}
