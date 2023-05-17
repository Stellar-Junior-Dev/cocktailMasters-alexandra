import { useNavigate } from "react-router";
import "./cocktailnav.css";

export function CocktailNav({ prevId, nextId }) {
  const navigate = useNavigate();
  return (
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
  );
}
