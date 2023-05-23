import { useNavigate, useParams } from "react-router-dom";
import "./details.css";
import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import { Ingredient } from "../../components/ingredients/Ingredients";
import { Instructions } from "../../components/instructions/Instructions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idAction } from "../../actions/id";
import {
  selectCocktailData,
  selectCocktailNeighbours,
  selectSelectedCocktail,
} from "../../selectors/selectCocktailData";
import { CardImage } from "../../components/cardimage/CardImage";
import Tags from "../../components/tags/Tags";
import { CocktailNav } from "../../components/cocktailnav/CocktailNav";
import { getInstructions } from "../../utils/helpers";
import { getIngredients } from "../../utils/helpers";

export function DetailsPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const cocktail = useSelector(selectSelectedCocktail);
  // const { nextId, prevId } = useSelector(selectCocktailNeighbours);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  useEffect(() => {
    idAction(id)(dispatch);
  }, [id]);

  console.log(cocktail);

  return (
    !!cocktail && (
      <div className="detailspage">
        <CardImage
          onClick={() => {
            setIsScrolled(false);
          }}
          onLoad={(e) =>
            setHeaderHeight(e.target.getBoundingClientRect().height)
          }
          image={cocktail?.strDrinkThumb}
        />

        <div
          className="cocktail-container"
          style={{
            height: `${
              headerHeight > window.innerHeight
                ? window.innerHeight / 2
                : isScrolled
                ? window.innerHeight - 84
                : window.innerHeight - headerHeight + 40
            }px`,
            top: `${
              headerHeight > window.innerHeight
                ? window.innerHeight / 2
                : isScrolled
                ? 84
                : headerHeight - 40
            }px`,
          }}
          onScroll={(e) => {
            // setScrollTop(scrollTop - e.target.scrollTop);
            // pentru fun
            if (e.target.scrollTop != 0) {
              setIsScrolled(e.target.scrollTop > 0);
            }
          }}
        >
          <div className="cocktail-title">
            <p className="cocktail-title-text">{cocktail?.strDrink}</p>
          </div>
          {cocktail?.strTags && <Tags tags={(cocktail?.strTags).split(",")} />}

          <Ingredient ingredients={cocktail?.ingredients} />
          <Instructions
            glass={cocktail?.strGlass}
            instructions={cocktail?.instructions}
          />
          {/* <CocktailNav prevId={prevId} nextId={nextId} /> */}
        </div>
      </div>
    )
  );
}
