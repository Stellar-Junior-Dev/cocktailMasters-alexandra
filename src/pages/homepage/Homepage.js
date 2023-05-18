import { Category } from "../../components/category/Category";
import { Controls } from "../../components/controls/Controls";
import { useSelector } from "react-redux";
import "./homepage.css";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { isMobile } from "../../selectors/selectCocktailData";
import { WebOptions } from "../../components/weboptions/WebOptions";
import { Link } from "react-router-dom";

export function HomePage() {
  const cocktailData = useSelector(selectCocktailData);
  const mobile = isMobile();
  return (
    <>
      <div className="info">
        {mobile && <Controls />}
        {!mobile && <WebOptions source={"homepage"} />}

        <Link to={"/"} className="title">
          <h2>COCKTAIL MASTER</h2>
        </Link>
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
    </>
  );
}
