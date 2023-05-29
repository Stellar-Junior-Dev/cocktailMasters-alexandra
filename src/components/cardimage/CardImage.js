import heart from "../../img/heart.svg";
import pressedHeart from "../../img/pressedHeart.svg";
import back from "../../img/back.png";
import "./cardimage.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../../actions/favourites";
import { selectFavorites } from "../../selectors/selectCocktailData";

export function CardImage({ image, onClick, onLoad, onBackClick, cocktail }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFav = favorites?.find((e) => e === cocktail?.idDrink);

  return (
    <div className="cocktail-image-details" onClick={onClick}>
      <div className="navigation-top-buttons">
        <div className="buttonElement">
          <img src={back} alt="back" onClick={onBackClick} />
        </div>
        <div
          className="buttonElement"
          onClick={() => {
            addFavorites(cocktail?.idDrink)(dispatch);
          }}
        >
          <img src={isFav ? pressedHeart : heart} alt="favorite" />
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
