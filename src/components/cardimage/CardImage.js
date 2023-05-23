import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./cardimage.css";
import { isMobile } from "../../selectors/selectCocktailData";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";
export function CardImage({ image, onClick, onLoad }) {
  const dispatch = useDispatch();
  const mobile = isMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="cocktail-image-details" onClick={onClick}>
      <div className="navigation-top-buttons">
        {mobile && (
          <div className="buttonElement">
            <img
              src={back}
              alt="back"
              onClick={() => {
                navigate(-1);
                dispatch({
                  type: "SEARCH",
                  payload: { searchParam: "" },
                });
              }}
            />
          </div>
        )}
        {!mobile && (
          <div className="buttonElement">
            <img
              src={back}
              alt="back"
              onClick={() => {
                dispatch({
                  type: "TOGGLE_POPUP",
                  payload: { name: POPUP_NAME.CARD, value: false },
                });
                dispatch({
                  type: "SEARCH",
                  payload: { searchParam: "" },
                });
              }}
            />
          </div>
        )}
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
