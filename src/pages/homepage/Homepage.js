import { Category } from "../../components/category/Category";
import { Controls } from "../../components/controls/Controls";
import { useSelector } from "react-redux";
import "./homepage.css";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { isMobile } from "../../selectors/selectCocktailData";
import { WebOptions } from "../../components/weboptions/WebOptions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function HomePage() {
  const cocktailData = useSelector(selectCocktailData);
  const mobile = isMobile();
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    document.body.onscroll = (e) => {
      console.log("sall", e);
    };
  }, []);
  return (
    <div className="homepage">
      <div className="info">
        {mobile && <Controls />}
        {!mobile && <WebOptions source={"homepage"} />}

        <div className="title">
          <Link to={"/"}>COCKTAIL MASTER</Link>
        </div>
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
