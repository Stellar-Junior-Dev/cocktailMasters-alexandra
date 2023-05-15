import { Category } from "../../components/category/Category";
import { Controls } from "../../components/controls/Controls";
import { useSelector } from "react-redux";
import "./homepage.css";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { isMobile } from "../../selectors/selectCocktailData";
import { WebOptions } from "../../components/weboptions/WebOptions";

export function HomePage() {
  const cocktailData = useSelector(selectCocktailData);
  const mobile = isMobile();
  return (
    <div>
      {mobile && <Controls />}
      {!mobile && <WebOptions />}

      <div className="title">
        <h2>COCKTAIL MASTER</h2>
      </div>

      <div className="content">
        {cocktailData.map((category) => (
          <Category
            id={category.id}
            categoryTitle={category.categoryTitle}
            cocktails={category.cocktails}
            key={category.id}
            source={"homepage"}
          />
        ))}
      </div>
    </div>
  );
}
