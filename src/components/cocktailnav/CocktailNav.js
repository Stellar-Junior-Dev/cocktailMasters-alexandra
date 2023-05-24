import { useNavigate } from "react-router";
import "./cocktailnav.css";
import { isMobile } from "../../selectors/selectCocktailData";
import { useDispatch } from "react-redux";
import {
  GET_COCKTAIL_BY_ID_ACTION,
  getCocktailByID,
} from "../../actions/cocktail";
import { useSearchParams } from "react-router-dom";

export function CocktailNav({ prevId, nextId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mobile = isMobile();
  return (
    <div className="details-options-container">
      {prevId != undefined ? (
        <div className="navigation-btn">
          {mobile && (
            <div
              onClick={() => {
                navigate(`/cocktail/${prevId}`);
              }}
            >
              {"<"} previous{" "}
            </div>
          )}
          {!mobile && (
            <div
              onClick={() => {
                setSearchParams({ idDrink: prevId });
                getCocktailByID(prevId)(dispatch);
              }}
            >
              {"<"} previous{" "}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
      {nextId != undefined ? (
        <div className="navigation-btn">
          {mobile && (
            <div
              onClick={() => {
                navigate(`/cocktail/${nextId}`);
              }}
            >
              next {">"}{" "}
            </div>
          )}
          {!mobile && (
            <div
              onClick={() => {
                setSearchParams({ idDrink: nextId });
                getCocktailByID(nextId)(dispatch);
              }}
            >
              {" "}
              next{">"}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
