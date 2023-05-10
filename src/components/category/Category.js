import "./category.css";
import { Card } from "../card/Card";

export function Category({ categoryTitle, cocktails }) {
  return (
    <>
      <div className="category">
        <div className="catDetails">
          <div className="catTitle">
            <h1>{categoryTitle}</h1>
          </div>
          <div className="view">
            <a>view all {">"}</a>
          </div>
        </div>

        <div className="cardContainer">
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
