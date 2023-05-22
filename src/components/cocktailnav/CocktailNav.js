import { useNavigate } from "react-router";
import "./cocktailnav.css";
import { isMobile } from "../../selectors/selectCocktailData";
import { useDispatch } from "react-redux";

export function CocktailNav({ prevId, nextId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
                dispatch({
                  type: "SET_COCKTAIL",
                  payload: { id: prevId },
                });
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
                dispatch({
                  type: "SET_COCKTAIL",
                  payload: { id: nextId },
                });
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
