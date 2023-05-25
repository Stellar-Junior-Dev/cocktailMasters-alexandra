import { POPUP_NAME } from "../../utils/popupNames";
import { CardImage } from "../cardimage/CardImage";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCocktailNeighbours,
  selectSelectedCocktail,
} from "../../selectors/selectCocktailData";
import Tags from "../tags/Tags";
import { Ingredient } from "../ingredients/Ingredients";
import { Instructions } from "../instructions/Instructions";

import "./cardmodal.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getCocktailByID } from "../../actions/cocktail";
import { popupAction } from "../../actions/popup";
import { useSearchParams } from "react-router-dom";
import { CocktailNav } from "../cocktailnav/CocktailNav";

export function CardModal({ open }) {
  const cocktail = useSelector(selectSelectedCocktail);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    let id = searchParams.get("idDrink");
    if (!!id) {
      getCocktailByID(id)(dispatch);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!!cocktail?.idDrink && !open && searchParams.get("idDrink")) {
      popupAction(POPUP_NAME.CARD, true)(dispatch);
    }
  }, [searchParams, open, cocktail]);

  useEffect(() => {
    if (!searchParams.get("idDrink") && open) {
      popupAction(POPUP_NAME.CARD, false)(dispatch);
    }
  }, [searchParams, open]);

  const { nextId, prevId } = useSelector(selectCocktailNeighbours);

  return (
    !!cocktail && (
      <div className={`card-background ${!open ? "hide-card" : ""}`}>
        <div className="popup-details">
          <div className="first">
            <CardImage
              cocktail={cocktail}
              image={cocktail?.strDrinkThumb}
              onBackClick={() => {
                setSearchParams({});
                dispatch({
                  type: "SEARCH",
                  payload: { searchParam: "" },
                });
              }}
            />
            {cocktail?.strTags && (
              <Tags tags={(cocktail?.strTags).split(",")} />
            )}
            <div className="cocktail-title">
              <p className="cocktail-title-text">{cocktail?.strDrink}</p>
            </div>
            <CocktailNav prevId={prevId} nextId={nextId} />
          </div>
          <div className="second">
            <Ingredient ingredients={cocktail?.ingredients} />
            <Instructions
              glass={cocktail?.strGlass}
              instructions={cocktail?.instructions}
            />
          </div>
        </div>
      </div>
    )
  );
}
