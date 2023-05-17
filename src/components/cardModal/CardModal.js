import { POPUP_NAME } from "../../utils/popupNames";
import { CardImage } from "../cardimage/CardImage";
import "./cardmodal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCocktailNeighbours,
  selectSelectedCocktail,
} from "../../selectors/selectCocktailData";
import Tags from "../tags/Tags";
import { Ingredient } from "../ingredients/Ingredients";
import { Instructions } from "../instructions/Instructions";
import { CocktailNav } from "../cocktailnav/CocktailNav";

export function CardModal({ open }) {
  const cocktail = useSelector(selectSelectedCocktail);
  const dispatch = useDispatch();
  const { nextId, prevId } = useSelector(selectCocktailNeighbours);
  return (
    !!cocktail && (
      <div className={`card-background ${!open ? "hide-card" : ""}`}>
        <div className="popup-details">
          <div className="first">
            <CardImage image={cocktail?.image} />
            <Tags tags={cocktail?.tags} />
            <div className="cocktail-title">
              <p className="cocktail-title-text">{cocktail?.name}</p>
            </div>
            <CocktailNav prevId={prevId} nextId={nextId} />
          </div>
          <div className="second">
            <Ingredient ingredients={cocktail?.ingredients} />
            <Instructions instructions={cocktail?.instructions} />
          </div>
        </div>
      </div>
    )
  );
}
