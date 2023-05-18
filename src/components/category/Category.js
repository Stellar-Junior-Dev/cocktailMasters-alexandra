import "./category.css";
import { Card } from "../card/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export function Category({ categoryTitle, cocktails, id, className, source }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`category ${source === "cat-page" ? "cat-page" : ""}`}>
        <div className="catDetails">
          <div className="catTitle">
            <h1>{categoryTitle}</h1>
          </div>
          {source === "homepage" && (
            <div className="view">
              <Link
                to={`/category/${id}`}
                onClick={() => {
                  dispatch({ type: "SET_CATEGORY", payload: { id: id } });
                }}
              >
                view all {">"}
              </Link>
            </div>
          )}
        </div>

        <div className={className ? className : "cardContainer"}>
          {cocktails.map((cocktail) => (
            <Card
              key={cocktail.id}
              cocktail={cocktail}
              cocktailList={cocktails}
            />
          ))}
        </div>
      </div>
    </>
  );
}
