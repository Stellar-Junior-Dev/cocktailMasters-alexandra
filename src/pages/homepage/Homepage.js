import { Category } from "../../components/category/Category";
import { Controls } from "../../components/controls/Controls";
import { useSelector } from "react-redux";
import "./homepage.css";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import { isMobile } from "../../selectors/selectCocktailData";
import { WebOptions } from "../../components/weboptions/WebOptions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Favorites } from "../../components/favorites/Favorites";

export function HomePage() {
  const mobile = isMobile();
  const open = useSelector(selectOpenPopup);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    document.body.onscroll = (e) => {
      setScrollTop(e.currentTarget.pageYOffset);
    };
  }, []);
  return (
    <div className="homepage">
      <div className={`info ${scrollTop > 10 && !open ? "scrolled" : ""}`}>
        {mobile && <Controls />}
        {!mobile && <WebOptions source={"homepage"} />}

        <div className="title">
          <Link to={"/"}>COCKTAIL MASTER</Link>
        </div>
      </div>

      <div className="content">
        <Category categoryTitle={"popular"} />
        <Category categoryTitle={"latest"} />
        <Category categoryTitle={"randomselection"} categoryName={"random"} />
        <Favorites />
      </div>
    </div>
  );
}
