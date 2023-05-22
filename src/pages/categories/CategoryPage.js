import { Controls } from "../../components/controls/Controls";
import { Category } from "../../components/category/Category";
import { WebOptions } from "../../components/weboptions/WebOptions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectSelectedCategory } from "../../selectors/selectCocktailData";
import "./categoryPage.css";
import { isMobile } from "../../selectors/selectCocktailData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
export function CategoryPage() {
  const open = useSelector(selectOpenPopup);
  const dispatch = useDispatch();
  const category = useSelector(selectSelectedCategory);
  const mobile = isMobile();
  let { categoryId } = useParams();
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    document.body.onscroll = (e) => {
      setScrollTop(e.currentTarget.pageYOffset);
    };
    dispatch({
      type: "SET_CATEGORY",
      payload: { id: categoryId },
    });
  }, [categoryId]);

  return (
    !!category && (
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
            className="category-page"
            id={category.categoryId}
            categoryTitle={category.categoryTitle}
            cocktails={category.cocktails}
            source={"cat-page"}
          />
        </div>
      </>
    )
  );
}
