import { Category } from "../category/Category";
import { Controls } from "../controls/Controls";
import cocktailData from "../../data/cocktailData";
import "./homepage.css";

export function HomePage() {
  return (
    <div>
      <Controls />
      <div className="title">
        <h2>COCKTAIL MASTER</h2>
      </div>

      <div className="content">
        {cocktailData.map((category) => (
          <Category
            categoryTitle={category.categoryTitle}
            cocktails={category.cocktails}
            key={category.id}
          />
        ))}
      </div>
    </div>
  );
}
