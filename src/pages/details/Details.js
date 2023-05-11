import {
  useLocation,
  useNavigate,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import "./details.css";
import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import { Ingredient } from "../../components/ingredients/Ingredients";
import { Instructions } from "../../components/instructions/Instructions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCocktailData,
  selectCocktailNeighbours,
  selectSelectedCocktail,
} from "../../selectors/selectCocktailData";

export function DetailsPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const cocktail = useSelector(selectSelectedCocktail);
  const categoryList = useSelector(selectCocktailData);
  const { nextId, prevId } = useSelector(selectCocktailNeighbours);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  useEffect(() => {
    if (!cocktail || cocktail?.id !== id) {
      let foundCocktail = undefined;
      categoryList.forEach((category) => {
        let searchResults = category.cocktails.filter((el) => el.id == id);
        if (searchResults.length > 0 && !foundCocktail) {
          foundCocktail = searchResults[0];
        }
      });
      dispatch({
        type: "SET_COCKTAIL",
        payload: { cocktail: foundCocktail },
      });
    }
  }, [cocktail, id]);

  return (
    !!cocktail && (
      <div className="detailspage">
        <div
          className="cocktail-image-details"
          onClick={() => {
            setIsScrolled(false);
          }}
        >
          <div className="navigation-top-buttons">
            <div className="buttonElement">
              <img
                src={back}
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="buttonElement">
              <img src={heart} />
            </div>
          </div>
          <img
            src={cocktail?.image}
            alt="cocktail-image"
            onLoad={(e) =>
              setHeaderHeight(e.target.getBoundingClientRect().height)
            }
          />
        </div>

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
              setIsScrolled(e.target.scrollTop > 10);
            }
          }}
        >
          <div className="cocktail-title">
            <p className="cocktail-title-text">{cocktail?.name}</p>
          </div>
          <div className="cocktail-tags">
            {cocktail?.tags.map((tag) => (
              <div key={tag} className="tag">
                <p className="tag-text">{tag}</p>
              </div>
            ))}
          </div>
          <Ingredient ingredients={cocktail?.ingredients} />
          <Instructions instructions={cocktail?.instructions} />
          <div className="details-options-container">
            {prevId != undefined ? (
              <div className="navigation-btn">
                <div
                  onClick={() => {
                    navigate(`/cocktail/${prevId}`);
                  }}
                >
                  {"<"} previous{" "}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {nextId != undefined ? (
              <div className="navigation-btn">
                <div
                  onClick={() => {
                    navigate(`/cocktail/${nextId}`);
                  }}
                >
                  next {">"}{" "}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
