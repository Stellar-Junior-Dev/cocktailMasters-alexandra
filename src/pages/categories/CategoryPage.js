import { Controls } from "../../components/controls/Controls";
import { Category } from "../../components/category/Category";
import { WebOptions } from "../../components/weboptions/WebOptions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectCategoryDrinks } from "../../selectors/selectCocktailData";
import "./categoryPage.css";
import { isMobile } from "../../selectors/selectCocktailData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import { categoryAction } from "../../actions/category";
export function CategoryPage() {
  const open = useSelector(selectOpenPopup);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryDrinks);
  const mobile = isMobile();
  let { categoryTitle } = useParams();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    document.body.onscroll = (e) => {
      setScrollTop(e.currentTarget.pageYOffset);
    };
    categoryAction(categoryTitle)(dispatch);
  }, [categoryTitle]);

  return (
    !!categories[categoryTitle] && (
      <>
        {mobile && <Controls />}
        <div className={`info ${scrollTop > 10 && !open ? "scrolled" : ""}`}>
          <div className="title">
            <Link to={"/"}>COCKTAIL MASTER</Link>
          </div>

          {!mobile && <WebOptions source={"cat-page"} />}
        </div>
        <div className="content category">
          <Category
            showViewAll={false}
            className="category-page"
            id={categoryTitle}
            categoryTitle={categoryTitle}
            cocktails={categories[categoryTitle]}
            source={"cat-page"}
          />
        </div>
      </>
    )
  );
}
